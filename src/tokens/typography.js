/**
 * CoCounsel 3.0 Design Tokens - Typography
 * 
 * Font families, sizes, weights, and line heights
 */

const gridBase = 4;

export const typography = {
  // Font families
  fontFamily: {
    primary: '"Source Sans 3", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: '"Clario", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    icons: '"Font Awesome 6 Sharp", sans-serif',
  },
  
  // Font sizes
  fontSize: {
    xs: gridBase * 3, // 12px
    sm: gridBase * 3.5, // 14px
    md: gridBase * 4, // 16px
    lg: gridBase * 5, // 20px
    xl: gridBase * 6, // 24px
    '2xl': gridBase * 7, // 28px
    '3xl': gridBase * 8, // 32px
    '4xl': gridBase * 10, // 40px
    '5xl': gridBase * 14, // 56px
  },
  
  // Font weights
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 900,
  },
  
  // Line heights
  lineHeight: {
    none: 1,
    tight: 1.2,
    snug: 1.35,
    normal: 1.43,
    relaxed: 1.5,
    loose: 1.75,
  },
  
  // Pre-defined typography variants
  variants: {
    // Headings
    h1: {
      fontFamily: '"Clario", sans-serif',
      fontSize: gridBase * 14, // 56px
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Clario", sans-serif',
      fontSize: gridBase * 10, // 40px
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"Clario", sans-serif',
      fontSize: gridBase * 8, // 32px
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: '"Clario", sans-serif',
      fontSize: gridBase * 6, // 24px
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: '"Clario", sans-serif',
      fontSize: gridBase * 5, // 20px
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: '"Clario", sans-serif',
      fontSize: gridBase * 4, // 16px
      fontWeight: 500,
      lineHeight: 1.2,
    },
    
    // Body text
    bodyLarge: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: gridBase * 5, // 20px
      fontWeight: 400,
      lineHeight: 1.5,
    },
    bodyMedium: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: gridBase * 4, // 16px
      fontWeight: 400,
      lineHeight: 1.5,
    },
    bodySmall: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: gridBase * 3.5, // 14px
      fontWeight: 400,
      lineHeight: 1.43,
    },
    
    // Button text
    button: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: gridBase * 4, // 16px
      fontWeight: 600,
      lineHeight: 1.5,
      textTransform: 'none',
    },
    
    // Caption/Helper text
    caption: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: gridBase * 3, // 12px
      fontWeight: 400,
      lineHeight: 1.43,
    },
  },
};

export default typography;
