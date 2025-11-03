'use client';
/**
 * CoCounsel 3.0 Tabs Component
 * 
 * Container for multiple Tab components
 * Supports horizontal and vertical orientations
 * Manages selected state and renders border separator
 */

import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import { systemColors } from '../../tokens/colors';
import spacing from '../../tokens/spacing';
import borders from '../../tokens/borders';

// Tabs container with border
const TabsContainer = styled(Box)(({ orientation }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

// Tab list wrapper with border
const TabList = styled(Box)(({ orientation }) => ({
  display: 'flex',
  flexDirection: orientation === 'vertical' ? 'column' : 'row',
  gap: orientation === 'vertical' ? spacing[2] : spacing[2],
  alignItems: orientation === 'vertical' ? 'stretch' : 'flex-end',
  width: orientation === 'vertical' ? '100%' : 'auto',
  borderBottom: orientation === 'horizontal' ? `${borders.width.thin}px solid ${systemColors.border.strong}` : 'none',
  borderLeft: orientation === 'vertical' ? `${borders.width.thin}px solid ${systemColors.border.strong}` : 'none',
  paddingRight: orientation === 'vertical' ? spacing[8] : 0,
}));

const Tabs = ({
  children,
  value,
  onChange,
  orientation = 'horizontal',
  ...props
}) => {
  const handleTabClick = (index) => {
    if (onChange) {
      onChange(index);
    }
  };

  return (
    <TabsContainer {...props}>
      <TabList orientation={orientation} role="tablist" aria-orientation={orientation}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;
          
          return React.cloneElement(child, {
            selected: value === index,
            onClick: () => handleTabClick(index),
            orientation,
            ...child.props,
          });
        })}
      </TabList>
    </TabsContainer>
  );
};

export default Tabs;
