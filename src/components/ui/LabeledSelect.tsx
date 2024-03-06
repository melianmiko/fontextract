import { type PropsWithChildren, type ReactElement, useId } from 'react';

/**
 * Props type for LabeledSelect
 */
export type LabeledSelectProps = PropsWithChildren & {
  label: string
  value: string
  onChange: (v: string) => any
};

/**
 * Select with label
 * @param props Properties
 * @constructor
 */
export function LabeledSelect (props: LabeledSelectProps): ReactElement {
  const id = useId();
  return (
      <>
        <label htmlFor={id}>{props.label}</label>
        <select value={props.value}
                id={id}
                onChange={(e) => props.onChange((e.target as HTMLSelectElement).value)}>
            {props.children}
        </select>
      </>
  );
}
