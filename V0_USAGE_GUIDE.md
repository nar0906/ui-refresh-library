# Using ui-refresh-library with V0 (v0.dev)

## Overview

This component library is now available on GitHub and fully compatible with V0 (v0.dev) - Vercel's AI-powered UI generation tool. All components include `'use client'` directives, making them ready for Next.js 13+ App Router.

## Repository Information

- **GitHub URL**: https://github.com/nar0906/ui-refresh-library
- **Framework**: React with Material-UI (MUI)
- **Next.js Compatibility**: ✅ All components include 'use client' directive

## Using with V0

### Method 1: Reference the GitHub Repository

When working with V0, you can reference your component library by mentioning it in your prompts:

```
Use the components from my GitHub repository at https://github.com/nar0906/ui-refresh-library

Create a [feature description] using the Button and BadgeStatus components from my library.
```

### Method 2: Copy Component Code

1. Browse your GitHub repository
2. Navigate to the component you want (e.g., `src/components/Button/Button.jsx`)
3. Copy the component code
4. Paste it into V0's chat and ask it to use or modify the component

Example prompt:

```
Here's my Button component: [paste code]

Use this component to create a form with primary and secondary buttons.
```

### Method 3: Install as NPM Package (Future)

If you publish this library to npm, you can reference it directly:

```
Install my ui-refresh-library package and use the Button component to create...
```

## Component List

All components are Next.js compatible with 'use client' directive:

### Buttons

- `Button` - Primary, Secondary, Tertiary variants
- `SendButton` - Circular send action button
- `StopButton` - Circular stop action button
- `IconButton` - Icon-only button
- `ButtonGroup` - Groups buttons with shared borders
- `ButtonIconGroup` - Groups icon buttons
- `ButtonEmbeddedIcon` - Tertiary icon for embedding in content
- `ButtonFooter` - Footer layout component

### Links

- `ButtonInline` - Inline text link
- `Anchor` - Standard text link (alias of ButtonInline)
- `AnchorCTA` - Call-to-action anchor with button styling

### Navigation

- `SideNavButton` - Navigation button for side panels
- `SideNav` - Full navigation sidebar component

### Badges & Tabs

- `BadgeStatus` - Status indicator badges
- `Tab` - Individual tab component
- `Tabs` - Tab container

### Form Elements

- `ToggleSwitch` - Toggle switch component
- `ChatInput` - Chat input component

## Design Tokens

The library includes a comprehensive token system:

- **Colors**: 334 core + 150 system + 80 component tokens (626 total)
- **Spacing**: 25-step scale based on 4px grid
- **Typography**: Complete font families, sizes, weights
- **Borders**: Radius and width values
- **Shadows**: 11 shadow definitions
- **Layout**: Container widths and breakpoints

## Important Notes for V0

### MUI Dependency

All components are built on Material-UI. When using with V0:

1. **V0 will need to install MUI dependencies**:

   ```json
   "@mui/material": "^5.14.18",
   "@emotion/react": "^11.11.1",
   "@emotion/styled": "^11.11.0"
   ```

2. **Theme Provider Required**: Components need MUI's ThemeProvider wrapper (see Demo.jsx for example)

3. **Token System**: The design token files should be included or referenced

### Recommended V0 Workflow

1. **Start with a simple prompt**:

   ```
   Create a Next.js page using components from https://github.com/nar0906/ui-refresh-library

   Use the Button component (primary appearance) and BadgeStatus component (success appearance)
   ```

2. **V0 will either**:

   - Reference your code and generate similar Next.js-compatible components
   - Suggest installing your library as a dependency
   - Adapt your components for the Next.js environment

3. **Iterate based on results**: V0 might need guidance on:
   - Installing MUI dependencies
   - Setting up the theme
   - Importing components correctly

## Example V0 Prompts

### Basic Component Usage

```
Reference my component library at https://github.com/nar0906/ui-refresh-library

Create a login form using:
- TextField (when we build it)
- Button (primary appearance)
- Anchor component for "Forgot Password" link
```

### Layout with Multiple Components

```
Using my ui-refresh-library components, create a dashboard layout with:
- SideNav component for navigation
- ButtonGroup for action buttons
- BadgeStatus components for status indicators
```

### Styling Consistency

```
Create new components following the same design token system as my ui-refresh-library:
https://github.com/nar0906/ui-refresh-library/tree/main/src/tokens
```

## Tips for Best Results

1. **Be Specific**: Reference exact component names from the README
2. **Include Context**: Mention it's a React/Next.js component library
3. **Design System Reference**: Point to the token system for consistent styling
4. **Start Simple**: Begin with one or two components, then build complexity

## Next Steps

### Option 1: Publish to NPM

For easier integration, consider publishing to npm:

1. Update package.json with correct information
2. Run `npm publish`
3. Reference in V0 with package name

### Option 2: Keep as GitHub Reference

Continue using as a reference library that V0 can learn from and generate similar patterns.

## Component Documentation

Full component documentation with props and usage examples is available in the main [README.md](./README.md).

## Support

For issues or questions about using this library with V0, refer to:

- [V0 Documentation](https://v0.dev/docs)
- [MUI Documentation](https://mui.com/)
- This repository's README and component files
