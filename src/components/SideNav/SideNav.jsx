'use client';
/**
 * SideNav Component
 * 
 * Main navigation sidebar with expand/collapse functionality
 * Matches Figma: December/March Release design
 */

import React from 'react';
import { Box, Typography } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import SearchIcon from '@mui/icons-material/Search';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Button from '../Button';
import SideNavButton from '../SideNavButton';
import IconButton from '../IconButton';
import { systemColors } from '../../tokens/colors';
import spacing from '../../tokens/spacing';
import typography from '../../tokens/typography';

// RecentChatItem subcomponent
const RecentChatItem = ({ chat, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        padding: `${spacing[2]} ${spacing[2]}`,
        marginBottom: spacing[1],
        cursor: 'pointer',
        transition: 'background-color 150ms ease',
        borderRadius: '4px',
        '&:hover': {
          backgroundColor: systemColors.background.strong,
        },
        '&:last-child': {
          marginBottom: 0,
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: typography.fontFamily.body,
          fontSize: '14px',
          fontWeight: 400,
          color: systemColors.text.heavy,
          lineHeight: 1.5,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {chat.title}
      </Typography>
    </Box>
  );
};

const SideNav = ({
  isExpanded = true,
  onToggleExpand,
  onNewChat,
  recentChats = [],
  userName = 'Jane Lawson',
  onNavItemClick,
  onChatItemClick,
  activeNavItem = null,
}) => {
  const expandedWidth = '232px';
  const collapsedWidth = '56px';

  // Fixed navigation items matching Figma
  const navigationItems = [
    { id: 'history', label: 'History', icon: <HistoryIcon sx={{ fontSize: 16 }} /> },
    { id: 'projects', label: 'Projects', icon: <FolderIcon sx={{ fontSize: 16 }} /> },
    { id: 'document-review', label: 'Document Review', icon: <DescriptionIcon sx={{ fontSize: 16 }} /> },
    { id: 'knowledge-search', label: 'Knowledge Search', icon: <SearchIcon sx={{ fontSize: 16 }} /> },
    { id: 'library', label: 'Library', icon: <LocalLibraryIcon sx={{ fontSize: 16 }} /> },
  ];

  return (
    <Box
      sx={{
        width: isExpanded ? expandedWidth : collapsedWidth,
        height: '100vh',
        backgroundColor: '#f7f7f7',
        borderRight: `1px solid ${systemColors.border.subtle}`,
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 250ms ease-in-out',
        overflow: 'hidden',
      }}
    >
      {/* Header Section - Logo + Collapse Button (only in expanded) */}
      <Box
        sx={{
          padding: spacing[2],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '52px',
        }}
      >
        {isExpanded ? (
          <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily.heading,
                  fontSize: '14px',
                  fontWeight: 400,
                  color: systemColors.text.heavy,
                  lineHeight: 1.2,
                }}
              >
                Thomson Reuters®
              </Typography>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily.heading,
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#d64000',
                  lineHeight: 1.2,
                }}
              >
                CoCounsel
              </Typography>
            </Box>
            
            <IconButton
              appearance="tertiary"
              density="compact"
              onClick={onToggleExpand}
              tooltip="Collapse"
              sx={{
                color: systemColors.text.heavy,
                minWidth: '24px',
                width: '24px',
                height: '24px',
              }}
            >
              <ChevronLeftIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </>
        ) : (
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: spacing[2],
            }}
          >
            {/* TR Circular Logo */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#d64000"/>
              <circle cx="16" cy="16" r="12" fill="none" stroke="#fcfcfc" strokeWidth="1.5"/>
              <circle cx="16" cy="16" r="10" fill="none" stroke="#fcfcfc" strokeWidth="1"/>
              <circle cx="16" cy="16" r="8" fill="none" stroke="#fcfcfc" strokeWidth="0.5"/>
              <circle cx="16" cy="16" r="6" fill="none" stroke="#fcfcfc" strokeWidth="0.5"/>
            </svg>
            
            {/* Expand Button */}
            <IconButton
              appearance="tertiary"
              density="compact"
              onClick={onToggleExpand}
              tooltip="Expand"
              sx={{
                color: systemColors.text.heavy,
                minWidth: '24px',
                width: '24px',
                height: '24px',
              }}
            >
              <ChevronRightIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* New Chat Action Section */}
      <Box
        sx={{
          padding: `0 ${spacing[2]}`,
          paddingBottom: spacing[2],
        }}
      >
        {isExpanded ? (
          <Button
            appearance="primary"
            density="standard"
            leftIcon={<AddCommentIcon sx={{ fontSize: 16 }} />}
            onClick={onNewChat}
          >
            New chat
          </Button>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton
              appearance="primary"
              density="standard"
              onClick={onNewChat}
              tooltip="New chat"
            >
              <AddCommentIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* Navigation Menu Section */}
      <Box
        sx={{
          padding: `0 ${spacing[2]}`,
          marginBottom: spacing[2],
        }}
      >
        {navigationItems.map((item) => (
          <Box key={item.id} sx={{ mb: spacing[1] }}>
            {isExpanded ? (
              <SideNavButton
                leftIcon={item.icon}
                onClick={() => onNavItemClick?.(item.id)}
                sx={{
                  justifyContent: 'flex-start',
                }}
              >
                {item.label}
              </SideNavButton>
            ) : (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton
                  appearance="tertiary"
                  density="standard"
                  onClick={() => onNavItemClick?.(item.id)}
                  tooltip={item.label}
                  sx={{
                    color: systemColors.text.heavy,
                  }}
                >
                  {item.icon}
                </IconButton>
              </Box>
            )}
          </Box>
        ))}
      </Box>

      {/* Recent Chats Section - Scrollable, only visible when expanded */}
      {isExpanded && recentChats.length > 0 && (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            paddingTop: spacing[3],
          }}
        >
          {/* Section Header */}
          <Box sx={{ padding: `0 ${spacing[2]}`, mb: spacing[1] }}>
            <Typography
              sx={{
                fontFamily: typography.fontFamily.body,
                fontSize: '14px',
                fontWeight: 600,
                color: systemColors.text.heavy,
                lineHeight: 1.2,
                textTransform: 'none',
              }}
            >
              Recent chats
            </Typography>
          </Box>

          {/* Scrollable Chat List */}
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              overflowX: 'hidden',
              padding: spacing[2],
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                background: systemColors.border.subtle,
                borderRadius: '3px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: systemColors.text.subtle,
              },
            }}
          >
            {recentChats.map((chat) => (
              <RecentChatItem
                key={chat.id}
                chat={chat}
                onClick={() => onChatItemClick?.(chat.id)}
              />
            ))}
          </Box>
        </Box>
      )}

      {/* User Profile Section - Pinned to Bottom */}
      <Box
        sx={{
          padding: spacing[2],
          borderTop: `1px solid ${systemColors.border.subtle}`,
          marginTop: 'auto',
        }}
      >
        {isExpanded ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
            <AccountCircleIcon sx={{ fontSize: 20, color: systemColors.text.heavy }} />
            <Typography
              sx={{
                fontFamily: typography.fontFamily.body,
                fontSize: '14px',
                fontWeight: 400,
                color: systemColors.text.heavy,
                lineHeight: 1.35,
              }}
            >
              {userName}
            </Typography>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton
              appearance="tertiary"
              density="standard"
              tooltip={userName}
              sx={{
                color: systemColors.text.heavy,
              }}
            >
              <AccountCircleIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SideNav;
