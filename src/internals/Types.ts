import { type CaseMode } from './Enums';

export interface RenderConfig {
  colorText: string
  colorBackground: string
  fontSize: number
  caseMode: CaseMode
  borderWidth: number
  equalWidth: boolean
  equalHeight: boolean
  marginX: number
  marginY: number
  fileNamePrefix: string
}

export interface FontExtractRenderMetrics {
  fallbackFontHeight: number
  metricsBaseContext: CanvasRenderingContext2D
  topOffset: number
}

export type ImagesMap = Map<string, HTMLCanvasElement>;
export type FontExtractFiles = Record<string, ImagesMap>;
