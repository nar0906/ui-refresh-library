# CoCounsel 3.0 UI Refresh Component Library

A comprehensive, token-based React component library built with Material-UI, designed to match the CoCounsel 3.0 design system.

## 🎯 Overview

This library provides production-ready React components styled with a complete design token system extracted from Figma. All components are built on MUI foundations and customized to match exact design specifications.

## 📦 What's Included

### Design Tokens (626 total)

- **Colors**: 334 core + 150 system + 80 component-specific tokens
- **Spacing**: 25-step scale based on 4px grid
- **Typography**: Complete font families, sizes, weights, line heights
- **Borders**: Radius and width values
- **Shadows**: 11 shadow definitions
- **Layout**: Container widths and breakpoints

### Components

- **Button**: Primary, Secondary, Tertiary variants

  - 3 density levels: Standard (40px), Compact (32px), Extra-Compact (24px)
  - All states: Default, Hover, Active, Focus, Disabled, Loading
  - Icon support: Left, Right, or Icon-only

- **ButtonGroup**: Groups buttons with shared borders

  - Horizontal and Vertical orientations
  - Supports all density levels
  - Works with all button appearances

- **ButtonIconGroup**: Groups icon buttons with shared borders

  - Horizontal and Vertical orientations
  - Supports all density levels
  - Perfect for toolbars and icon-only actions

- **ButtonEmbeddedIcon**: Tertiary icon button for embedding in content

  - Transparent background (tertiary appearance)
  - All density levels supported
  - Ideal for inline actions and embedded controls

- **ButtonFooter**: Footer layout component for forms and dialogs

  - Two layout types: Default (anchor left) and Form (buttons left)
  - Responsive: S-XXXL (horizontal) and XS-S (stacked) sizes
  - Optional anchor link and secondary button

- **ButtonInline**: Inline text link button for embedding in content

  - Three sizes: Small (14px), Medium (16px), Large (20px)
  - Underlined text with color changes on interaction
  - Perfect for inline actions within paragraphs

- **Anchor**: Standard text link (semantic alias of ButtonInline)

  - Three sizes: Small (14px), Medium (16px), Large (20px)
  - Includes visited state styling
  - Source Sans 3 font family

- **AnchorCTA**: Call-to-action anchor with button-like styling

  - Three density levels with padding
  - Three appearances: Primary, Secondary, Tertiary
  - Clario Medium font for emphasis
  - Underlined with interaction states

- **BadgeStatus**: Status indicator badges

  - Seven appearances: Success, Error, Warning, Info, Neutral, New, New-Neutral
  - Dark (filled) and Light (with borders) values
  - Standard and Compact densities
  - Optional status icons
  - Pill-shaped design

- **SendButton**: Circular icon button (28px) for send actions
- **StopButton**: Circular icon button (28px) for stop actions
- **SideNavButton**: Navigation button (32px) for side panels
- **IconButton**: Icon-only button with all appearance/density variants

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This starts the development server at `http://localhost:5173`

### Build

```bash
npm run build
```

Builds the library for production in the `dist/` folder.

## 💻 Usage

### Basic Button

```jsx
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import Button from "./components/Button";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button appearance="primary">Click Me</Button>
    </ThemeProvider>
  );
}
```

### Button with Icons

```jsx
<Button appearance="secondary" density="compact" leftIcon={<YourIcon />}>
  With Icon
</Button>
```

### Button Props

| Prop         | Type                                         | Default      | Description              |
| ------------ | -------------------------------------------- | ------------ | ------------------------ |
| `appearance` | `'primary' \| 'secondary' \| 'tertiary'`     | `'primary'`  | Button visual style      |
| `density`    | `'standard' \| 'compact' \| 'extra-compact'` | `'standard'` | Button size/spacing      |
| `leftIcon`   | `ReactNode`                                  | -            | Icon to display on left  |
| `rightIcon`  | `ReactNode`                                  | -            | Icon to display on right |
| `disabled`   | `boolean`                                    | `false`      | Disable the button       |
| `loading`    | `boolean`                                    | `false`      | Show loading state       |
| `onClick`    | `function`                                   | -            | Click handler            |

### ButtonGroup Usage

