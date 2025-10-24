/**
 * CoCounsel 3.0 Component Library Demo
 * 
 * Showcase of all button variants and states
 */

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Typography, Divider, Stack } from '@mui/material';
import theme from './theme/theme';
import Button from './components/Button';
import SendButton from './components/SendButton';
import StopButton from './components/StopButton';
import SideNavButton from './components/SideNavButton';

function Demo() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        minHeight: '100vh', 
        backgroundColor: '#FCFCFC',
        padding: 4,
      }}>
        <Typography variant="h2" sx={{ mb: 4, color: '#1D4B34' }}>
          CoCounsel 3.0 Component Library
        </Typography>

        {/* Primary Buttons */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>Primary Buttons</Typography>
          
          <Typography variant="h6" sx={{ mb: 2 }}>Standard Density (40px)</Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button appearance="primary" density="standard">
              Default
            </Button>
            <Button appearance="primary" density="standard" leftIcon={<span>+</span>}>
              With Left Icon
            </Button>
            <Button appearance="primary" density="standard" rightIcon={<span>→</span>}>
              With Right Icon
            </Button>
            <Button appearance="primary" density="standard" disabled>
              Disabled
            </Button>
            <Button appearance="primary" density="standard" loading>
              Loading
            </Button>
          </Stack>

          <Typography variant="h6" sx={{ mb: 2 }}>Compact Density (32px)</Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button appearance="primary" density="compact">
              Default
            </Button>
            <Button appearance="primary" density="compact" leftIcon={<span>+</span>}>
              With Icon
            </Button>
            <Button appearance="primary" density="compact" disabled>
              Disabled
            </Button>
            <Button appearance="primary" density="compact" loading>
              Loading
            </Button>
          </Stack>

          <Typography variant="h6" sx={{ mb: 2 }}>Extra-Compact Density (24px)</Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button appearance="primary" density="extra-compact">
              Default
            </Button>
            <Button appearance="primary" density="extra-compact" leftIcon={<span>+</span>}>
              With Icon
            </Button>
            <Button appearance="primary" density="extra-compact" disabled>
              Disabled
            </Button>
            <Button appearance="primary" density="extra-compact" loading>
              Loading
            </Button>
          </Stack>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Secondary Buttons */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>Secondary Buttons</Typography>
          
          <Typography variant="h6" sx={{ mb: 2 }}>Standard Density (40px)</Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button appearance="secondary" density="standard">
              Default
            </Button>
            <Button appearance="secondary" density="standard" leftIcon={<span>+</span>}>
              With Left Icon
            </Button>
            <Button appearance="secondary" density="standard" rightIcon={<span>→</span>}>
              With Right Icon
            </Button>
            <Button appearance="secondary" density="standard" disabled>
              Disabled
            </Button>
            <Button appearance="secondary" density="standard" loading>
              Loading
            </Button>
          </Stack>

          <Typography variant="h6" sx={{ mb: 2 }}>Compact Density (32px)</Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button appearance="secondary" density="compact">
              Default
            </Button>
            <Button appearance="secondary" density="compact" leftIcon={<span>+</span>}>
              With Icon
            </Button>
            <Button appearance="secondary" density="compact" disabled>
              Disabled
            </Button>
            <Button appearance="secondary" density="compact" loading>
              Loading
            </Button>
          </Stack>

          <Typography variant="h6" sx={{ mb: 2 }}>Extra-Compact Density (24px)</Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button appearance="secondary" density="extra-compact">
              Default
            </Button>
            <Button appearance="secondary" density="extra-compact" disabled>
              Disabled
            </Button>
            <Button appearance="secondary" density="extra-compact" loading>
              Loading
            </Button>
          </Stack>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Tertiary Buttons */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>Tertiary Buttons</Typography>
          
          <Typography variant="h6" sx={{ mb: 2 }}>Standard Density (40px)</Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button appearance="tertiary" density="standard">
              Default
            </Button>
            <Button appearance="tertiary" density="standard" leftIcon={<span>+</span>}>
              With Left Icon
            </Button>
            <Button appearance="tertiary" density="standard" rightIcon={<span>→</span>}>
              With Right Icon
            </Button>
            <Button appearance="tertiary" density="standard" disabled>
              Disabled
            </Button>
            <Button appearance="tertiary" density="standard" loading>
              Loading
            </Button>
          </Stack>

          <Typography variant="h6" sx={{ mb: 2 }}>Compact Density (32px)</Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button appearance="tertiary" density="compact">
              Default
            </Button>
            <Button appearance="tertiary" density="compact" leftIcon={<span>+</span>}>
              With Icon
            </Button>
            <Button appearance="tertiary" density="compact" disabled>
              Disabled
            </Button>
            <Button appearance="tertiary" density="compact" loading>
              Loading
            </Button>
          </Stack>

          <Typography variant="h6" sx={{ mb: 2 }}>Extra-Compact Density (24px)</Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button appearance="tertiary" density="extra-compact">
              Default
            </Button>
            <Button appearance="tertiary" density="extra-compact" disabled>
              Disabled
            </Button>
            <Button appearance="tertiary" density="extra-compact" loading>
              Loading
            </Button>
          </Stack>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Send & Stop Buttons */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>Send & Stop Buttons</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Circular icon buttons with tooltips on hover. 28px diameter, primary button styling.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <SendButton tooltip="Send message" />
            <SendButton tooltip="Send message (top)" tooltipPlacement="top" />
            <SendButton disabled />
            <StopButton tooltip="Stop" />
            <StopButton tooltip="Stop (top)" tooltipPlacement="top" />
            <StopButton disabled />
          </Stack>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Side Nav Buttons */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>Side Nav Buttons</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Navigation buttons for side panels. 32px height, transparent default with gray hover.
          </Typography>
          <Stack spacing={1} sx={{ maxWidth: 300 }}>
            <SideNavButton leftIcon={<span>+</span>}>
              Label text
            </SideNavButton>
            <SideNavButton leftIcon={<span>+</span>} rightIcon={<span>+</span>}>
              Label text
            </SideNavButton>
            <SideNavButton>
              Label text (no icons)
            </SideNavButton>
            <SideNavButton leftIcon={<span>+</span>} disabled>
              Label text
            </SideNavButton>
            <SideNavButton leftIcon={<span>+</span>} loading>
              Label text
            </SideNavButton>
          </Stack>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Interactive Demo */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>Interactive Demo</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Hover over buttons to see hover states, click to see active states, and tab to see focus states.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button appearance="primary" onClick={() => alert('Primary clicked!')}>
              Click Me (Primary)
            </Button>
            <Button appearance="secondary" onClick={() => alert('Secondary clicked!')}>
              Click Me (Secondary)
            </Button>
            <Button appearance="tertiary" onClick={() => alert('Tertiary clicked!')}>
              Click Me (Tertiary)
            </Button>
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Demo;
