export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

import OTTypography from './OTTypography';
import OTBadge from './OTBadge';
import ThemeProvider from './ThemeProvider';

export { OTBadge, OTTypography, ThemeProvider };
