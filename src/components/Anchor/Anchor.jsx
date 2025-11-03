/**
 * Anchor Component
 * 
 * Standard text link with underline styling.
 * This is a semantic alias for ButtonInline - they share the same implementation.
 * 
 * Features:
 * - Three sizes: sm (14px), md (16px), lg (20px)
 * - All interaction states: default, hover, active, focus, visited
 * - Always underlined
 * - Source Sans 3 font family
 */

import React from 'react';
import ButtonInline from '../ButtonInline';
import PropTypes from 'prop-types';

const Anchor = React.forwardRef((props, ref) => {
  return <ButtonInline ref={ref} {...props} />;
});

Anchor.displayName = 'Anchor';

Anchor.propTypes = {
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

export default Anchor;
