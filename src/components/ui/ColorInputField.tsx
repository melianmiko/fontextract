import { type ReactElement } from 'react';

/**
 * Color input props
 */
export interface ColorInputFieldProps {
  color: string
  onChange: (v: string) => any
}

/**
 * Text-based color input field
 * @param props Properties
 * @constructor
 */
export function ColorInputField (props: ColorInputFieldProps): ReactElement {
  return (
    <input type="text"
           className="fontextract__color-picker__user-input"
           value={props.color}
           onBlur={(e) => props.onChange((e.target as HTMLInputElement).value)} />
  );
}
