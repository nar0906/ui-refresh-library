'use client';
/**
 * CoCounsel 3.0 Toggle Switch Component
 * 
 * Toggle switch with label and multiple states
 * Modes: Adaptive (fixed width label) or Non-adaptive (flexible width label)
 * States: Default, Hover, Focus, Disabled, Read-only
 */

import React from 'react';
import { Box, Switch, Typography, styled } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { systemColors } from '../../tokens/colors';
import spacing from '../../tokens/spacing';
import borders from '../../tokens/borders';
import typography from '../../tokens/typography';

// Container for label + switch
const ToggleContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[1],
});

// Label text
const LabelText = styled(Typography)(({ adaptive, disabled, readOnly }) => ({
  fontFamily: typography.fontFamily.primary,
  fontSize: typography.fontSize.md,
  fontWeight: typography.fontWeight.regular,
  lineHeight: typography.lineHeight.relaxed,
  color: disabled 
    ? systemColors.interactive.disabled.background.strong
    : systemColors.text.heavy,
  maxWidth: adaptive ? 320 : undefined,
  whiteSpace: 'nowrap',
  flexShrink: 0,
}));

// Custom styled switch
const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  flexShrink: 0,
  '& .MuiSwitch-switchBase': {
    padding: spacing['05'],
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: systemColors.background.white,
      '& + .MuiSwitch-track': {
        backgroundColor: systemColors.interactive.primary.background.default,
        borderColor: systemColors.interactive.primary.border.default,
        opacity: 1,
      },
      '&:hover + .MuiSwitch-track': {
        backgroundColor: systemColors.interactive.secondary.background.hover,
        borderColor: systemColors.border.stronger,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        backgroundColor: systemColors.interactive.disabled.background.subtle,
        borderColor: systemColors.interactive.disabled.background.subtle,
      },
      '&.Mui-focusVisible + .MuiSwitch-track': {
        backgroundColor: systemColors.interactive.primary.background.default,
        borderColor: systemColors.interactive.primary.border.default,
      },
    },
    '&.Mui-disabled': {
      color: systemColors.interactive.disabled.on.subtle,
    },
    '&.Mui-focusVisible': {
      color: systemColors.interactive.primary.background.default,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      fontSize: 16,
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 88,
    border: `${borders.width.thin}px solid`,
    backgroundColor: systemColors.background.white,
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border-color'], {
      duration: 500,
    }),
  },
  '& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track': {
    backgroundColor: systemColors.background.white,
    borderColor: `${systemColors.border.stronger} !important`, // Gray border when OFF (matching Figma visual)
  },
  '& .MuiSwitch-switchBase:not(.Mui-checked):hover + .MuiSwitch-track': {
    backgroundColor: systemColors.interactive.secondary.background.hover,
    borderColor: `${systemColors.border.stronger} !important`, // Gray border on hover
  },
  '& .MuiSwitch-switchBase.Mui-disabled:not(.Mui-checked) + .MuiSwitch-track': {
    backgroundColor: systemColors.interactive.disabled.background.subtle,
    borderColor: systemColors.interactive.disabled.background.subtle,
  },
}));

// Custom thumb component that shows icons
const ThumbComponent = ({ checked, disabled, readOnly }) => {
  const getColor = () => {
    if (disabled) return systemColors.interactive.disabled.on.subtle;
    if (readOnly) return systemColors.interactive.readOnly.on.subtle;
    if (checked) return systemColors.background.white;
    return systemColors.interactive.primary.background.default;
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 16, height: 16 }}>
      {checked ? (
        <CheckCircleIcon sx={{ fontSize: 16, color: getColor() }} />
      ) : (
        <CancelIcon sx={{ fontSize: 16, color: getColor() }} />
      )}
    </Box>
  );
};

const ToggleSwitch = ({
  label = 'Switch label',
  checked = false,
  onChange,
  disabled = false,
  readOnly = false,
  adaptive = false,
  ...props
}) => {
  const handleChange = (event) => {
    if (!disabled && !readOnly && onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <ToggleContainer>
      <LabelText adaptive={adaptive} disabled={disabled} readOnly={readOnly}>
        {label}
      </LabelText>
      <CustomSwitch
        checked={checked}
        onChange={handleChange}
        disabled={disabled || readOnly}
        disableRipple
        icon={<ThumbComponent checked={false} disabled={disabled} readOnly={readOnly} />}
        checkedIcon={<ThumbComponent checked={true} disabled={disabled} readOnly={readOnly} />}
        {...props}
      />
    </ToggleContainer>
  );
};

export default ToggleSwitch;
