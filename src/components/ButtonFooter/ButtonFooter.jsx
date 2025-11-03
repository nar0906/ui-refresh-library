/**
 * ButtonFooter Component
 * 
 * Footer layout component for forms and dialogs.
 * Contains primary action button, optional secondary button, and optional anchor link.
 * Supports different layouts based on type and screen size.
 */

import React from 'react';
import { Box, Link } from '@mui/material';
import PropTypes from 'prop-types';
import Button from '../Button';
import { coreColors } from '../../tokens/colors';
import spacing from '../../tokens/spacing';

const ButtonFooter = ({
  primaryButton,
  secondaryButton,
  anchorText,
  anchorHref = '#',
  onAnchorClick,
  type = 'default',
  size = 's-xxxl',
  density = 'standard',
  ...props
}) => {
  // Anchor link component
  const anchorLink = anchorText ? (
    <Link
      href={anchorHref}
      onClick={onAnchorClick}
      underline="always"
      sx={{
        fontFamily: '"Source Sans 3", sans-serif',
        fontSize: size === 'xs-s' ? 16 : density === 'compact' ? 14 : 16,
        fontWeight: 400,
        lineHeight: size === 'xs-s' ? 1.5 : density === 'compact' ? 1.35 : 1.5,
        color: coreColors.graphite,
        textDecorationColor: coreColors.graphite,
        cursor: 'pointer',
        padding: '0 4px',
        '&:hover': {
          color: coreColors.graphite,
        },
      }}
    >
      {anchorText}
    </Link>
  ) : null;

  // Button grouping
  const buttonGroup = (
    <Box
      sx={{
        display: 'flex',
        gap: `${spacing[type === 'form' ? 2 : 3]}px`,
        alignItems: type === 'form' && size === 's-xxxl' ? 'baseline' : 'center',
        flexDirection: type === 'form' && size === 'xs-s' ? 'column' : 'row',
        width: type === 'form' && size === 'xs-s' ? '100%' : 'auto',
      }}
    >
      {/* Primary button - always present */}
      {primaryButton}
      
      {/* Secondary button - optional */}
      {secondaryButton}
    </Box>
  );

  // Layout based on type and size
  if (type === 'default') {
    // Default type: anchor on left, buttons on right
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          ...props.sx,
        }}
        {...props}
      >
        {size === 's-xxxl' ? (
          <>
            {anchorLink}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {buttonGroup}
            </Box>
          </>
        ) : (
          // xs-s: stacked layout
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: `${spacing[3]}px`, width: '100%' }}>
            {anchorLink}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: `${spacing[3]}px`, alignItems: 'flex-end', width: '100%' }}>
              {secondaryButton && <Box sx={{ width: '100%' }}>{secondaryButton}</Box>}
              <Box sx={{ width: '100%' }}>{primaryButton}</Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
              {anchorLink && <Box>{anchorLink}</Box>}
            </Box>
          </Box>
        )}
      </Box>
    );
  } else {
    // Form type: buttons on left (or stacked), anchor on right (or bottom)
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: size === 'xs-s' ? 'column' : 'row',
          alignItems: size === 'xs-s' ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          width: '100%',
          gap: size === 'xs-s' ? 0 : `${spacing[2]}px`,
          ...props.sx,
        }}
        {...props}
      >
        {size === 's-xxxl' ? (
          <>
            {buttonGroup}
            {anchorLink}
          </>
        ) : (
          // xs-s: stacked layout
          <>
            <Box sx={{ width: '100%' }}>
              {buttonGroup}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              {anchorLink}
            </Box>
          </>
        )}
      </Box>
    );
  }
};

ButtonFooter.propTypes = {
  /** Primary button (required) */
  primaryButton: PropTypes.node.isRequired,
  /** Secondary button (optional) */
  secondaryButton: PropTypes.node,
  /** Anchor link text (optional) */
  anchorText: PropTypes.string,
  /** Anchor link href */
  anchorHref: PropTypes.string,
  /** Anchor link click handler */
  onAnchorClick: PropTypes.func,
  /** Layout type */
  type: PropTypes.oneOf(['default', 'form']),
  /** Screen size breakpoint */
  size: PropTypes.oneOf(['s-xxxl', 'xs-s']),
  /** Button density */
  density: PropTypes.oneOf(['standard', 'compact']),
  /** Additional MUI sx props */
  sx: PropTypes.object,
};

export default ButtonFooter;
