import { Container, injectable } from "inversify";
import { DiagramConfiguration} from "sprotty-theia";

export const ROS_DIAGRAM_TYPE = 'ros-diagram';

@injectable()
export class RosDiagramConfiguration implements DiagramConfiguration {
    createContainer(widgetId: string): Container {
        throw new Error("Method not implemented.");
    }
    diagramType = ROS_DIAGRAM_TYPE;

}