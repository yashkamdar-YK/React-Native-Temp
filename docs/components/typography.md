# Typography Component

A flexible typography component with semantic variants, responsive sizing, and theme integration.

## Import

```tsx
import { Typography } from '../components/ui/typography';
// or import specific types
import { Typography, TypographyVariant } from '../components/ui/typography';
```

## Basic Usage

```tsx
<Typography variant="h1">
  Welcome to Our App
</Typography>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `TypographyVariant` | `'body'` | Semantic text variant |
| `children` | `React.ReactNode` | **Required** | Text content to display |
| `style` | `TextStyle` | `undefined` | Additional text styles |
| `color` | `string` | `undefined` | Custom text color |
| `align` | `'left' \| 'center' \| 'right' \| 'justify'` | `'left'` | Text alignment |
| `numberOfLines` | `number` | `undefined` | Maximum number of lines |
| All standard `Text` props | - | - | Supports all React Native Text props |

## Variants

### Headings

#### `h1` - Main Page Title
Large, bold heading for page titles and main sections.

```tsx
<Typography variant="h1">
  Page Title
</Typography>
```

#### `h2` - Section Title
Medium heading for major sections within a page.

```tsx
<Typography variant="h2">
  Section Title
</Typography>
```

#### `h3` - Subsection Title
Smaller heading for subsections and components.

```tsx
<Typography variant="h3">
  Subsection Title
</Typography>
```

#### `h4` - Minor Heading
Small heading for minor sections and labels.

```tsx
<Typography variant="h4">
  Minor Heading
</Typography>
```

### Body Text

#### `body` - Default Body Text
Standard text for most content, paragraphs, and descriptions.

```tsx
<Typography variant="body">
  This is the default body text used for most content in the application.
</Typography>
```

#### `bodySmall` - Small Body Text
Smaller text for secondary information and captions.

```tsx
<Typography variant="bodySmall">
  Secondary information or captions.
</Typography>
```

#### `bodyLarge` - Large Body Text
Larger body text for emphasis or better readability.

```tsx
<Typography variant="bodyLarge">
  Important body text that needs more emphasis.
</Typography>
```

### Specialized Text

#### `caption` - Caption Text
Small text for image captions, footnotes, and metadata.

```tsx
<Typography variant="caption">
  Photo taken on March 15, 2024
</Typography>
```

#### `label` - Form Labels
Text specifically styled for form labels and input descriptions.

```tsx
<Typography variant="label">
  Email Address
</Typography>
```

#### `overline` - Overline Text
Small, uppercase text for categories and section headers.

```tsx
<Typography variant="overline">
  Featured Article
</Typography>
```

## Text Alignment

```tsx
<Typography variant="h2" align="center">
  Centered Heading
</Typography>

<Typography variant="body" align="right">
  Right-aligned text
</Typography>

<Typography variant="body" align="justify">
  Justified text that spreads evenly across the available width.
</Typography>
```

## Custom Colors

```tsx
<Typography variant="h3" color="#ff6b6b">
  Custom Red Heading
</Typography>

<Typography variant="body" color="rgba(0, 0, 0, 0.6)">
  Subtle gray text
</Typography>
```

## Line Limiting

```tsx
<Typography variant="body" numberOfLines={2}>
  This is a long text that will be truncated after two lines with an ellipsis...
</Typography>
```

## Advanced Examples

### Article Layout
```tsx
<View style={{ padding: 16 }}>
  <Typography variant="overline" style={{ marginBottom: 8 }}>
    Technology
  </Typography>
  
  <Typography variant="h1" style={{ marginBottom: 16 }}>
    The Future of Mobile Development
  </Typography>
  
  <Typography variant="bodySmall" style={{ marginBottom: 24, opacity: 0.7 }}>
    Published on March 15, 2024 by John Doe
  </Typography>
  
  <Typography variant="body" style={{ marginBottom: 16, lineHeight: 24 }}>
    React Native continues to evolve as one of the most popular frameworks 
    for cross-platform mobile development. With its component-based architecture 
    and extensive ecosystem, developers can build high-quality applications 
    that run seamlessly on both iOS and Android.
  </Typography>
  
  <Typography variant="h2" style={{ marginTop: 32, marginBottom: 16 }}>
    Key Benefits
  </Typography>
  
  <Typography variant="body" style={{ lineHeight: 24 }}>
    The framework offers numerous advantages including code reusability, 
    faster development cycles, and access to native platform features.
  </Typography>
</View>
```

### Card Component Text
```tsx
<View style={styles.card}>
  <Typography variant="h3" style={{ marginBottom: 8 }}>
    Product Name
  </Typography>
  
  <Typography variant="body" numberOfLines={3} style={{ marginBottom: 12 }}>
    Detailed product description that might be quite long but will be 
    truncated after three lines to maintain consistent card heights.
  </Typography>
  
  <Typography variant="caption" style={{ opacity: 0.6 }}>
    Last updated: 2 hours ago
  </Typography>
</View>
```

### Form Layout
```tsx
<View style={{ gap: 16 }}>
  <View>
    <Typography variant="label" style={{ marginBottom: 8 }}>
      Full Name
    </Typography>
    <Input placeholder="Enter your name" />
  </View>
  
  <View>
    <Typography variant="label" style={{ marginBottom: 8 }}>
      Email Address
    </Typography>
    <Input placeholder="Enter your email" keyboardType="email-address" />
    <Typography variant="caption" style={{ marginTop: 4, opacity: 0.7 }}>
      We'll never share your email with anyone else.
    </Typography>
  </View>
