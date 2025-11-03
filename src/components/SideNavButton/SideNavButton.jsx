/**
 * CoCounsel 3.0 Side Nav Button Component
 * 
 * Navigation button for side navigation panels
 * Height: 32px, minimal styling with transparent default
 * States: Default, Hover, Focus, Disabled, Loading
 */

import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { systemColors, componentColors } from '../../tokens/colors';
import spacing from '../../tokens/spacing';
import borders from '../../tokens/borders';
import shadows from '../../tokens/shadows';
import typography from '../../tokens/typography';

const StyledSideNavButton = styled(Button)(({ theme, disabled }) => ({
  minHeight: 32,
  height: 32,
  padding: `${spacing[1]}px ${spacing[2]}px`,
  fontSize: typography.fontSize.sm,
  fontFamily: '"Clario", sans-serif',
  fontWeight: typography.fontWeight.regular,
  lineHeight: typography.lineHeight.tight,
  borderRadius: borders.radius.xs,
  textTransform: 'none',
  justifyContent: 'flex-start',
  backgroundColor: componentColors.sidenav.background.default,
  color: disabled
    ? systemColors.interactive.disabled.on.subtle
    : componentColors.sidenav.on.default,
  border: `${borders.width.thin}px solid ${componentColors.sidenav.border.default}`,
  transition: 'all 0.2s ease-in-out',
  boxShadow: shadows.none,
  
  '& .MuiButton-startIcon, & .MuiButton-endIcon': {
    fontSize: 16,
    marginRight: spacing[2],
    marginLeft: 0,
    '& > *': {
      fontSize: 'inherit',
    },
  },
  
  '& .MuiButton-endIcon': {
    marginLeft: 'auto',
    marginRight: 0,
  },
  
  '&:hover': disabled ? {} : {
    backgroundColor: componentColors.sidenav.background.hover,
    borderColor: componentColors.sidenav.border.hover,
    color: componentColors.sidenav.on.hover,
    boxShadow: shadows.none,
  },
  
  '&:active': disabled ? {} : {
    backgroundColor: componentColors.sidenav.background.hover,
    borderColor: componentColors.sidenav.border.hover,
  },
  
  '&:focus-visible': disabled ? {} : {
    boxShadow: shadows.focus,
    outline: 'none',
  },
  
  ...(disabled ? {
    cursor: 'not-allowed',
    pointerEvents: 'none',
  } : {}),
}));

const SideNavButton = React.forwardRef(({
  children,
  leftIcon,
  rightIcon,
  disabled = false,
  loading = false,
  onClick,
  ...props
}, ref) => {
  const LoadingSpinner = () => (
    <span style={{ 
      display: 'inline-block',
      width: '16px',
      height: '16px',
      border: '2px solid currentColor',
      borderTop: '2px solid transparent',
      borderRadius: '50%',
      animation: 'spin 0.6s linear infinite',
    }} />
  );
  
  const loadingStyles = loading ? {
    backgroundColor: 'transparent',
    color: systemColors.interactive.readOnly.on.subtle,
    borderColor: 'transparent',
    cursor: 'wait',
    pointerEvents: 'none',
  } : {};
  
  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <StyledSideNavButton
        ref={ref}
        disabled={disabled || loading}
        startIcon={loading ? <LoadingSpinner /> : leftIcon}
        endIcon={loading ? null : rightIcon}
        onClick={onClick}
        disableRipple
        style={loadingStyles}
        {...props}
      >
        {children}
      </StyledSideNavButton>
    </>
  );
});

SideNavButton.displayName = 'SideNavButton';

export default SideNavButton;
