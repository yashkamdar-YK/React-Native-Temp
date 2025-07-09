# Button Component

A flexible and customizable button component with multiple variants, sizes, and states.

## Import

```tsx
import { Button } from '../components/ui/button';
// or import specific types
import { Button, ButtonVariant, ButtonSize } from '../components/ui/button';
```

## Basic Usage

```tsx
<Button 
  onPress={() => console.log('Pressed!')}
  title="Click Me"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onPress` | `() => void` | **Required** | Function called when button is pressed |
| `title` | `string` | `undefined` | Button text content |
| `variant` | `ButtonVariant` | `'default'` | Visual style variant |
| `size` | `ButtonSize` | `'md'` | Size variant |
| `disabled` | `boolean` | `false` | Whether button is disabled |
| `loading` | `boolean` | `false` | Whether to show loading spinner |
| `style` | `ViewStyle` | `undefined` | Additional container styles |
| `textStyle` | `TextStyle` | `undefined` | Additional text styles |
| `children` | `React.ReactNode` | `undefined` | Custom content instead of title |
| `disableAnimation` | `boolean` | `false` | Whether to disable scale animation |

## Variants

### `default` (Primary)
The main call-to-action button with primary brand color.

```tsx
<Button variant="default" title="Primary Action" onPress={handlePress} />
```

### `destructive`
For dangerous actions like delete or remove operations.

```tsx
<Button variant="destructive" title="Delete" onPress={handleDelete} />
```

### `outline`
Secondary button with transparent background and border.

```tsx
<Button variant="outline" title="Cancel" onPress={handleCancel} />
```

### `secondary`
Alternative secondary button with muted background.

```tsx
<Button variant="secondary" title="Secondary" onPress={handleSecondary} />
```

### `ghost`
Minimal button with no background or border.

```tsx
<Button variant="ghost" title="Subtle Action" onPress={handleAction} />
```

### `link`
Text-only button that looks like a link.

```tsx
<Button variant="link" title="Learn More" onPress={handleLearnMore} />
```

## Sizes

### `sm` (Small)
Compact button for tight spaces or secondary actions.

```tsx
<Button size="sm" title="Small" onPress={handlePress} />
```

### `md` (Medium) - Default
Standard button size for most use cases.

```tsx
<Button size="md" title="Medium" onPress={handlePress} />
```

### `lg` (Large)
Larger button for primary actions or better accessibility.

```tsx
<Button size="lg" title="Large" onPress={handlePress} />
```

### `icon`
Square button designed for icons only.

```tsx
<Button size="icon" onPress={handlePress}>
  <Icon name="heart" size={20} />
</Button>
```

## States

### Loading State
Shows a spinner and optionally keeps the title visible.

```tsx
<Button 
  loading={isSubmitting}
  title="Submit Form"
  onPress={handleSubmit}
/>
```

### Disabled State
Prevents interaction and reduces opacity.

```tsx
<Button 
  disabled={!isFormValid}
  title="Submit"
  onPress={handleSubmit}
/>
```

## Advanced Examples

### Custom Content with Icons
```tsx
<Button variant="outline" onPress={handleShare}>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Icon name="share" size={16} style={{ marginRight: 8 }} />
    <Text>Share</Text>
  </View>
</Button>
```

### Loading with Custom Text
```tsx
<Button 
  variant="default"
  loading={isLoading}
  title={isLoading ? "Submitting..." : "Submit"}
  onPress={handleSubmit}
/>
```

### Icon-Only Button
```tsx
<Button 
  variant="ghost" 
  size="icon"
  onPress={handleFavorite}
>
  <Icon 
    name={isFavorited ? "heart-filled" : "heart"} 
    size={20} 
    color={isFavorited ? "#ff4444" : "#666666"}
  />
</Button>
```

### Button with Custom Styling
```tsx
<Button 
  variant="default"
  title="Custom Style"
  onPress={handlePress}
  style={{ 
    marginTop: 20,
    borderRadius: 25 
  }}
  textStyle={{ 
    fontWeight: 'bold',
    letterSpacing: 1 
  }}
/>
```

## Accessibility

The Button component includes built-in accessibility features:

- Automatic `accessibilityRole="button"`
- Touch feedback with scale animation
- Proper contrast ratios for all variants
- Support for screen readers

### Adding Accessibility Labels
```tsx
<Button 
  title="Delete Item"
  variant="destructive"
  onPress={handleDelete}
  accessibilityLabel="Delete this item permanently"
  accessibilityHint="This action cannot be undone"
/>
```

## Styling Guidelines

### Do's ✅
- Use semantic variants (`destructive` for delete actions)
- Stick to the provided size variants for consistency
- Use `loading` state for async operations
- Provide clear, action-oriented button text

### Don'ts ❌
- Don't override core variant styles with custom styles
- Don't use multiple primary buttons in the same view
- Don't make buttons too small for comfortable tapping
- Don't use destructive variant for non-destructive actions

## Common Patterns

### Form Buttons
```tsx
<View style={{ flexDirection: 'row', gap: 12 }}>
  <Button 
    variant="outline" 
    title="Cancel" 
    onPress={handleCancel}
    style={{ flex: 1 }}
  />
  <Button 
    variant="default" 
    title="Save" 
    onPress={handleSave}
    loading={isSaving}
    style={{ flex: 1 }}
  />
</View>
```

### Action Menu
```tsx
<View style={{ gap: 8 }}>
  <Button variant="ghost" title="Edit" onPress={handleEdit} />
  <Button variant="ghost" title="Share" onPress={handleShare} />
  <Button variant="destructive" title="Delete" onPress={handleDelete} />
</View>
```

### Call-to-Action Section
```tsx
<View style={{ alignItems: 'center', padding: 24 }}>
  <Button 
    variant="default" 
    size="lg"
    title="Get Started"
    onPress={handleGetStarted}
    style={{ minWidth: 200 }}
  />
  <Button 
    variant="link" 
    title="Learn more about our features"
    onPress={handleLearnMore}
    style={{ marginTop: 12 }}
  />
</View>
```

## Theme Integration

The Button component automatically adapts to your app's theme:

- Colors change between light and dark modes
- Typography scales with the theme's font sizes
- Spacing follows the theme's spacing scale
- Border radius uses theme values

## Performance Notes

- Variants are pre-computed for optimal performance
- Scale animations use native driver when possible
- Loading spinners are optimized for smooth animation
- Disabled state uses opacity for better performance than color changes

## Migration from Standard TouchableOpacity

```tsx
// Before
<TouchableOpacity onPress={handlePress} style={styles.button}>
  <Text style={styles.buttonText}>Click Me</Text>
</TouchableOpacity>

// After
<Button 
  onPress={handlePress}
  title="Click Me"
  variant="default"
/>
```
