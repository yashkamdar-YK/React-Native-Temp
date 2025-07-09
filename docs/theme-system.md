# Theme System Guide

A simple guide to using our React Native component library's theme system.

## Quick Start

### 1. Setup Theme Provider

Wrap your app with the theme provider:

```tsx
// App.tsx
import { ThemeProvider } from './src/contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <YourAppContent />
    </ThemeProvider>
  );
}
```

### 2. Use Theme in Components

```tsx
import { useTheme } from '../contexts/ThemeContext';

const MyComponent = () => {
  const { theme } = useTheme();
  
  return (
    <View style={{
      backgroundColor: theme.colors.background,
      padding: theme.spacing[4],
    }}>
      <Text style={{
        color: theme.colors.foreground,
        fontSize: theme.typography.fontSizes.lg,
      }}>
        Hello World!
      </Text>
    </View>
  );
};
```

## What's Available

### 🎨 Colors
Use semantic color names that work in both light and dark themes:
```tsx
theme.colors.primary        // Main brand color
theme.colors.secondary      // Secondary actions
theme.colors.destructive    // Error/delete actions
theme.colors.success        // Success states
theme.colors.warning        // Warning states
theme.colors.background     // Main background
theme.colors.foreground     // Main text color
theme.colors.muted          // Subtle backgrounds
theme.colors.border         // Border colors
```

### 📝 Typography
Ready-to-use font styles:
```tsx
theme.typography.fontSizes.xs      // Extra small text
theme.typography.fontSizes.sm      // Small text
theme.typography.fontSizes.base    // Normal text
theme.typography.fontSizes.lg      // Large text
theme.typography.fontSizes.xl      // Extra large text

theme.typography.fonts.regular     // Normal weight
theme.typography.fonts.medium      // Medium weight
theme.typography.fonts.semiBold    // Semi-bold weight
theme.typography.fonts.bold        // Bold weight
```

### 📏 Spacing
Consistent spacing that scales across devices:
```tsx
theme.spacing[1]    // Small spacing (~4px)
theme.spacing[2]    // Small spacing (~8px)
theme.spacing[4]    // Medium spacing (~16px)
theme.spacing[6]    // Large spacing (~24px)
theme.spacing[8]    // Extra large spacing (~32px)
```

## 🌙 Dark Mode

Toggle between light and dark themes:
```tsx
const { theme, isDark, toggleTheme } = useTheme();

// Toggle themes
toggleTheme();

// Or set manually
setTheme('light');  // Force light
setTheme('dark');   // Force dark  
setTheme('system'); // Follow device
```

## 📱 Components

### Using Our Components

Import and use with variants:

```tsx
import { Button, Input } from '../components/ui';

// Button examples
<Button variant="default" size="md">Primary</Button>
<Button variant="destructive" size="lg">Delete</Button>
<Button variant="outline" size="sm">Cancel</Button>

// Input examples  
<Input variant="default" placeholder="Enter text" />
<Input variant="filled" size="lg" clearable />
<Input variant="outlined" error="Required field" />
```

### Available Variants

**Button**: `default` | `destructive` | `outline` | `secondary` | `ghost` | `link`  
**Input**: `default` | `filled` | `outlined` | `ghost`

**Sizes**: `sm` | `md` | `lg` | `icon` (button only)

## ✨ Features

### ✅ Responsive Design
Everything scales automatically across phones and tablets - no extra work needed!

### ✅ Dark Mode
Components automatically adapt when users switch themes.

### ✅ TypeScript Support  
Get autocomplete and type checking for all theme values.

### ✅ Performance
Pre-built variants mean faster rendering.

## 🎯 Quick Examples

### Simple Card
```tsx
const Card = () => {
  const { theme } = useTheme();
  
  return (
    <View style={{
      backgroundColor: theme.colors.card,
      padding: theme.spacing[4],
      borderRadius: theme.borderRadius.lg,
      ...theme.shadows.md,
    }}>
      <Text style={{
        fontSize: theme.typography.fontSizes.lg,
        fontFamily: theme.typography.fonts.semiBold,
        color: theme.colors.foreground,
      }}>
        Card Title
      </Text>
    </View>
  );
};
```

### Form Example
```tsx
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View>
      <Input
        variant="outlined"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        clearable
      />
      <Input
        variant="outlined"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button variant="default" size="lg">
        Login
      </Button>
    </View>
  );
};
```

## 🚫 Common Mistakes

### ❌ Don't hardcode colors
```tsx
backgroundColor: '#ffffff'  // Bad
backgroundColor: theme.colors.background  // Good
```

### ❌ Don't hardcode spacing
```tsx
padding: 16  // Bad
padding: theme.spacing[4]  // Good
```

### ❌ Don't ignore variants
```tsx
<Button style={{backgroundColor: 'red'}}>  // Bad
<Button variant="destructive">  // Good
```

## 💡 Tips

1. **Start with semantic colors** - Use `primary`, `destructive`, etc. instead of specific color values
2. **Use the spacing scale** - Stick to `theme.spacing[n]` for consistency  
3. **Test both themes** - Switch to dark mode to ensure everything looks good
4. **Leverage variants** - Use component variants instead of custom styles
5. **Check the playground** - See examples of all components and their variants

## 🎨 Color Reference

| Name | Light | Dark | Usage |
|------|-------|------|-------|
| `primary` | Blue | White | Main actions, links |
| `destructive` | Red | Dark Red | Delete, error actions |
| `success` | Green | Dark Green | Success states |
| `warning` | Amber | Dark Amber | Warning states |
| `muted` | Light Gray | Dark Gray | Subtle backgrounds |
| `border` | Gray | Dark Gray | Borders, dividers |

---

Need help? Check out the playground screen or ask the team!
