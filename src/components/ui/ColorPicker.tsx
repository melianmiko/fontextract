import { RgbaStringColorPicker } from 'react-colorful';
import { ColorInputField } from './ColorInputField';
import { SectionLabel } from './SectionLabel';
import { type ReactElement } from 'react';

/**
 * Color picker wrapper props
 */
export interface ColorPickerProps {
  label: string
  color: string
  onChange: (v: string) => any
}

/**
 * Color picker wrapper
 *
 * @param props Properties
 * @constructor
 */
export function ColorPicker (props: ColorPickerProps): ReactElement {
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
