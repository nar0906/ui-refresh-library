/**
 * ButtonEmbeddedIcon Component
 * 
 * A semantic alias for IconButton with tertiary appearance (transparent background).
 * Perfect for embedding icon actions within other components or inline contexts.
 * 
 * This component is a convenience wrapper that defaults to tertiary appearance,
 * but all IconButton props are supported if needed.
 */

import React from 'react';
import IconButton from '../IconButton';
import PropTypes from 'prop-types';

const ButtonEmbeddedIcon = React.forwardRef(({
  appearance = 'tertiary',
  ...props
}, ref) => {
  return (
    <IconButton
      ref={ref}
      appearance={appearance}
      {...props}
    />
  );
});

ButtonEmbeddedIcon.displayName = 'ButtonEmbeddedIcon';

ButtonEmbeddedIcon.propTypes = {
  /** Icon to display */
  children: PropTypes.node.isRequired,
  /** Button visual style - defaults to tertiary */
  appearance: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /** Button size */
  density: PropTypes.oneOf(['standard', 'compact', 'extra-compact']),
  /** Disable the button */
  disabled: PropTypes.bool,
  /** Tooltip text */
  tooltip: PropTypes.string,
  /** Tooltip placement */
  tooltipPlacement: PropTypes.oneOf([
    'top', 'top-start', 'top-end',
    'bottom', 'bottom-start', 'bottom-end',
    'left', 'right'
  ]),
  /** Click handler */
  onClick: PropTypes.func,
};

export default ButtonEmbeddedIcon;
