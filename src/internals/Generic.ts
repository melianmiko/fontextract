import {RenderConfig, FontExtractFiles} from "./Types";
import {ReactElement} from "react";

export abstract class FontExtractPlugin {
    abstract id: string;
    abstract displayName: string;

    abstract generate(config: RenderConfig): Promise<FontExtractFiles>;

    abstract getSettingsView(): ReactElement;
}