```jsx
import ButtonGroup from "./components/ButtonGroup";

// Horizontal group
<ButtonGroup orientation="horizontal" density="compact">
  <Button>First</Button>
  <Button>Second</Button>
  <Button>Third</Button>
</ButtonGroup>

// Vertical group
<ButtonGroup orientation="vertical" density="standard">
  <Button leftIcon={<Icon />}>Option 1</Button>
  <Button leftIcon={<Icon />}>Option 2</Button>
  <Button leftIcon={<Icon />}>Option 3</Button>
</ButtonGroup>
```

### ButtonGroup Props

| Prop          | Type                                         | Default        | Description                             |
| ------------- | -------------------------------------------- | -------------- | --------------------------------------- |
| `children`    | `ReactNode`                                  | -              | Button components to group              |
| `orientation` | `'horizontal' \| 'vertical'`                 | `'horizontal'` | Layout direction                        |
| `density`     | `'standard' \| 'compact' \| 'extra-compact'` | `'standard'`   | Size applied to all child buttons       |
| `appearance`  | `'primary' \| 'secondary' \| 'tertiary'`     | `'secondary'`  | Appearance applied to all child buttons |

### ButtonIconGroup Usage

```jsx
import ButtonIconGroup from "./components/ButtonIconGroup";
import IconButton from "./components/IconButton";

// Horizontal toolbar
<ButtonIconGroup orientation="horizontal" density="compact">
  <IconButton><PlusIcon /></IconButton>
  <IconButton><MinusIcon /></IconButton>
  <IconButton><EditIcon /></IconButton>
  <IconButton><DeleteIcon /></IconButton>
</ButtonIconGroup>

// Vertical toolbar
<ButtonIconGroup orientation="vertical" density="standard">
  <IconButton><UpIcon /></IconButton>
  <IconButton><DownIcon /></IconButton>
  <IconButton><LeftIcon /></IconButton>
  <IconButton><RightIcon /></IconButton>
</ButtonIconGroup>
```

### ButtonIconGroup Props

| Prop          | Type                                         | Default        | Description                                  |
| ------------- | -------------------------------------------- | -------------- | -------------------------------------------- |
| `children`    | `ReactNode`                                  | -              | IconButton components to group               |
| `orientation` | `'horizontal' \| 'vertical'`                 | `'horizontal'` | Layout direction                             |
| `density`     | `'standard' \| 'compact' \| 'extra-compact'` | `'standard'`   | Size applied to all child icon buttons       |
| `appearance`  | `'primary' \| 'secondary' \| 'tertiary'`     | `'secondary'`  | Appearance applied to all child icon buttons |

### ButtonEmbeddedIcon Usage

```jsx
import ButtonEmbeddedIcon from "./components/ButtonEmbeddedIcon";

// Embedded in content
<Typography>
  Edit your settings
  <ButtonEmbeddedIcon density="compact" tooltip="Settings">
    <SettingsIcon />
  </ButtonEmbeddedIcon>
</Typography>

// With different densities
<ButtonEmbeddedIcon density="standard" tooltip="More options">
  <MoreIcon />
</ButtonEmbeddedIcon>
```

### ButtonEmbeddedIcon Props

| Prop               | Type                                                                                                   | Default      | Description         |
| ------------------ | ------------------------------------------------------------------------------------------------------ | ------------ | ------------------- |
| `children`         | `ReactNode`                                                                                            | -            | Icon to display     |
| `appearance`       | `'primary' \| 'secondary' \| 'tertiary'`                                                               | `'tertiary'` | Button visual style |
| `density`          | `'standard' \| 'compact' \| 'extra-compact'`                                                           | `'standard'` | Button size         |
| `disabled`         | `boolean`                                                                                              | `false`      | Disable the button  |
| `tooltip`          | `string`                                                                                               | -            | Tooltip text        |
| `tooltipPlacement` | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'right'` | `'bottom'`   | Tooltip position    |
| `onClick`          | `function`                                                                                             | -            | Click handler       |

### ButtonFooter Usage

```jsx
import ButtonFooter from "./components/ButtonFooter";

