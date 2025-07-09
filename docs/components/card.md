# Card Component

A flexible card component that provides a container for grouping related content with multiple variants and interactive capabilities.

## Import

```tsx
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '../components/ui/card';
// or import specific types
import { Card, CardVariant, CardSize } from '../components/ui/card';
```

## Basic Usage

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    <Text>Your card content goes here</Text>
  </CardContent>
</Card>
```

## Props

### Card Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `CardVariant` | `'default'` | Visual style variant |
| `size` | `CardSize` | `'md'` | Size variant |
| `children` | `React.ReactNode` | **Required** | Card content |
| `style` | `ViewStyle` | `undefined` | Additional container styles |
| `pressable` | `boolean` | `false` | Whether the card should be pressable |
| `onPress` | `() => void` | `undefined` | Function to call when pressed |
| `disableAnimation` | `boolean` | `false` | Whether to disable press animation |

### CardHeader, CardContent, CardFooter Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | **Required** | Content |
| `size` | `CardSize` | `'md'` | Size variant |
| `style` | `ViewStyle` | `undefined` | Additional styles |

## Variants

### `variant: CardVariant`

- **`default`** - Standard card with subtle border and shadow
- **`outlined`** - Prominent border with no shadow
- **`elevated`** - Prominent shadow with no border
- **`ghost`** - Transparent with no border or shadow

```tsx
<Card variant="default">
  <CardContent>Default card style</CardContent>
</Card>

<Card variant="outlined">
  <CardContent>Outlined card style</CardContent>
</Card>

<Card variant="elevated">
  <CardContent>Elevated card style</CardContent>
</Card>

<Card variant="ghost">
  <CardContent>Ghost card style</CardContent>
</Card>
```

## Sizes

### `size: CardSize`

- **`sm`** - Compact spacing for dense layouts
- **`md`** - Standard spacing for most use cases
- **`lg`** - Generous spacing for prominent content

```tsx
<Card size="sm">
  <CardContent>Compact card</CardContent>
</Card>

<Card size="md">
  <CardContent>Standard card</CardContent>
</Card>

<Card size="lg">
  <CardContent>Spacious card</CardContent>
</Card>
```

## Card Components

### CardHeader
Container for card title and description, typically at the top.

```tsx
<CardHeader>
  <CardTitle>Title Here</CardTitle>
  <CardDescription>Description text</CardDescription>
</CardHeader>
```

### CardContent
Main content area of the card with proper spacing.

```tsx
<CardContent>
  <Text>Your main content</Text>
  <Button>Action Button</Button>
</CardContent>
```

### CardFooter
Footer area with border separator, typically for actions.

```tsx
<CardFooter>
  <Button variant="outline">Cancel</Button>
  <Button variant="default">Save</Button>
</CardFooter>
```

### CardTitle
Pre-styled title component using Typography.

```tsx
<CardTitle>Card Title</CardTitle>
```

### CardDescription
Pre-styled description component using Typography.

```tsx
<CardDescription>Supporting description text</CardDescription>
```

## Advanced Examples

### Interactive Card
```tsx
<Card 
  variant="outlined" 
  pressable 
  onPress={() => navigation.navigate('Details')}>
  <CardHeader>
    <CardTitle>Product Name</CardTitle>
    <CardDescription>Tap to view details</CardDescription>
  </CardHeader>
  <CardContent>
    <Text>Product information...</Text>
  </CardContent>
</Card>
```

### Form Card
```tsx
<Card variant="default" size="lg">
  <CardHeader>
    <CardTitle>Contact Us</CardTitle>
    <CardDescription>We'd love to hear from you</CardDescription>
  </CardHeader>
  <CardContent>
    <Input placeholder="Name" style={{ marginBottom: 16 }} />
    <Input placeholder="Email" style={{ marginBottom: 16 }} />
    <Input placeholder="Message" multiline numberOfLines={4} />
  </CardContent>
  <CardFooter>
    <Button variant="outline" onPress={handleCancel}>Cancel</Button>
    <Button variant="default" onPress={handleSubmit}>Send</Button>
  </CardFooter>
</Card>
```

### Simple Card
```tsx
<Card variant="elevated">
  <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
    Custom Layout
  </Text>
  <Text>
    You don't always need to use the structured components.
    Sometimes a simple container is all you need.
  </Text>
</Card>
```

### Statistics Card
```tsx
<Card variant="default" size="md">
  <CardHeader>
    <CardTitle>Analytics Overview</CardTitle>
  </CardHeader>
  <CardContent>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#3b82f6' }}>
          1,234
        </Text>
        <Text style={{ color: '#6b7280' }}>Users</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#10b981' }}>
          89%
        </Text>
        <Text style={{ color: '#6b7280' }}>Success</Text>
      </View>
    </View>
  </CardContent>
  <CardFooter>
    <Text style={{ color: '#6b7280', fontSize: 12 }}>
      Updated 5 minutes ago
    </Text>
    <Button variant="ghost" size="sm" onPress={refresh}>
      Refresh
    </Button>
  </CardFooter>
</Card>
```

## Accessibility

The Card component includes built-in accessibility features:

- **Touch feedback** - Visual response when pressable
- **Screen reader support** - Proper content structure
- **Focus management** - Clear visual hierarchy
- **Keyboard navigation** - When used with pressable actions

## Best Practices

### ✅ Do's

- **Use semantic structure** - Header for titles, Content for main info, Footer for actions
- **Keep content scannable** - Use clear titles and concise descriptions
- **Group related cards** - Use consistent variants and sizes
- **Consider touch targets** - Ensure pressable cards are large enough
- **Use appropriate variants** - Match the visual weight to content importance

```tsx
// Good: Clear structure and appropriate variant
<Card variant="elevated" size="md">
  <CardHeader>
    <CardTitle>Important Announcement</CardTitle>
    <CardDescription>Please read this important update</CardDescription>
  </CardHeader>
  <CardContent>
    <Text>Detailed announcement content...</Text>
  </CardContent>
  <CardFooter>
    <Button variant="default" onPress={acknowledge}>
      Got it
    </Button>
  </CardFooter>
</Card>
```

### ❌ Don'ts

- **Don't overcomplicate** - Not every card needs header/content/footer
- **Don't mix variants randomly** - Maintain consistency in related cards
- **Don't make cards too dense** - Allow proper breathing room
- **Don't ignore visual hierarchy** - Use sizes and variants purposefully

```tsx
// Avoid: Inconsistent variants and overcomplicated structure
<Card variant="ghost">
  <CardHeader>
    <CardTitle>Minor Detail</CardTitle> {/* Ghost variant suggests low importance */}
  </CardHeader>
  <CardContent>
    <CardHeader> {/* Nested headers are confusing */}
      <CardTitle>Sub-detail</CardTitle>
    </CardHeader>
  </CardContent>
</Card>
```

## Theme Integration

Cards automatically adapt to your theme:

- Colors change between light and dark modes
- Shadows and borders use theme values
- Spacing follows the theme spacing scale
- Typography inherits theme styles

## Common Use Cases

- **Product listings** - Showcase items with images, titles, and actions
- **Form containers** - Group related form fields with clear structure
- **Information displays** - Present data with proper visual hierarchy
- **Navigation items** - Create tappable content blocks
- **Dashboard widgets** - Display metrics and quick actions

## Performance Notes

- Variants are pre-computed for optimal performance
- Pressable cards use optimized touch handling
- Supports both simple and complex content structures
- Efficient shadow rendering with platform optimizations