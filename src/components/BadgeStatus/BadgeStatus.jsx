'use client';
/**
 * BadgeStatus Component
 * 
 * Status indicator badges with optional icons.
 * 
 * IMPORTANT: This component strictly follows Figma specifications:
 * - Dark value: Filled pill-shaped background with padding
 * - Light value: No background fill, just icon + text inline (no padding wrapper)
 * - Attached: Designed to attach to other components
 * - Default (not attached): Standalone floating badges
 */

import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import spacing from '../../tokens/spacing';

const BadgeStatus = ({
  children,
  appearance = 'success',
  value = 'dark',
  density = 'standard',
  attached = false,
  icon,
  ...props
}) => {
  // Status color configurations from Figma
  const statusColors = {
    new: {
      dark: {
        background: '#E4EBE7', // color/status/new/subtle from Figma
        text: '#1D4B34', // color/status/new/strong
        iconColor: '#1D4B34',
        border: 'none',
      },
      light: {
        background: '#FFFFFF', // White background
        text: '#1D4B34', // color/status/new/strong
        iconColor: '#1D4B34',
        border: '1px solid #1D4B34', // Dark border
      },
    },
    'new-neutral': {
      dark: {
        background: '#EDEDED', // color/status/neutral/subtle
        text: '#404040', // color/status/neutral/strong
        iconColor: '#404040',
        border: 'none',
      },
      light: {
        background: '#FFFFFF', // White background
        text: '#404040', // color/status/neutral/strong
        iconColor: '#404040',
        border: '1px solid #404040', // Dark border
      },
    },
    success: {
      dark: {
        background: '#4B9A3C',
        text: '#FCFCFC',
        iconColor: '#EAFFE5',
        border: 'none',
      },
      light: {
        background: '#F0FFF0', // Light green subtle background
        text: '#387C2B',
        iconColor: '#387C2B',
        border: '1px solid #387C2B',
      },
    },
    error: {
      dark: {
        background: '#D72E2E',
        text: '#FCFCFC',
        iconColor: '#FFEDED',
        border: 'none',
      },
      light: {
        background: '#FFF5F5', // Light red subtle background
        text: '#DC0A0A',
        iconColor: '#DC0A0A',
        border: '1px solid #DC0A0A',
      },
    },
    warning: {
      dark: {
        background: '#B85C00',
        text: '#FFF8EB',
        iconColor: '#FFF8E5',
        border: 'none',
      },
      light: {
        background: '#FFF8F0', // Light orange subtle background
        text: '#AB3300',
        iconColor: '#AB3300',
        border: '1px solid #AB3300',
      },
    },
    info: {
      dark: {
        background: '#0065FF',
        text: '#FCFCFC',
        iconColor: '#EDF6FF',
        border: 'none',
      },
      light: {
        background: '#F0F8FF', // Light blue subtle background
        text: '#0062C4',
        iconColor: '#0062C4',
        border: '1px solid #0062C4',
      },
    },
    neutral: {
      dark: {
        background: '#404040',
        text: '#FCFCFC',
        iconColor: '#EDEDED',
        border: 'none',
      },
      light: {
        background: '#F5F5F5', // Light gray subtle background
        text: '#404040',
        iconColor: '#404040',
        border: '1px solid #404040',
      },
    },
  };

  const colors = statusColors[appearance][value];

  // Both dark and light values use pill-shaped containers with padding
  const densityConfig = {
    standard: {
      padding: `${spacing['05']}px ${spacing[2]}px`, // 2px 8px
      gap: spacing[1], // 4px
    },
    compact: {
      padding: `0 ${spacing[1]}px`, // 0 4px
      gap: spacing[1], // 4px
    },
  };

  const config = densityConfig[density];

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: `${config.gap}px`,
        padding: config.padding,
        backgroundColor: colors.background,
        color: colors.text,
        border: colors.border,
        borderRadius: '20px', // Pill-shaped
        fontSize: 12,
        fontFamily: '"Source Sans 3", sans-serif',
        fontWeight: 400,
        lineHeight: 1.2,
        whiteSpace: 'nowrap',
        ...props.sx,
      }}
      {...props}
    >
      {icon && (
        <Box
          component="span"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
            color: colors.iconColor,
          }}
        >
          {icon}
        </Box>
      )}
      <Box component="span">{children}</Box>
    </Box>
  );
};

BadgeStatus.propTypes = {
  /** Badge label text */
  children: PropTypes.node.isRequired,
  /** Status type */
  appearance: PropTypes.oneOf(['success', 'error', 'warning', 'info', 'neutral', 'new', 'new-neutral']),
  /** Visual weight - dark (filled with background) or light (no background, just colored text) */
  value: PropTypes.oneOf(['dark', 'light']),
  /** Size variant */
  density: PropTypes.oneOf(['standard', 'compact']),
  /** Whether badge is attached to another component (affects styling) */
  attached: PropTypes.bool,
  /** Optional status icon */
  icon: PropTypes.node,
  /** Additional MUI sx props */
  sx: PropTypes.object,
};

export default BadgeStatus;
