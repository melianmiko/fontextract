import { type PropsWithChildren, type ReactElement } from 'react';

/**
 * Section label component
 * @param props Properties
 * @constructor
 */
export function SectionLabel (props: PropsWithChildren): ReactElement {
  return (
    <div className="fontextract__section-label">
      {props.children}
    </div>
  );
}
