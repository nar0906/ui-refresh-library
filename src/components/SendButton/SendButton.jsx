/**
 * CoCounsel 3.0 Send Button Component
 * 
 * Circular icon button for sending messages
 * States: Default, Hover, Disabled
 * Includes tooltip on hover
 */

import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { systemColors, coreColors } from '../../tokens/colors';
import spacing from '../../tokens/spacing';
import borders from '../../tokens/borders';
import shadows from '../../tokens/shadows';

const StyledIconButton = styled(IconButton)(({ theme, disabled }) => ({
  width: 28,
  height: 28,
  padding: spacing[2],
  borderRadius: '50%',
  backgroundColor: disabled
    ? systemColors.interactive.disabled.background.subtle
    : systemColors.interactive.primary.background.default,
  border: `${borders.width.thin}px solid ${disabled
    ? systemColors.interactive.disabled.background.strong
    : systemColors.interactive.primary.border.default}`,
  color: disabled
    ? systemColors.interactive.disabled.on.subtle
    : systemColors.interactive.primary.on.default,
  transition: 'all 0.2s ease-in-out',
  
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
  
  '& svg, & span': {
    fontSize: 16,
    lineHeight: 1,
  },
}));

const SendButton = React.forwardRef(({
  disabled = false,
  tooltip = 'Send message',
  tooltipPlacement = 'bottom',
  onClick,
  ...props
}, ref) => {
  const button = (
    <StyledIconButton
      ref={ref}
      disabled={disabled}
      onClick={onClick}
      disableRipple
      {...props}
    >
      <span style={{ fontFamily: '"Font Awesome 6 Sharp"', fontWeight: 300 }}>
        ↑
      </span>
    </StyledIconButton>
  );

  if (disabled) {
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

SendButton.displayName = 'SendButton';

export default SendButton;
