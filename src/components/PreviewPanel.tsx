import { useStoreSelector } from '../redux/hooks';
import { EstImageSize } from './preview/EstImageSize';
import { RenderPreview } from './preview/RenderPreview';
import { type ReactElement } from 'react';

export function PreviewPanel (): ReactElement {
  const fontSize = useStoreSelector((s) => s.renderConfig.fontSize);
  const colorBackground = useStoreSelector((s) => s.renderConfig.colorBackground);

  return (
    <>
      <div className="fontextract_preview" style={{
        fontSize: `${fontSize}px`,
        backgroundColor: colorBackground
      }}>
        <RenderPreview />
      </div>
      <EstImageSize />
    </>
  );
}
