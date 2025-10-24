/**
 * CoCounsel 3.0 Button Component
 * 
 * Custom MUI Button with full design token integration
 * Supports: Primary, Secondary, Tertiary appearances
 * Densities: Standard (40px), Compact (32px), Extra-Compact (24px)
 * States: Default, Hover, Active, Focus, Disabled, Loading
 */

import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { systemColors } from '../../tokens/colors';
import spacing from '../../tokens/spacing';
import borders from '../../tokens/borders';
import shadows from '../../tokens/shadows';
import typography from '../../tokens/typography';

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => 
    !['appearance', 'density', 'leftIcon', 'rightIcon'].includes(prop),
})(({ theme, appearance = 'primary', density = 'standard', disabled }) => {
  // Density configurations
  const densityConfig = {
    standard: {
      height: 40,
      padding: `${spacing[2]}px ${spacing[4]}px`,
      fontSize: typography.fontSize.md,
      iconSize: 16,
    },
    compact: {
      height: 32,
      padding: `${spacing[1]}px ${spacing[3]}px`,
      fontSize: typography.fontSize.sm,
      iconSize: 14,
    },
    'extra-compact': {
      height: 24,
      padding: `${spacing['05']}px ${spacing[2]}px`,
      fontSize: typography.fontSize.sm,
      iconSize: 12,
    },
  };

  const config = densityConfig[density];

  // Appearance-based styles
  const appearanceStyles = {
    primary: {
      backgroundColor: disabled 
        ? systemColors.interactive.disabled.background.subtle
        : systemColors.interactive.primary.background.default,
      color: disabled
        ? systemColors.interactive.disabled.on.subtle
        : systemColors.interactive.primary.on.default,
      border: `${borders.width.thin}px solid ${disabled 
        ? systemColors.interactive.disabled.border.default
        : systemColors.interactive.primary.border.default}`,
      
      '&:hover': disabled ? {} : {
        backgroundColor: systemColors.interactive.primary.background.hover,
        borderColor: systemColors.interactive.primary.border.hover,
        color: systemColors.interactive.primary.on.hover,
      },
      
      '&:active': disabled ? {} : {
        backgroundColor: systemColors.interactive.primary.background.active,
        borderColor: systemColors.interactive.primary.border.active,
        color: systemColors.interactive.primary.on.active,
      },
      
      '&:focus-visible': disabled ? {} : {
        boxShadow: shadows.focus,
        outline: 'none',
      },
    },
    
    secondary: {
      backgroundColor: disabled
        ? systemColors.interactive.disabled.background.subtle
        : systemColors.interactive.secondary.background.default,
      color: disabled
        ? systemColors.interactive.disabled.on.subtle
        : systemColors.interactive.secondary.on.default,
      border: `${borders.width.thin}px solid ${disabled
        ? systemColors.interactive.disabled.border.default
        : systemColors.interactive.secondary.border.default}`,
      
      '&:hover': disabled ? {} : {
        backgroundColor: systemColors.interactive.secondary.background.hover,
        borderColor: systemColors.interactive.secondary.border.hover,
        color: systemColors.interactive.secondary.on.hover,
      },
      
      '&:active': disabled ? {} : {
        backgroundColor: systemColors.interactive.secondary.background.active,
        borderColor: systemColors.interactive.secondary.border.active,
        color: systemColors.interactive.secondary.on.active,
      },
      
      '&:focus-visible': disabled ? {} : {
        boxShadow: shadows.focus,
        outline: 'none',
      },
    },
    
    tertiary: {
      backgroundColor: disabled
        ? systemColors.interactive.disabled.background.subtle
        : systemColors.interactive.tertiary.background.default,
      color: disabled
        ? systemColors.interactive.disabled.on.subtle
        : systemColors.interactive.tertiary.on.default,
      border: `${borders.width.thin}px solid ${disabled
        ? systemColors.interactive.disabled.border.default
        : systemColors.interactive.tertiary.border.default}`,
      
      '&:hover': disabled ? {} : {
        backgroundColor: systemColors.interactive.tertiary.background.hover,
        borderColor: systemColors.interactive.tertiary.border.hover,
        color: systemColors.interactive.tertiary.on.hover,
      },
      
      '&:active': disabled ? {} : {
        backgroundColor: systemColors.interactive.tertiary.background.active,
        borderColor: systemColors.interactive.tertiary.border.active,
        color: systemColors.interactive.tertiary.on.active,
      },
      
      '&:focus-visible': disabled ? {} : {
        boxShadow: shadows.focus,
        outline: 'none',
      },
    },
  };

  return {
    minHeight: config.height,
    height: config.height,
    padding: config.padding,
    fontSize: config.fontSize,
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.relaxed,
    borderRadius: borders.radius.xs,
    textTransform: 'none',
    transition: 'all 0.2s ease-in-out',
    boxShadow: shadows.none,
    
    '& .MuiButton-startIcon, & .MuiButton-endIcon': {
      fontSize: config.iconSize,
      '& > *': {
        fontSize: 'inherit',
      },
    },
    
    '& .MuiButton-startIcon': {
      marginRight: spacing[2],
      marginLeft: 0,
    },
    
    '& .MuiButton-endIcon': {
      marginLeft: spacing[2],
      marginRight: 0,
    },
    
    '&:hover': {
      boxShadow: shadows.none,
    },
    
    ...appearanceStyles[appearance],
  };
});

const Button = React.forwardRef(({
  children,
  appearance = 'primary',
  density = 'standard',
  leftIcon,
  rightIcon,
  disabled = false,
  loading = false,
  onClick,
  ...props
}, ref) => {
  return (
    <StyledButton
      ref={ref}
      appearance={appearance}
      density={density}
      disabled={disabled || loading}
      startIcon={leftIcon}
      endIcon={rightIcon}
      onClick={onClick}
      disableRipple
      {...props}
    >
      {loading ? 'Loading...' : children}
    </StyledButton>
  );
});

Button.displayName = 'Button';

export default Button;