// Default layout (anchor on left, buttons on right)
<ButtonFooter
  type="default"
  size="s-xxxl"
  density="standard"
  anchorText="Cancel"
  primaryButton={<Button appearance="primary">Save</Button>}
  secondaryButton={<Button appearance="secondary">Preview</Button>}
/>

// Form layout (buttons on left, anchor on right)
<ButtonFooter
  type="form"
  size="s-xxxl"
  density="compact"
  anchorText="Learn more"
  primaryButton={<Button appearance="primary">Submit</Button>}
  secondaryButton={<Button appearance="secondary">Cancel</Button>}
/>
```

### ButtonFooter Props

| Prop              | Type                      | Default      | Description                             |
| ----------------- | ------------------------- | ------------ | --------------------------------------- |
| `primaryButton`   | `ReactNode`               | -            | Primary action button (required)        |
| `secondaryButton` | `ReactNode`               | -            | Secondary action button (optional)      |
| `anchorText`      | `string`                  | -            | Anchor link text (optional)             |
| `anchorHref`      | `string`                  | `'#'`        | Anchor link URL                         |
| `onAnchorClick`   | `function`                | -            | Anchor link click handler               |
| `type`            | `'default' \| 'form'`     | `'default'`  | Layout type                             |
| `size`            | `'s-xxxl' \| 'xs-s'`      | `'s-xxxl'`   | Screen size (affects responsive layout) |
| `density`         | `'standard' \| 'compact'` | `'standard'` | Button density                          |

### ButtonInline Usage

```jsx
import ButtonInline from "./components/ButtonInline";

// Within a paragraph
<Typography>
  Read the full documentation <ButtonInline size="md">here</ButtonInline>.
</Typography>

// As a standalone link
<ButtonInline size="lg" onClick={() => console.log('clicked')}>
  Learn more about this feature
</ButtonInline>

// With icons
<ButtonInline size="md" startIcon={<Icon />}>
  View details
</ButtonInline>
```

### ButtonInline Props

| Prop        | Type                   | Default | Description                                  |
| ----------- | ---------------------- | ------- | -------------------------------------------- |
| `children`  | `ReactNode`            | -       | Link text or content                         |
| `size`      | `'sm' \| 'md' \| 'lg'` | `'sm'`  | Text size                                    |
| `href`      | `string`               | `'#'`   | Link URL                                     |
| `onClick`   | `function`             | -       | Click handler (prevents default if provided) |
| `startIcon` | `ReactNode`            | -       | Optional icon before text                    |
| `endIcon`   | `ReactNode`            | -       | Optional icon after text                     |

### Anchor Usage

```jsx
import Anchor from "./components/Anchor";

// Basic usage
<Anchor size="md" href="/page">Link text</Anchor>

// Within content
<Typography>
  Learn more in our <Anchor size="md">documentation</Anchor>.
</Typography>
```

### Anchor Props

Same as ButtonInline - it's a semantic alias with identical props and behavior.

### AnchorCTA Usage

```jsx
import AnchorCTA from "./components/AnchorCTA";

// Primary CTA
<AnchorCTA appearance="primary" density="standard">
  Get Started
</AnchorCTA>

// Secondary action
<AnchorCTA appearance="secondary" density="compact">
  Learn More
</AnchorCTA>

// Tertiary inline
<AnchorCTA appearance="tertiary" density="extra-compact">
  View Details
</AnchorCTA>
```

### AnchorCTA Props

| Prop         | Type                                         | Default      | Description                                  |
| ------------ | -------------------------------------------- | ------------ | -------------------------------------------- |
| `children`   | `ReactNode`                                  | -            | Link text or content                         |
| `appearance` | `'primary' \| 'secondary' \| 'tertiary'`     | `'primary'`  | Visual style                                 |
| `density`    | `'standard' \| 'compact' \| 'extra-compact'` | `'standard'` | Size/spacing                                 |
| `href`       | `string`                                     | `'#'`        | Link URL                                     |
| `onClick`    | `function`                                   | -            | Click handler (prevents default if provided) |

### BadgeStatus Usage

```jsx
import BadgeStatus from "./components/BadgeStatus";

// With icon
<BadgeStatus appearance="success" value="dark" icon={<CheckIcon />}>
  Completed
