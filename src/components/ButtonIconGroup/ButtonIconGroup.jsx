/**
 * ButtonIconGroup Component
 * 
 * Groups multiple icon buttons together with shared borders and proper border-radius handling.
 * Supports horizontal and vertical orientations with three density levels.
 */

import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';

const ButtonIconGroup = ({ 
  children, 
  orientation = 'horizontal',
  density = 'standard',
  appearance = 'secondary',
  ...props 
}) => {
  const childArray = React.Children.toArray(children);
  const childCount = childArray.length;

  // Get styling based on orientation and position
  const getButtonStyles = (index) => {
    const isFirst = index === 0;
    const isLast = index === childCount - 1;

    if (orientation === 'horizontal') {
      return {
        borderRadius: isFirst 
          ? '4px 0 0 4px' 
          : isLast 
            ? '0 4px 4px 0' 
            : 0,
        marginLeft: isFirst ? 0 : '-1px', // Overlap borders
        position: 'relative',
        zIndex: childCount - index, // Stack order for hover states
      };
    } else {
      // Vertical orientation
      return {
        borderRadius: isFirst 
          ? '4px 4px 0 0' 
          : isLast 
            ? '0 0 4px 4px' 
            : 0,
        marginTop: isFirst ? 0 : '-1px', // Overlap borders
        position: 'relative',
        zIndex: childCount - index, // Stack order for hover states
      };
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: orientation === 'horizontal' ? 'row' : 'column',
        ...props.sx,
      }}
      {...props}
    >
      {childArray.map((child, index) => {
        // Clone each child icon button and add the appropriate styles
        return React.cloneElement(child, {
          key: index,
          appearance: child.props.appearance || appearance,
          density: child.props.density || density,
          sx: {
            ...getButtonStyles(index),
            '&:hover': {
              zIndex: childCount + 1, // Bring to front on hover
            },
            ...child.props.sx,
          },
        });
      })}
    </Box>
  );
};

ButtonIconGroup.propTypes = {
  /** IconButton components to group together */
  children: PropTypes.node.isRequired,
  /** Layout orientation */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Button size/spacing */
  density: PropTypes.oneOf(['standard', 'compact', 'extra-compact']),
  /** Button visual style - applies to all buttons if not individually specified */
  appearance: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /** Additional MUI sx props */
  sx: PropTypes.object,
};

export default ButtonIconGroup;