</View>
```

### Settings Screen
```tsx
<ScrollView style={{ padding: 16 }}>
  <Typography variant="h2" style={{ marginBottom: 24 }}>
    Settings
  </Typography>
  
  <View style={{ marginBottom: 32 }}>
    <Typography variant="h3" style={{ marginBottom: 16 }}>
      Account
    </Typography>
    
    <View style={styles.settingItem}>
      <Typography variant="body">Change Password</Typography>
      <Typography variant="bodySmall" style={{ opacity: 0.6 }}>
        Update your account password
      </Typography>
    </View>
    
    <View style={styles.settingItem}>
      <Typography variant="body">Email Preferences</Typography>
      <Typography variant="bodySmall" style={{ opacity: 0.6 }}>
        Manage notification settings
      </Typography>
    </View>
  </View>
  
  <View>
    <Typography variant="h3" style={{ marginBottom: 16 }}>
      Privacy
    </Typography>
    
    <Typography variant="body" style={{ marginBottom: 8 }}>
      Data Usage
    </Typography>
    <Typography variant="bodySmall" style={{ opacity: 0.7, lineHeight: 20 }}>
      Control how your data is collected and used to improve your experience.
    </Typography>
  </View>
</ScrollView>
```

### Error and Success Messages
```tsx
// Error message
<Typography variant="bodySmall" color="#ef4444" style={{ marginTop: 4 }}>
  Please enter a valid email address.
</Typography>

// Success message
<Typography variant="bodySmall" color="#22c55e" style={{ marginTop: 4 }}>
  Your changes have been saved successfully.
</Typography>

// Warning message
<Typography variant="body" color="#f59e0b" align="center">
  ⚠️ This action cannot be undone.
</Typography>
```

### List Items
```tsx
<FlatList 
  data={items}
  renderItem={({ item }) => (
    <View style={styles.listItem}>
      <Typography variant="body" style={{ fontWeight: '600' }}>
        {item.title}
      </Typography>
      <Typography variant="bodySmall" numberOfLines={2} style={{ marginTop: 4 }}>
        {item.description}
      </Typography>
      <Typography variant="caption" style={{ marginTop: 8, opacity: 0.6 }}>
        {item.timestamp}
      </Typography>
    </View>
  )}
/>
```

## Accessibility

The Typography component includes accessibility features:

- Automatic semantic roles based on variant
- Proper contrast ratios for all text colors
- Respects system font size preferences
- Screen reader friendly

### Adding Accessibility Properties
```tsx
<Typography 
  variant="h1"
  accessibilityRole="header"
  accessibilityLevel={1}
>
  Main Page Title
</Typography>

<Typography 
  variant="body"
  accessibilityLabel="Product description"
  accessibilityHint="Double tap to read full description"
>
  Short product summary...
</Typography>
```

## Responsive Typography

The typography system automatically adapts to different screen sizes:

```tsx
// Typography scales based on screen size and theme settings
<Typography variant="h1">
  This heading adapts to screen size
</Typography>

// You can also override for specific breakpoints
<Typography 
  variant="body" 
  style={{
    fontSize: Platform.select({
      ios: 16,
      android: 14,
    })
  }}
>
  Platform-specific sizing
</Typography>
```

## Common Patterns

### Blog Post Header
```tsx
<View style={{ marginBottom: 24 }}>
  <Typography variant="overline" style={{ color: '#6366f1', marginBottom: 8 }}>
    Tutorial
  </Typography>
  <Typography variant="h1" style={{ marginBottom: 16 }}>
    Getting Started with React Native
  </Typography>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Typography variant="bodySmall" style={{ opacity: 0.7 }}>
      By Sarah Johnson • March 15, 2024 • 5 min read
    </Typography>
  </View>
</View>
```

### Feature List
```tsx
{features.map((feature, index) => (
  <View key={index} style={{ marginBottom: 16 }}>
    <Typography variant="h4" style={{ marginBottom: 4 }}>
      {feature.title}
    </Typography>
    <Typography variant="body" style={{ opacity: 0.8 }}>
      {feature.description}
    </Typography>
  </View>
))}
```

### Price Display
```tsx
<View style={{ alignItems: 'center' }}>
  <Typography variant="h1" style={{ color: '#22c55e' }}>
    $29.99
  </Typography>
  <Typography variant="bodySmall" style={{ opacity: 0.6 }}>
    per month
  </Typography>
</View>
```

## Styling Guidelines

### Do's ✅
- Use semantic variants for their intended purpose
- Maintain consistent spacing between text elements
- Use proper hierarchy (h1 → h2 → h3 → h4)
- Consider line height for better readability

### Don'ts ❌
- Don't skip heading levels (h1 → h3)
- Don't use headings for emphasis (use bodyLarge instead)
- Don't override variant font sizes unless necessary
- Don't use too many different text styles in one view

## Theme Integration

Typography automatically uses your theme's:

- Font families and weights
- Color palette (text colors)
- Responsive font scaling
- Line heights and letter spacing

## Performance Notes

- Variants are pre-computed for optimal performance
- Uses React Native's optimized Text component
- Efficient re-rendering with style memoization
- Supports text measurement for layout calculations

## Migration from Standard Text

```tsx
// Before
<Text style={styles.title}>Page Title</Text>
<Text style={styles.body}>Body content</Text>

// After
<Typography variant="h1">Page Title</Typography>
<Typography variant="body">Body content</Typography>
```
