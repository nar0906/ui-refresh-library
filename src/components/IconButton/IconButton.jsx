'use client';
/**
 * CoCounsel 3.0 Icon Button Component
 * 
 * Square icon-only buttons with tooltip support
 * Supports: Primary, Secondary, Tertiary appearances
 * Densities: Standard (40px), Compact (32px), Extra-Compact (24px)
 * States: Default, Hover, Active, Focus, Disabled
 */

import React from 'react';
import { IconButton as MuiIconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { systemColors, coreColors } from '../../tokens/colors';
import spacing from '../../tokens/spacing';
import borders from '../../tokens/borders';
import shadows from '../../tokens/shadows';

const StyledIconButton = styled(MuiIconButton, {
  shouldForwardProp: (prop) => !['appearance', 'density'].includes(prop),
})(({ theme, appearance = 'primary', density = 'standard', disabled }) => {
  // Density configurations
  const densityConfig = {
    standard: {
      size: 40,
      padding: spacing[3], // 12px
      iconSize: 16,
    },
    compact: {
      size: 32,
      padding: spacing[2], // 8px
      iconSize: 16,
    },
    'extra-compact': {
      size: 24,
      padding: spacing[1], // 4px
      iconSize: 16,
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
    },
    
    tertiary: {
      backgroundColor: systemColors.interactive.tertiary.background.default,
      color: disabled
        ? systemColors.interactive.disabled.on.subtle
        : systemColors.interactive.tertiary.on.default,
      border: `${borders.width.thin}px solid ${systemColors.interactive.tertiary.border.default}`,
      
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
    },
  };

  return {
    width: config.size,
    height: config.size,
    padding: config.padding,
    borderRadius: borders.radius.xs,
    transition: 'all 0.2s ease-in-out',
    boxShadow: shadows.none,
    
    '& svg, & span': {
      fontSize: config.iconSize,
      lineHeight: 1,
    },
    
    '&:hover': {
      boxShadow: shadows.none,
    },
    
    '&:focus-visible': disabled ? {} : {
      boxShadow: shadows.focus,
      outline: 'none',
    },
    
    ...(disabled ? {
      cursor: 'not-allowed',
      pointerEvents: 'none',
    } : {}),
    
    ...appearanceStyles[appearance],
  };
});

const IconButton = React.forwardRef(({
  children,
  appearance = 'primary',
  density = 'standard',
  disabled = false,
  tooltip,
  tooltipPlacement = 'bottom',
  onClick,
  ...props
}, ref) => {
  const button = (
    <StyledIconButton
      ref={ref}
      appearance={appearance}
      density={density}
      disabled={disabled}
      onClick={onClick}
      disableRipple
      {...props}
    >
      {children}
    </StyledIconButton>
  );

  // No tooltip if disabled or no tooltip text provided
  if (disabled || !tooltip) {
    return button;
  }

  return (
    <Tooltip
      title={tooltip}
      placement={tooltipPlacement}
      arrow
      slotProps={{
        tooltip: {
          sx: {
            backgroundColor: coreColors.graphite,
            color: coreColors.white,
            fontSize: 14,
            fontFamily: '"Source Sans 3", sans-serif',
            padding: `${spacing[1]}px ${spacing[2]}px`,
          },
        },
        arrow: {
          sx: {
            color: coreColors.graphite,
          },
        },
      }}
    >
      {button}
    </Tooltip>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
