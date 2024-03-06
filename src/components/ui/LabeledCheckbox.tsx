import { type ReactElement, useId } from 'react';

/**
 * Properties type of labeled checkbox
 */
export interface LabeledCheckboxProps {
  label: string
  value: boolean
  onChange: (v: boolean) => any
}

/**
 * Checkbox with label component
 * @param props Properties
 * @constructor
 */
export function LabeledCheckbox (props: LabeledCheckboxProps): ReactElement {
  const id = useId();

  return (
    <div className="fontextract__config__checkbox-root">
      <input type="checkbox"
             id={id}
             checked={props.value}
             onChange={(e) => props.onChange((e.target as HTMLInputElement).checked)} />

      <label htmlFor={id}>
        {props.label}
     </label>
    </div>
  );
}
