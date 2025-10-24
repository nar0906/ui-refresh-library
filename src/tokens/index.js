/**
 * CoCounsel 3.0 Design Tokens - Main Export
 * 
 * Centralized export of all design tokens
 */

import { coreColors, systemColors, componentColors } from './colors.js';
import spacing from './spacing.js';
import typography from './typography.js';
import borders from './borders.js';
import shadows from './shadows.js';
import layout from './layout.js';

export const tokens = {
  colors: {
    core: coreColors,
    system: systemColors,
    component: componentColors,
  },
  spacing,
  typography,
  borders,
  shadows,
  layout,
};

export default tokens;

// Re-export individual token categories for convenience
export { coreColors, systemColors, componentColors };
export { spacing };
export { typography };
export { borders };
export { shadows };
export { layout };
