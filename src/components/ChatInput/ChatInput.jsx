'use client';
/**
 * CoCounsel 3.0 Chat Input Component
 * 
 * Multi-state chat input with auto-expanding textarea
 * States: Collapsed (single-line), Expanded (multi-line with drawer)
 * Features: Icon buttons, send button, version dropdown, security message
 */

import React, { useState } from 'react';
import { Box, TextField, Button, Menu, MenuItem, IconButton as MuiIconButton, Chip, styled } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { systemColors } from '../../tokens/colors';
import spacing from '../../tokens/spacing';
import borders from '../../tokens/borders';
import shadows from '../../tokens/shadows';
import typography from '../../tokens/typography';

// Main container
const ChatInputWrapper = styled(Box)(({ variant }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: variant === 'mobile' ? 375 : 750,
  gap: spacing[2],
}));

// The main bordered container
const InputContainer = styled(Box)(({ expanded }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: systemColors.background.white,
  border: `${borders.width.thin}px solid ${systemColors.border.stronger}`,
  borderRadius: borders.radius.lg,
  boxShadow: shadows.elevation1,
}));

// Content area (for text and file chips)
const ContentArea = styled(Box)(({ hasFiles, hasLineBreaks }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: hasFiles ? spacing[2] : 0,
  padding: spacing[2],
  borderBottom: (hasLineBreaks && !hasFiles) ? `${borders.width.thin}px solid ${systemColors.border.stronger}` : 'none',
}));

// File chips container
const FileChipsContainer = styled(Box)(({ variant }) => ({
  display: 'flex',
  flexDirection: variant === 'mobile' ? 'column' : 'row',
  flexWrap: variant === 'mobile' ? 'nowrap' : 'wrap',
  gap: spacing[2],
  alignItems: 'flex-start',
}));

// Styled file chip
const FileChip = styled(Chip)({
  height: 32,
  backgroundColor: systemColors.background.white,
  border: `${borders.width.thin}px solid ${systemColors.border.subtle}`,
  borderRadius: borders.radius.xs,
  fontFamily: typography.fontFamily.primary,
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.regular,
  '& .MuiChip-label': {
    padding: `${spacing[1]}px ${spacing[2]}px`,
    display: 'flex',
    alignItems: 'center',
    gap: spacing[1],
  },
  '& .MuiChip-icon': {
    marginLeft: spacing[1],
    marginRight: 0,
    color: '#D32F2F',
    fontSize: 16,
  },
  '& .MuiChip-deleteIcon': {
    marginRight: spacing[1],
    fontSize: 16,
    color: systemColors.text.subtle,
    '&:hover': {
      color: systemColors.text.heavy,
    },
  },
});

// Input row container
const InputRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[2],
});

// Input field
const StyledTextField = styled(TextField)({
  flex: 1,
  '& .MuiInputBase-root': {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.relaxed,
    color: systemColors.text.heavy,
    padding: 0,
  },
  '& .MuiInputBase-input': {
    padding: 0,
    '&::placeholder': {
      color: systemColors.text.subtle,
      opacity: 1,
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
});

// Right-side buttons container (for collapsed state)
const RightButtons = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[1],
});

// Icon button styling
const StyledIconButton = styled(MuiIconButton)({
  width: 32,
  height: 32,
  padding: spacing[2],
  backgroundColor: systemColors.interactive.tertiary.background.default,
  border: `${borders.width.thin}px solid ${systemColors.interactive.tertiary.border.default}`,
  borderRadius: borders.radius.xs,
  color: systemColors.interactive.tertiary.on.default,
  '&:hover': {
    backgroundColor: systemColors.interactive.tertiary.background.hover,
    borderColor: systemColors.interactive.tertiary.border.hover,
    color: systemColors.interactive.tertiary.on.hover,
  },
  '& svg': {
    fontSize: 16,
  },
});

// Send button styling
const StyledSendButton = styled(MuiIconButton)(({ disabled }) => ({
  width: 28,
  height: 28,
  padding: spacing[2],
  backgroundColor: disabled
    ? systemColors.interactive.disabled.background.subtle
    : systemColors.interactive.primary.background.default,
  border: `${borders.width.thin}px solid ${disabled
    ? systemColors.interactive.disabled.background.strong
    : systemColors.interactive.primary.border.default}`,
  borderRadius: '50%',
  color: disabled
    ? systemColors.interactive.disabled.on.subtle
    : systemColors.interactive.primary.on.default,
  '&:hover': disabled ? {} : {
    backgroundColor: systemColors.interactive.primary.background.hover,
    borderColor: systemColors.interactive.primary.border.hover,
  },
  '& svg': {
    fontSize: 16,
  },
}));

