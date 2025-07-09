# Accordion Component

A collapsible content container that allows users to toggle the visibility of sections. Perfect for FAQs, settings panels, and content organization.

## Basic Usage

```tsx
import { Accordion } from '../components/ui';

function MyComponent() {
  return (
    <Accordion title="What is React Native?">
      <Text>React Native is a framework for building mobile apps using React.</Text>
    </Accordion>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | **Required.** Title text shown in the header |
| `children` | `React.ReactNode` | - | **Required.** Content to show when expanded |
| `variant` | `AccordionVariant` | `'default'` | Visual style variant |
| `size` | `AccordionSize` | `'md'` | Size variant affecting padding and spacing |
| `defaultExpanded` | `boolean` | `false` | Whether accordion starts expanded |
| `disabled` | `boolean` | `false` | Whether accordion is disabled |
| `onToggle` | `(expanded: boolean) => void` | - | Callback when accordion opens/closes |
| `icon` | `React.ReactNode` | - | Custom icon instead of default chevron |
| `hideIcon` | `boolean` | `false` | Hide the expand/collapse icon |
| `animationDuration` | `number` | `300` | Animation duration in milliseconds |
| `disableAnimation` | `boolean` | `false` | Disable open/close animations |
| `containerStyle` | `ViewStyle` | - | Custom container styles |
| `headerStyle` | `ViewStyle` | - | Custom header styles |
| `contentStyle` | `ViewStyle` | - | Custom content styles |

## Variants

### `variant: AccordionVariant`

- **`default`** - Clean card style with subtle border
- **`bordered`** - Enhanced border with muted header background  
- **`separated`** - Card style with shadow and spacing between items
- **`ghost`** - Transparent background with bottom border only

```tsx
<Accordion variant="default" title="Default Style">
  <Text>Standard accordion appearance</Text>
</Accordion>

<Accordion variant="bordered" title="Bordered Style">
  <Text>Enhanced borders and header background</Text>
</Accordion>

<Accordion variant="separated" title="Separated Style">
  <Text>Card style with shadows and spacing</Text>
</Accordion>

<Accordion variant="ghost" title="Ghost Style">
  <Text>Minimal transparent style</Text>
</Accordion>
```

### `size: AccordionSize`

- **`sm`** - Compact spacing, good for dense layouts
- **`md`** - Standard spacing for most use cases
- **`lg`** - Generous spacing for prominent content

```tsx
<Accordion size="sm" title="Small Accordion">
  <Text>Compact version</Text>
</Accordion>

<Accordion size="md" title="Medium Accordion">
  <Text>Standard version</Text>
</Accordion>

<Accordion size="lg" title="Large Accordion">
  <Text>Spacious version</Text>
</Accordion>
```

## Advanced Examples

### Controlled State

```tsx
const [isExpanded, setIsExpanded] = useState(false);

<Accordion 
  title="Controlled Accordion"
  defaultExpanded={isExpanded}
  onToggle={setIsExpanded}
>
  <Text>This accordion's state is controlled externally</Text>
</Accordion>
```

### Custom Icon

```tsx
<Accordion 
  title="Custom Icon"
  icon={<Icon name="plus" size={16} />}
>
  <Text>Uses a plus icon instead of chevron</Text>
</Accordion>
```

### Rich Content

```tsx
<Accordion title="Rich Content Example" size="lg">
  <View style={{ gap: 16 }}>
    <Text style={{ fontWeight: 'bold' }}>Features:</Text>
    <Text>• Smooth animations</Text>
    <Text>• Customizable styling</Text>
    <Text>• Accessible by default</Text>
    
    <Button title="Learn More" onPress={() => {}} />
  </View>
</Accordion>
```

## Accordion Group

Use `AccordionGroup` to manage multiple accordions together:

```tsx
import { AccordionGroup, Accordion } from '../components/ui';

<AccordionGroup 
  allowMultiple={false}  // Only one can be open at a time
  variant="separated"
  size="md"
>
  <Accordion title="Section 1">
    <Text>First section content</Text>
  </Accordion>
  
  <Accordion title="Section 2">
    <Text>Second section content</Text>
  </Accordion>
  
  <Accordion title="Section 3">
    <Text>Third section content</Text>
  </Accordion>
</AccordionGroup>
```

### AccordionGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | **Required.** Accordion components |
| `allowMultiple` | `boolean` | `true` | Allow multiple accordions to be open |
| `variant` | `AccordionVariant` | - | Apply variant to all child accordions |
| `size` | `AccordionSize` | - | Apply size to all child accordions |
| `style` | `ViewStyle` | - | Custom container styles |

## Best Practices

### ✅ Do's

- **Use descriptive titles** - Make it clear what content is inside
- **Keep content scannable** - Use bullet points, short paragraphs
- **Group related accordions** - Use AccordionGroup for related content
- **Consider default state** - Start with most important content expanded
- **Test on devices** - Ensure touch targets are accessible

```tsx
// Good: Clear, descriptive title
<Accordion title="How do I reset my password?">
  <Text>Click the "Forgot Password" link on the login screen...</Text>
</Accordion>
```

### ❌ Don'ts

- **Don't use vague titles** - Avoid "More Info" or "Details"
- **Don't nest accordions deeply** - Can be confusing to navigate
- **Don't put critical actions** - Important buttons shouldn't be hidden
- **Don't override animations unnecessarily** - Smooth defaults work well

```tsx
// Bad: Vague title, nested accordion
<Accordion title="Details">
  <Accordion title="More Details">
    <Text>Hidden content...</Text>
  </Accordion>
</Accordion>
```

## Accessibility

The accordion component includes built-in accessibility features:

- **Keyboard navigation** - Space/Enter to toggle
- **Screen reader support** - Proper labels and state announcements  
- **Focus management** - Clear focus indicators
- **ARIA attributes** - Follows WAI-ARIA accordion pattern

## Theme Integration

The accordion automatically adapts to your theme:

```tsx
// Colors adapt to light/dark mode
const { theme } = useTheme();

// All variants respect theme colors
<Accordion variant="bordered" title="Themed Accordion">
  <Text>Automatically uses theme.colors.border, theme.colors.muted, etc.</Text>
</Accordion>
```

## Common Use Cases

- **FAQ sections** - Collapsible question/answer pairs
- **Settings panels** - Organize configuration options
- **Product details** - Expandable product information
- **Help documentation** - Structured help content
- **Form sections** - Group related form fields

## Performance Tips

- Use `disableAnimation={true}` for long lists with many accordions
- Consider virtualization for 100+ accordion items
- Lazy load heavy content inside accordions
- Keep initial render lightweight

---

**See also:** [Theme System Guide](../theme-system.md) | [Button Component](./button.md) | [Input Component](./input.md)
