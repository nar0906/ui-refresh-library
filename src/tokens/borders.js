/**
 * CoCounsel 3.0 Design Tokens - Borders
 * 
 * Border radius and widths
 */

const gridBase = 4;

export const borders = {
  // Border radius
  radius: {
    xxs: gridBase * 0.5, // 2px
    xs: gridBase * 1, // 4px
    sm: gridBase * 2, // 8px
    md: gridBase * 4, // 16px
    lg: gridBase * 5, // 20px (deprecated)
    xl: gridBase * 6, // 24px (deprecated)
    circle: gridBase * 22, // 88px (for circular elements)
  },
  
  // Border width
  width: {
    thin: 1, // 1px
    thick: 2, // 2px
    thicker: 4, // 4px
  },
};

export default borders;
