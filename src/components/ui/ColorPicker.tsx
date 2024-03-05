import {RgbaStringColorPicker} from "react-colorful";
import {ColorInputField} from "./ColorInputField";
import {SectionLabel} from "./SectionLabel";

export type ColorPickerProps = {
    label: string,
    color: string,
    onChange: (v: string) => any,
}

export function ColorPicker(props: ColorPickerProps) {
    return (
        <div>
            <SectionLabel>
                {props.label}
            </SectionLabel>
            <div className="fontextract__color-picker">
                <RgbaStringColorPicker color={props.color} onChange={props.onChange} />
                <ColorInputField color={props.color} onChange={props.onChange} />
            </div>
        </div>
    );
}
