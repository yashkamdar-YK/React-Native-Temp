# Alert Component

The Alert component provides contextual feedback messages for user actions. It supports multiple variants and sizes to match different use cases.

## Import

```tsx
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '../components/ui';
// or
import Alert, { AlertIcon, AlertTitle, AlertDescription } from '../components/ui/alert';
```

## Basic Usage

### Simple Alert

```tsx
<Alert 
  variant="success" 
  title="Success!" 
  description="Your changes have been saved successfully." 
/>
```

### Alert with Custom Icon

```tsx
<Alert 
  variant="warning" 
  title="Warning"
  description="This action cannot be undone."
  icon={<CustomWarningIcon />}
/>
```

### Alert without Icon

```tsx
<Alert 
  variant="info" 
  title="Information"
  description="This is some important information."
  showIcon={false}
/>
```

### Custom Content

```tsx
<Alert variant="default">
  <AlertTitle>Custom Title</AlertTitle>
  <AlertDescription>
    This is a custom alert with multiple lines of content.
    You can include any React components here.
  </AlertDescription>
</Alert>
```

## Variants

### Default
```tsx
<Alert variant="default" title="Default Alert" description="This is a default alert." />
```

### Success
```tsx
<Alert variant="success" title="Success!" description="Operation completed successfully." />
```

### Destructive/Error
```tsx
<Alert variant="destructive" title="Error" description="Something went wrong." />
```

### Warning
```tsx
<Alert variant="warning" title="Warning" description="Please review before continuing." />
```

### Info
```tsx
<Alert variant="info" title="Information" description="Here's some useful information." />
```

### Outline
```tsx
<Alert variant="outline" title="Outline Alert" description="This alert has an outline style." />
```

### Ghost
```tsx
<Alert variant="ghost" title="Ghost Alert" description="This alert has minimal styling." />
```

## Sizes

### Small
```tsx
<Alert size="sm" variant="success" title="Small Alert" description="This is a small alert." />
```

### Medium (Default)
```tsx
<Alert size="md" variant="info" title="Medium Alert" description="This is a medium alert." />
```

### Large
```tsx
<Alert size="lg" variant="warning" title="Large Alert" description="This is a large alert." />
```

## Animation

By default, alerts animate in with a fade and slide effect. You can disable this:

```tsx
<Alert 
  variant="success" 
  title="No Animation" 
  description="This alert appears without animation."
  animated={false}
/>
```

## Props

### Alert Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive' \| 'success' \| 'warning' \| 'info' \| 'outline' \| 'ghost'` | `'default'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the alert |
| `title` | `string` | - | Alert title text |
| `description` | `string` | - | Alert description text |
| `icon` | `React.ReactNode` | - | Custom icon component |
| `showIcon` | `boolean` | `true` | Whether to show default icon |
| `style` | `StyleProp<ViewStyle>` | - | Custom container styles |
| `children` | `React.ReactNode` | - | Custom content |
| `animated` | `boolean` | `true` | Whether to animate entrance |
| `accessibilityLabel` | `string` | - | Accessibility label |

### AlertIcon Props

| Prop | Type | Description |
|------|------|-------------|
| `variant` | `AlertVariant` | Alert variant for styling |
| `size` | `AlertSize` | Alert size for icon sizing |
| `color` | `string` | Icon color |
| `iconSize` | `number` | Icon size in pixels |

### AlertTitle Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `React.ReactNode` | Title content |
| `variant` | `AlertVariant` | Alert variant for styling |
| `size` | `AlertSize` | Alert size for text sizing |
| `style` | `StyleProp<TextStyle>` | Custom text styles |

### AlertDescription Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `React.ReactNode` | Description content |
| `variant` | `AlertVariant` | Alert variant for styling |
| `size` | `AlertSize` | Alert size for text sizing |
| `style` | `StyleProp<TextStyle>` | Custom text styles |

## Accessibility

The Alert component includes built-in accessibility features:

- Uses `accessibilityRole="alert"` for screen readers
- Includes `accessibilityLiveRegion="polite"` for dynamic updates
- Supports custom `accessibilityLabel` prop
- Proper text roles for title and description components

## Theming

The Alert component uses your theme's color system:

