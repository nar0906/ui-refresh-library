/**
 * CoCounsel 3.0 Tab Component
 * 
 * Individual tab button with multiple states and orientations
 * Supports optional icon and badge counter
 * Orientations: Horizontal (bottom border when selected), Vertical (left border when selected)
 * States: Default, Hover, Selected, Focus, Disabled
 */

import React from 'react';
import { Box, Badge, styled } from '@mui/material';
import { systemColors } from '../../tokens/colors';
import spacing from '../../tokens/spacing';
import borders from '../../tokens/borders';
import shadows from '../../tokens/shadows';
import typography from '../../tokens/typography';

// Main tab button
const TabButton = styled(Box)(({ orientation, selected, disabled }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[2],
  padding: `${spacing[2]}px 12px`,
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: orientation === 'horizontal' ? `${borders.radius.xs}px ${borders.radius.xs}px 0 0` : `0 ${borders.radius.xs}px ${borders.radius.xs}px 0`,
  cursor: disabled ? 'not-allowed' : 'pointer',
  transition: 'all 0.2s ease-in-out',
  position: 'relative',
  justifyContent: orientation === 'horizontal' ? 'center' : 'flex-start',
  
  // Selected state border
  ...(selected && orientation === 'horizontal' && {
    borderBottom: `3px solid ${systemColors.interactive.primary.border.active}`,
  }),
  
  ...(selected && orientation === 'vertical' && {
    borderLeft: `3px solid ${systemColors.interactive.primary.border.active}`,
    paddingLeft: '9px', // 12px - 3px to account for border
  }),
  
  // Hover state
  '&:hover': disabled ? {} : {
    backgroundColor: systemColors.interactive.secondary.background.hover,
  },
  
  // Focus state
  '&:focus-visible': disabled ? {} : {
    outline: 'none',
    boxShadow: `0 0 0 2px ${systemColors.interactive.focus}`,
  },
}));

// Icon container
const IconContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  paddingTop: spacing[1],
  '& svg': {
    fontSize: 16,
  },
});

// Tab text
const TabText = styled(Box)(({ selected, disabled }) => ({
  fontFamily: typography.fontFamily.primary,
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.semibold,
  lineHeight: typography.lineHeight.snug,
  color: disabled
    ? systemColors.interactive.disabled.background.strong
    : selected
    ? systemColors.text.heavy
    : systemColors.text.subtle,
  whiteSpace: 'nowrap',
  
  '.TabButton:hover &': disabled ? {} : {
    color: systemColors.interactive.primary.background.default,
  },
}));

// Badge counter
const BadgeCounter = styled(Box)(({ selected, disabled, hover }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 16,
  minHeight: 16,
  padding: `0 ${spacing[1]}px`,
  borderRadius: 88,
  border: `${borders.width.thin}px solid ${systemColors.background.white}`,
  backgroundColor: disabled
    ? systemColors.status.neutral.subtle
    : hover
    ? systemColors.status.neutral.stronger
    : systemColors.status.neutral.strongSubtle,
  fontFamily: typography.fontFamily.primary,
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.semibold,
  lineHeight: typography.lineHeight.snug,
  color: disabled
    ? systemColors.text.subtle
    : hover
    ? systemColors.background.white
    : systemColors.status.neutral.stronger,
}));

const Tab = ({
  label = 'Tab item',
  icon,
  badgeCount,
  selected = false,
  disabled = false,
  orientation = 'horizontal',
  onClick,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <TabButton
      orientation={orientation}
      selected={selected}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={disabled ? -1 : 0}
      role="tab"
      aria-selected={selected}
      aria-disabled={disabled}
      {...props}
    >
      {icon && (
        <IconContainer>
          {icon}
        </IconContainer>
      )}
      
      <TabText selected={selected} disabled={disabled}>
        {label}
      </TabText>
      
      {badgeCount !== undefined && badgeCount !== null && (
        <BadgeCounter selected={selected} disabled={disabled} hover={isHovered && !disabled}>
          {badgeCount}
        </BadgeCounter>
      )}
    </TabButton>
  );
};

export default Tab;
