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
2. Send Button
3. Stop Button
4. Side Nav Button
5. Icon Button
6. Button Group
7. Button Icon Group
8. Button Embedded Icon
9. Button Footer
10. Button Inline
11. Cards (Document Card, Action Card)
12. Form Fields (TextField, Select, Checkbox, Radio)
13. Navigation (Tabs, Breadcrumbs)
14. Data Display (Badges, Chips)
15. Accordion
16. Date Picker
17. Search Bar

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
