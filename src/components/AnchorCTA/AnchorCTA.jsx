'use client';
/**
 * AnchorCTA Component
 * 
 * Call-to-action anchor link with button-like padding and styling.
 * Features underlined text with color changes on interaction.
 * Styled with Clario Medium font (vs Source Sans 3 for regular anchors).
 */

import React from 'react';
import { Link } from '@mui/material';
import PropTypes from 'prop-types';
import { systemColors } from '../../tokens/colors';
import spacing from '../../tokens/spacing';
import borders from '../../tokens/borders';
import shadows from '../../tokens/shadows';

const AnchorCTA = React.forwardRef(({
  children,
  appearance = 'primary',
  density = 'standard',
  href = '#',
  onClick,
  ...props
}, ref) => {
  // Density configurations
  const densityConfig = {
    standard: {
      minHeight: 40,
      padding: `${spacing[2]}px ${spacing[4]}px`,
      fontSize: 16,
      lineHeight: 1.5,
    },
    compact: {
      height: 32,
      padding: `${spacing[1]}px ${spacing[2]}px`,
      fontSize: 16,
      lineHeight: 1.35,
    },
    'extra-compact': {
      height: 24,
      padding: `${spacing[1]}px ${spacing[2]}px`,
      fontSize: 14,
      lineHeight: 1.2,
    },
  };

  const config = densityConfig[density];

  // Appearance-based styles (like buttons but with underlined text)
  const appearanceStyles = {
    primary: {
      backgroundColor: systemColors.interactive.primary.background.default,
      color: systemColors.interactive.primary.on.default,
      border: 'none',
      '&:hover': {
        backgroundColor: systemColors.interactive.primary.background.hover,
        color: systemColors.interactive.primary.on.hover,
      },
      '&:active': {
        backgroundColor: systemColors.interactive.primary.background.active,
        color: systemColors.interactive.primary.on.active,
      },
    },
    secondary: {
      backgroundColor: systemColors.interactive.secondary.background.default,
      color: systemColors.interactive.secondary.on.default,
      border: `1px solid ${systemColors.interactive.secondary.border.default}`,
      '&:hover': {
        backgroundColor: systemColors.interactive.secondary.background.hover,
        color: systemColors.interactive.secondary.on.hover,
        borderColor: systemColors.interactive.secondary.border.hover,
      },
      '&:active': {
        backgroundColor: systemColors.interactive.secondary.background.active,
        color: systemColors.interactive.secondary.on.active,
        borderColor: systemColors.interactive.secondary.border.active,
      },
    },
    tertiary: {
      backgroundColor: systemColors.interactive.tertiary.background.default,
      color: systemColors.interactive.tertiary.on.default,
      border: `1px solid ${systemColors.interactive.tertiary.border.default}`,
      '&:hover': {
        backgroundColor: systemColors.interactive.tertiary.background.hover,
        color: systemColors.interactive.tertiary.on.hover,
        borderColor: systemColors.interactive.tertiary.border.hover,
      },
      '&:active': {
        backgroundColor: systemColors.interactive.tertiary.background.active,
        color: systemColors.interactive.tertiary.on.active,
        borderColor: systemColors.interactive.tertiary.border.active,
      },
    },
  };

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <Link
      ref={ref}
      href={href}
      onClick={handleClick}
      underline="always"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Clario", sans-serif',
        fontSize: config.fontSize,
        fontWeight: 500,
        lineHeight: config.lineHeight,
        textDecorationColor: 'currentColor',
        textUnderlinePosition: 'from-font',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        borderRadius: '4px !important', // Explicitly 4px per Figma spec, override any theme defaults
        padding: config.padding,
        minHeight: config.minHeight,
        height: config.height,
        boxShadow: shadows.none,
        
        '&:focus-visible': {
          boxShadow: shadows.focus,
          outline: 'none',
        },
        
        ...appearanceStyles[appearance],
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Link>
  );
});

AnchorCTA.displayName = 'AnchorCTA';

AnchorCTA.propTypes = {
  /** Link text or content */
  children: PropTypes.node.isRequired,
  /** Visual style */
  appearance: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /** Size/spacing */
  density: PropTypes.oneOf(['standard', 'compact', 'extra-compact']),
  /** Link href */
  href: PropTypes.string,
  /** Click handler */
  onClick: PropTypes.func,
  /** Additional MUI sx props */
  sx: PropTypes.object,
};

export default AnchorCTA;
