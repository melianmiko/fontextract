export function BrowserSupportTest (): null {
  const bc = document.createElement('canvas').getContext('2d');
  if (bc == null) throw new Error("Can't create Canvas rendering context");
  bc.font = '20px sans';

  const metrics = bc.measureText('hello');
  // noinspection SuspiciousTypeOfGuard
  const isSupported = typeof metrics.fontBoundingBoxAscent === 'number';

  const warnView = document.getElementById('browser_not_supported');
  if (!isSupported && warnView != null) { warnView.style.display = ''; }

  return null;
}
