/**
 * CoCounsel 3.0 MUI Theme Configuration
 * 
 * Custom Material-UI theme based on design tokens
 */

import { createTheme } from '@mui/material/styles';
import { coreColors, systemColors } from '../tokens/colors.js';
import spacing from '../tokens/spacing.js';
import typography from '../tokens/typography.js';
import borders from '../tokens/borders.js';
import shadows from '../tokens/shadows.js';

const theme = createTheme({
  palette: {
    mode: 'light',
    
    // Primary colors (Racing Green)
    primary: {
      main: coreColors.racingGreen[700],
      light: coreColors.racingGreen[600],
      dark: coreColors.racingGreen[800],
      contrastText: systemColors.text.white,
    },
    
    // Secondary colors (Orange)
    secondary: {
      main: coreColors.orange[500],
      light: coreColors.orange[400],
      dark: coreColors.orange[600],
      contrastText: systemColors.text.white,
    },
    
    // Error colors
    error: {
      main: coreColors.red[400],
      light: coreColors.red[300],
      dark: coreColors.red[500],
      contrastText: systemColors.text.white,
    },
    
    // Warning colors
    warning: {
      main: coreColors.orange[600],
      light: coreColors.gold[300],
      dark: coreColors.orange[700],
      contrastText: coreColors.graphite,
    },
    
    // Info colors
    info: {
      main: coreColors.sky[600],
      light: coreColors.sky[400],
      dark: coreColors.sky[700],
      contrastText: systemColors.text.white,
    },
    
    // Success colors
    success: {
      main: coreColors.green[400],
      light: coreColors.green[300],
      dark: coreColors.green[500],
      contrastText: systemColors.text.white,
    },
    
    // Background colors
    background: {
      default: systemColors.background.default,
      paper: systemColors.background.white,
    },
    
    // Text colors
    text: {
      primary: systemColors.text.heavy,
      secondary: systemColors.text.strong,
      disabled: systemColors.text.subtle,
    },
    
    // Divider color
    divider: systemColors.border.subtle,
    
    // Action states
    action: {
      active: coreColors.racingGreen[700],
      hover: coreColors.racingGreen[200],
      selected: coreColors.racingGreen[100],
      disabled: coreColors.gray[400],
      disabledBackground: coreColors.gray[200],
      focus: coreColors.dataVizTeal[600],
    },
  },
  
  typography: {
    fontFamily: typography.fontFamily.primary,
    
    // Headings
    h1: {
      ...typography.variants.h1,
    },
    h2: {
      ...typography.variants.h2,
    },
    h3: {
      ...typography.variants.h3,
    },
    h4: {
      ...typography.variants.h4,
    },
    h5: {
      ...typography.variants.h5,
    },
    h6: {
      ...typography.variants.h6,
    },
    
    // Body text
    body1: {
      ...typography.variants.bodyMedium,
    },
    body2: {
      ...typography.variants.bodySmall,
    },
    
    // Button text
    button: {
      ...typography.variants.button,
    },
    
    // Caption
    caption: {
      ...typography.variants.caption,
    },
  },
  
  spacing: (factor) => `${spacing[factor] || factor * 4}px`,
  
  shape: {
    borderRadius: borders.radius.sm,
  },
  
  shadows: [
    shadows.none,
    shadows.level1,
    shadows.level2,
    shadows.level3,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
  ],
  
  components: {
    // MuiButton customization will go here
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize.md,
          fontWeight: typography.fontWeight.semibold,
          borderRadius: borders.radius.sm,
          padding: `${spacing[2]}px ${spacing[4]}px`,
          minHeight: spacing[10],
          transition: 'all 0.2s ease-in-out',
        },
        
        // Contained variant (Primary)
        contained: {
          boxShadow: shadows.none,
          '&:hover': {
            boxShadow: shadows.none,
          },
        },
        
        // Outlined variant (Secondary)
        outlined: {
          borderWidth: borders.width.thin,
        },
        
        // Text variant (Tertiary)
        text: {
          padding: `${spacing[2]}px ${spacing[4]}px`,
        },
      },
    },
    
    // MuiTextField customization
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: borders.radius.sm,
            fontSize: typography.fontSize.md,
            
            '& fieldset': {
              borderColor: systemColors.border.subtle,
              borderWidth: borders.width.thin,
            },
            
            '&:hover fieldset': {
              borderColor: systemColors.border.stronger,
            },
            
            '&.Mui-focused fieldset': {
              borderColor: systemColors.interactive.primary.border.default,
              borderWidth: borders.width.thick,
            },
          },
        },
      },
    },
    
    // MuiCard customization
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: borders.radius.sm,
          border: `${borders.width.thin}px solid ${systemColors.border.subtle}`,
          boxShadow: shadows.none,
          
          '&:hover': {
            backgroundColor: coreColors.racingGreen[100],
          },
        },
      },
    },
  },
});

export default theme;
