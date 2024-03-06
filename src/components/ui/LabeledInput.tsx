import { type ReactElement, useId } from 'react';

/**
 * LabeledInput props type
 */
export interface LabeledInputProps {
  label: string
  type: string
  value: string
  onChange?: (v: string) => any
  onBlur?: (v: string) => any
}

/**
 * Input field with label
 * @param props Properties
 * @constructor
 */
export function LabeledInput (props: LabeledInputProps): ReactElement {
  const id = useId();

  return (
      <>
        <label htmlFor={id}>
          {props.label}
        </label>
        <input type={props.type}
               id={id}
               value={props.value}
               onChange={(e) => props.onChange?.((e.target as HTMLInputElement).value)}
               onBlur={(e) => props.onBlur?.((e.target as HTMLInputElement).value)} />
      </>
  );
}