// Drawer for expanded state
const DrawerRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${spacing[1]}px ${spacing[2]}px`,
  height: 39,
});

// Left actions in drawer
const LeftActions = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[1],
});

// Right actions in drawer
const RightActions = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[2],
});

// Version dropdown button
const VersionButton = styled(Button)({
  backgroundColor: systemColors.interactive.tertiary.background.default,
  border: `${borders.width.thin}px solid ${systemColors.interactive.tertiary.border.default}`,
  borderRadius: borders.radius.xs,
  padding: `${spacing[1]}px ${spacing[2]}px`,
  height: 32,
  fontFamily: '"Clario", sans-serif',
  fontWeight: 500,
  fontSize: 14,
  lineHeight: 1.2,
  color: systemColors.interactive.tertiary.on.default,
  textTransform: 'none',
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: systemColors.interactive.tertiary.background.hover,
    borderColor: systemColors.interactive.tertiary.border.hover,
    color: systemColors.interactive.tertiary.on.hover,
  },
  '& .MuiButton-endIcon': {
    marginLeft: spacing[1],
    '& svg': {
      fontSize: 16,
    },
  },
});

// Security message
const SecurityMessage = styled(Box)({
  fontFamily: typography.fontFamily.primary,
  fontSize: typography.fontSize.xs,
  fontWeight: typography.fontWeight.regular,
  lineHeight: typography.lineHeight.snug,
  color: systemColors.text.subtle,
  textAlign: 'left',
  paddingLeft: spacing[2],
  '& a': {
    color: 'inherit',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
});

const ChatInput = ({
  value = '',
  onChange,
  onSend,
  placeholder = 'Ask CoCounsel about legal task or topic...',
  disabled = false,
  version = 'CoCounsel 2.0',
  onVersionChange,
  versions = ['CoCounsel 2.0', 'CoCounsel 1.0'],
  attachedFiles = [],
  onFileRemove,
  variant = 'desktop', // 'desktop' or 'mobile'
}) => {
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // Auto-expand when content has line breaks OR when files are attached
  React.useEffect(() => {
    setExpanded(value.includes('\n') || attachedFiles.length > 0);
  }, [value, attachedFiles]);

  const handleSend = () => {
    if (value.trim() && onSend) {
      onSend(value);
    }
  };

  const handleVersionClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleVersionClose = () => {
    setAnchorEl(null);
  };

  const handleVersionSelect = (selectedVersion) => {
    if (onVersionChange) {
      onVersionChange(selectedVersion);
    }
    handleVersionClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <ChatInputWrapper variant={variant}>
      <InputContainer expanded={expanded}>
        <ContentArea hasFiles={attachedFiles.length > 0} hasLineBreaks={value.includes('\n')}>
          <InputRow>
            {/* Mobile collapsed: buttons on LEFT */}
            {!expanded && variant === 'mobile' && (
              <RightButtons>
                <StyledIconButton size="small">
                  <AttachFileIcon />
                </StyledIconButton>
                <StyledIconButton size="small">
                  <AutoAwesomeIcon />
                </StyledIconButton>
              </RightButtons>
            )}
            
            <StyledTextField
              fullWidth
              multiline
              minRows={1}
              maxRows={6}
              value={value}
              onChange={onChange}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              disabled={disabled}
              variant="outlined"
            />
            
            {/* Desktop collapsed: buttons on RIGHT */}
            {!expanded && variant === 'desktop' && (
              <RightButtons>
                <StyledIconButton size="small">
                  <AttachFileIcon />
                </StyledIconButton>
                <StyledIconButton size="small">
                  <AutoAwesomeIcon />
                </StyledIconButton>
                <StyledSendButton 
                  size="small" 
                  disabled={(!value.trim() && attachedFiles.length === 0) || disabled}
                  onClick={handleSend}
                >
                  <ArrowUpwardIcon />
                </StyledSendButton>
              </RightButtons>
            )}
            
            {/* Mobile collapsed: send button on RIGHT (separate) - always active in mobile */}
            {!expanded && variant === 'mobile' && (
              <StyledSendButton 
                size="small" 
                disabled={disabled}
                onClick={handleSend}
              >
                <ArrowUpwardIcon />
              </StyledSendButton>
            )}
          </InputRow>
          
          {attachedFiles.length > 0 && (
            <FileChipsContainer variant={variant}>
              {attachedFiles.slice(0, 8).map((file, index) => (
                <FileChip
                  key={index}
                  icon={<PictureAsPdfIcon />}
                  label={file.name || file}
                  onDelete={() => onFileRemove && onFileRemove(index)}
                  deleteIcon={<CloseIcon />}
                />
              ))}
              {attachedFiles.length > 8 && (
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  fontFamily: typography.fontFamily.primary,
                  fontSize: typography.fontSize.sm,
                  color: systemColors.text.subtle,
                }}>
                  + {attachedFiles.length - 8} items more
                </Box>
              )}
            </FileChipsContainer>
          )}
        </ContentArea>

        {expanded && (
          <DrawerRow>
            <LeftActions>
              <StyledIconButton size="small">
                <AttachFileIcon />
              </StyledIconButton>
              <StyledIconButton size="small">
                <AutoAwesomeIcon />
              </StyledIconButton>
            </LeftActions>

            <RightActions>
              <VersionButton
                onClick={handleVersionClick}
                endIcon={<ExpandMoreIcon />}
              >
                {version}
              </VersionButton>
              <StyledSendButton 
                size="small" 
                disabled={variant === 'mobile' ? disabled : ((!value.trim() && attachedFiles.length === 0) || disabled)}
                onClick={handleSend}
              >
                <ArrowUpwardIcon />
              </StyledSendButton>
            </RightActions>
          </DrawerRow>
        )}
      </InputContainer>

      <SecurityMessage>
        Your data is <a href="#">private and secure</a>.
      </SecurityMessage>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleVersionClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {versions.map((v) => (
          <MenuItem
            key={v}
            onClick={() => handleVersionSelect(v)}
            selected={v === version}
          >
            {v}
          </MenuItem>
        ))}
      </Menu>
    </ChatInputWrapper>
  );
};

export default ChatInput;
