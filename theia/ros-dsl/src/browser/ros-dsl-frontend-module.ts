/**
 * Generated using theia-extension-generator
 */

import { ContainerModule } from "inversify";
import { LanguageGrammarDefinitionContribution } from '@theia/monaco/lib/browser/textmate';
import { LanguageClientContribution } from '@theia/languages/lib/browser';

import { RosLanguageClientContribution } from './ros-dsl-client-contribution';
import { RosGrammarContribution } from './ros-dsl-grammar-contribution';



export default new ContainerModule(bind => {
    // add your contribution bindings here

    bind(RosLanguageClientContribution).toSelf().inSingletonScope();
    bind(LanguageClientContribution).toService(RosLanguageClientContribution);
    bind(LanguageGrammarDefinitionContribution).to(RosGrammarContribution).inSingletonScope();

    //bind(RosDiagramLanguageClient).toSelf().inSingletonScope();
    //bind(CommandContribution).to(LSDiagramCommandContribution).inSingletonScope();
    //bind(KeybindingContribution).to(LSDiagramKeybindingContribution).inSingletonScope();

    /**bind(DiagramConfiguration).to(RosDiagramConfiguration).inSingletonScope();
    bind(RosDiagramManager).toSelf().inSingletonScope();
    bind(FrontendApplicationContribution).toService(RosDiagramManager);
    bind(OpenHandler).toService(RosDiagramManager);
    bind(WidgetFactory).toService(RosDiagramManager);
    bind(DiagramManagerProvider).toProvider<DiagramManager>((context) => {
        return () => {
            return new Promise<DiagramManager>((resolve) => {
                let diagramManager = context.container.get<RosDiagramManager>(RosDiagramManager);
                resolve(diagramManager);
            });
        };
});*/
});