```tsx
// Theme colors used:
theme.colors.primary        // Default variant accent
theme.colors.destructive    // Destructive variant
theme.colors.card          // Background for solid variants
theme.colors.border        // Border colors
theme.colors.foreground    // Text colors
theme.colors.mutedForeground // Description text
```

Custom colors for success, warning, and info variants:
- Success: `#10b981` (green)
- Warning: `#f59e0b` (amber)
- Info: `#3b82f6` (blue)

## Best Practices

1. **Use appropriate variants**: Choose variants that match the semantic meaning of your message
2. **Keep titles concise**: Use short, descriptive titles
3. **Provide clear descriptions**: Give users enough context to understand the alert
4. **Consider placement**: Position alerts where users expect to see feedback
5. **Don't overuse**: Too many alerts can overwhelm users
6. **Test accessibility**: Ensure alerts work well with screen readers

## Examples

### Form Validation Alert

```tsx
<Alert 
  variant="destructive" 
  title="Validation Error"
  description="Please fill in all required fields before submitting."
/>
```

### Loading State Alert

```tsx
<Alert 
  variant="info" 
  title="Processing"
  description="Please wait while we process your request..."
  icon={<Spinner size="sm" />}
/>
```

### Success Confirmation

```tsx
<Alert 
  variant="success" 
  title="Changes Saved"
  description="Your profile has been updated successfully."
/>
```

### Warning with Action

```tsx
<Alert variant="warning" title="Storage Almost Full">
  <AlertDescription style={{ marginBottom: 12 }}>
    You're using 95% of your storage space. Consider deleting old files.
  </AlertDescription>
  <Button variant="outline" size="sm" title="Manage Storage" onPress={handleManageStorage} />
</Alert>
```

---

# AlertDialog Component

The AlertDialog component provides modal confirmation dialogs for critical user actions.

## Import

```tsx
import { AlertDialog, AlertDialogActions, AlertDialogTitle, AlertDialogDescription } from '../components/ui';
// or
import AlertDialog from '../components/ui/alert-dialog';
```

## Basic Usage

```tsx
const [visible, setVisible] = useState(false);

<AlertDialog
  visible={visible}
  onClose={() => setVisible(false)}
  onConfirm={handleConfirm}
  title="Delete Account"
  description="Are you sure you want to delete your account? This action cannot be undone."
  destructive
/>
```

## Props

### AlertDialog Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `visible` | `boolean` | - | Whether dialog is visible |
| `onClose` | `() => void` | - | Called when dialog should close |
| `onConfirm` | `() => void` | - | Called when confirm button pressed |
| `title` | `string` | - | Dialog title |
| `description` | `string` | - | Dialog description |
| `confirmLabel` | `string` | `'Confirm'` | Confirm button text |
| `cancelLabel` | `string` | `'Cancel'` | Cancel button text |
| `destructive` | `boolean` | `false` | Whether confirm action is destructive |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Dialog size |
| `style` | `StyleProp<ViewStyle>` | - | Custom dialog styles |
| `children` | `React.ReactNode` | - | Custom content |
| `showCancel` | `boolean` | `true` | Whether to show cancel button |
| `showConfirm` | `boolean` | `true` | Whether to show confirm button |
| `closeOnBackdrop` | `boolean` | `true` | Whether to close on backdrop press |
| `loading` | `boolean` | `false` | Loading state for confirm button |
| `accessibilityLabel` | `string` | - | Accessibility label |

## Examples

### Delete Confirmation

```tsx
<AlertDialog
  visible={showDeleteDialog}
  onClose={() => setShowDeleteDialog(false)}
  onConfirm={handleDelete}
  title="Delete File"
  description="Are you sure you want to delete this file? This action cannot be undone."
  confirmLabel="Delete"
  destructive
/>
```

### Custom Actions

```tsx
<AlertDialog
  visible={showCustomDialog}
  onClose={() => setShowCustomDialog(false)}
  title="Custom Dialog"
  showCancel={false}
  showConfirm={false}
>
  <AlertDialogDescription>
    Choose an action to continue:
  </AlertDialogDescription>
  <AlertDialogActions size="md">
    <Button variant="outline" onPress={handleCancel} title="Cancel" />
    <Button variant="secondary" onPress={handleSave} title="Save Draft" />
    <Button variant="default" onPress={handlePublish} title="Publish" />
  </AlertDialogActions>
</AlertDialog>
```
