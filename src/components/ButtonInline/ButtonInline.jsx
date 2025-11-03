'use client';
/**
 * ButtonInline Component
 * 
 * Inline text link button component for embedding actions within content.
 * Features underlined text with color changes on interaction.
 * Perfect for inline actions like "Learn more", "Show details", etc.
 */

import React from 'react';
import { Link, Box } from '@mui/material';
import PropTypes from 'prop-types';
import spacing from '../../tokens/spacing';

const ButtonInline = React.forwardRef(({
  children,
  size = 'sm',
  href = '#',
  onClick,
  startIcon,
  endIcon,
  ...props
}, ref) => {
  // Size configurations based on Figma specs
  const sizeConfig = {
    sm: {
      fontSize: 14,
      lineHeight: 1.35,
    },
    md: {
      fontSize: 16,
      lineHeight: 1.5,
    },
    lg: {
      fontSize: 20,
      lineHeight: 1.5,
    },
  };

  const config = sizeConfig[size];

  // Color tokens from Figma
  const colors = {
    default: '#0062c4',
    hover: '#054688',
    active: '#032f5b',
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
        gap: startIcon || endIcon ? `${spacing[1]}px` : 0,
        fontFamily: '"Source Sans 3", sans-serif',
        fontSize: config.fontSize,
        fontWeight: 400,
        lineHeight: config.lineHeight,
        color: colors.default,
        textDecorationColor: colors.default,
        textUnderlinePosition: 'from-font',
        textDecorationSkipInk: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        
        '&:hover': {
          color: colors.hover,
          textDecorationColor: colors.hover,
        },
        
        '&:active': {
          color: colors.active,
          textDecorationColor: colors.active,
        },
        
        '&:focus-visible': {
          outline: `2px solid ${colors.default}`,
          outlineOffset: '4px',
          borderRadius: '2px',
          padding: `0 ${spacing[1]}px`,
        },
        
        ...props.sx,
      }}
      {...props}
    >
      {startIcon && (
        <Box
          component="span"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: 16,
          }}
        >
          {startIcon}
        </Box>
      )}
      {children}
      {endIcon && (
        <Box
          component="span"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: 16,
          }}
        >
          {endIcon}
        </Box>
      )}
    </Link>
  );
});

ButtonInline.displayName = 'ButtonInline';

ButtonInline.propTypes = {
  /** Link text or content */
  children: PropTypes.node.isRequired,
  /** Text size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Link href */
  href: PropTypes.string,
  /** Click handler */
  onClick: PropTypes.func,
  /** Optional icon at start */
  startIcon: PropTypes.node,
  /** Optional icon at end */
  endIcon: PropTypes.node,
  /** Additional MUI sx props */
  sx: PropTypes.object,
};

export default ButtonInline;