</BadgeStatus>

// Without icon
<BadgeStatus appearance="warning" value="light">
  Pending Review
</BadgeStatus>

// Compact version
<BadgeStatus appearance="error" value="dark" density="compact" icon={<ErrorIcon />}>
  Failed
</BadgeStatus>
```

### BadgeStatus Props

| Prop         | Type                                                                                 | Default      | Description                            |
| ------------ | ------------------------------------------------------------------------------------ | ------------ | -------------------------------------- |
| `children`   | `ReactNode`                                                                          | -            | Badge label text                       |
| `appearance` | `'success' \| 'error' \| 'warning' \| 'info' \| 'neutral' \| 'new' \| 'new-neutral'` | `'success'`  | Status type with semantic colors       |
| `value`      | `'dark' \| 'light'`                                                                  | `'dark'`     | Visual weight (filled or with border)  |
| `density`    | `'standard' \| 'compact'`                                                            | `'standard'` | Size variant                           |
| `attached`   | `boolean`                                                                            | `false`      | Whether badge is attached to component |
| `icon`       | `ReactNode`                                                                          | -            | Optional status icon                   |

## 🎨 Design Token Structure

### Three-Tier System

1. **Core Tokens** - Raw values

```javascript
coreColors.racingGreen[700]; // #1D4B34
```

2. **System Tokens** - Semantic purpose

```javascript
systemColors.interactive.primary.background.default;
```

3. **Component Tokens** - Component-specific

```javascript
componentColors.card.background.hover;
```

### Accessing Tokens

```javascript
import { coreColors, systemColors, componentColors } from "./tokens/colors";
import spacing from "./tokens/spacing";
import typography from "./tokens/typography";
import borders from "./tokens/borders";
import shadows from "./tokens/shadows";
```

## 📁 Project Structure

```
ui-refresh-library/
├── src/
│   ├── tokens/
│   │   ├── colors.js       # Color tokens (3 tiers)
│   │   ├── spacing.js      # Spacing scale
│   │   ├── typography.js   # Fonts & text styles
│   │   ├── borders.js      # Radius & widths
│   │   ├── shadows.js      # Drop shadows
│   │   ├── layout.js       # Container widths
│   │   └── index.js        # Main export
│   ├── components/
│   │   └── Button/
│   │       ├── Button.jsx
│   │       └── index.js
│   ├── theme/
│   │   └── theme.js        # MUI theme config
│   ├── Demo.jsx            # Component showcase
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## 🎯 Next Steps

### Planned Components

1. ✅ Button (Complete)
2. ✅ SendButton (Complete)
3. ✅ StopButton (Complete)
4. ✅ SideNavButton (Complete)
5. ✅ IconButton (Complete)
6. ✅ ButtonGroup (Complete)
7. ✅ ButtonIconGroup (Complete)
8. ✅ ButtonEmbeddedIcon (Complete)
9. ✅ ButtonFooter (Complete)
10. ✅ ButtonInline (Complete)
11. ✅ Anchor (Complete)
12. ✅ AnchorCTA (Complete)
13. ✅ BadgeStatus (Complete)
14. Cards (Document Card, Action Card)
15. Form Fields (TextField, Select, Checkbox, Radio)
16. Navigation (Tabs, Breadcrumbs)
17. Data Display (Badges, Chips)
18. Accordion
19. Date Picker
20. Search Bar

## 🔧 Development Workflow

1. Extract component specs from Figma
2. Create component using tokens
3. Test all states in Demo.jsx
4. Document usage in README
5. Commit to GitHub

## 📚 Resources

- **Figma Design System**: [CoCounsel 3.0 Tokens](https://www.figma.com/design/DZtDuiD25zNUJbRpMSCS2J/)
- **Token Documentation**: See `src/tokens/` for detailed token definitions
- **MUI Documentation**: [Material-UI](https://mui.com/)

## 🤝 Contributing

This is a living design system. As new components are added:

1. They must use tokens from the token system
2. All states must be implemented
3. Components must match Figma designs exactly
4. New tokens should be added to appropriate token files

---

Built with ❤️ for CoCounsel 3.0
