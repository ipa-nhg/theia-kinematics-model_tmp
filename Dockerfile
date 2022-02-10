FROM ubuntu:focal
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && apt-get install -y maven git

RUN adduser --disabled-password --gecos '' theia
WORKDIR /home/theia
RUN git clone https://github.com/ipa320/kinematics-model -b main
# COPY --chown=theia:theia kinematics-model kinematics-model

WORKDIR kinematics-model
RUN mvn clean package -U -DskipTests -f de.fraunhofer.ipa.kinematics.xtext.parent

#COPY --from=java-mvn-base /opt/ibm/java/ /opt/ibm/java/
#ENV JAVA_HOME /opt/ibm/java/jre
#ENV PATH /opt/ibm/java/jre/bin:/opt/ibm/java/bin/:$PATH

WORKDIR /home/theia
COPY --chown=theia:theia theia theia-app

RUN chown -R theia:theia /home/theia
RUN apt-get update && apt-get install -y nodejs  npm libsecret-1-dev
RUN npm install --global yarn -y
#libx11-dev libxkbfile-dev -y

USER theia
WORKDIR /home/theia/theia-app
RUN yarn cache clean
RUN yarn install --ignore-engines --verbose

EXPOSE 3000

CMD ["yarn", "--cwd=browser-app", "start", "--hostname=0.0.0.0"]
