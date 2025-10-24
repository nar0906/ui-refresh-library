/**
 * CoCounsel 3.0 Design Tokens - Shadows
 * 
 * Drop shadow definitions for various elevation levels
 */

export const shadows = {
  // Elevation levels
  level1: '0px 1px 2px 0px rgba(0, 0, 0, 0.1)',
  level2: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
  level3: '0px 4px 8px 0px rgba(0, 0, 0, 0.1)',
  level4: '0px 8px 16px 0px rgba(0, 0, 0, 0.1)',
  
  // Inset
  inset: 'inset 0px 1px 2px 0px rgba(0, 0, 0, 0.1)',
  
  // Focus states
  focus: '0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #2E6B5C',
  focusFlush: '0px 0px 0px 2px #2E6B5C',
  
  // Status-specific shadows
  error: '0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #DC0A0A',
  errorFocus: '0px 0px 0px 2px #DC0A0A',
  
  success: '0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #387C2B',
  successFocus: '0px 0px 0px 2px #387C2B',
  
  // Special
  skyOnDark: '0px 4px 8px 0px rgba(8, 116, 227, 0.3)',
  
  // None
  none: 'none',
};

export default shadows;
