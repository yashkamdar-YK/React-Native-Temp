# Input Component

A customizable text input component with multiple variants, sizes, and built-in state management.

## Import

```tsx
import { Input } from '../components/ui/input';
// or import specific types
import { Input, InputVariant, InputSize } from '../components/ui/input';
```

## Basic Usage

```tsx
<Input 
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `InputVariant` | `'default'` | Visual style variant |
| `size` | `InputSize` | `'md'` | Size variant |
| `error` | `boolean` | `false` | Whether input has validation error |
| `disabled` | `boolean` | `false` | Whether input is disabled |
| `style` | `ViewStyle` | `undefined` | Additional container styles |
| `inputStyle` | `TextStyle` | `undefined` | Additional input text styles |
| All standard `TextInput` props | - | - | Supports all React Native TextInput props |

## Variants

### `default`
Standard input with subtle border and background.

```tsx
<Input 
  variant="default"
  placeholder="Default input"
  value={value}
  onChangeText={setValue}
/>
```

### `filled`
Input with more prominent background fill.

```tsx
<Input 
  variant="filled"
  placeholder="Filled input"
  value={value}
  onChangeText={setValue}
/>
```

### `outline`
Input with prominent border and transparent background.

```tsx
<Input 
  variant="outline"
  placeholder="Outlined input"
  value={value}
  onChangeText={setValue}
/>
```

## Sizes

### `sm` (Small)
Compact input for tight spaces or secondary forms.

```tsx
<Input 
  size="sm"
  placeholder="Small input"
  value={value}
  onChangeText={setValue}
/>
```

### `md` (Medium) - Default
Standard input size for most use cases.

```tsx
<Input 
  size="md"
  placeholder="Medium input"
  value={value}
  onChangeText={setValue}
/>
```

### `lg` (Large)
Larger input for better accessibility or primary forms.

```tsx
<Input 
  size="lg"
  placeholder="Large input"
  value={value}
  onChangeText={setValue}
/>
```

## States

### Error State
Highlights validation errors with red border and background.

```tsx
<Input 
  placeholder="Email address"
  value={email}
  onChangeText={setEmail}
  error={!isValidEmail(email)}
/>
```

### Disabled State
Prevents interaction and reduces opacity.

```tsx
<Input 
  placeholder="Disabled input"
  value={readOnlyValue}
  disabled={true}
/>
```

## Input Types

### Email Input
```tsx
<Input 
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  autoCapitalize="none"
  autoComplete="email"
/>
```

### Password Input
```tsx
<Input 
  placeholder="Enter your password"
  value={password}
  onChangeText={setPassword}
  secureTextEntry={!showPassword}
  autoComplete="password"
/>
```

### Numeric Input
```tsx
<Input 
  placeholder="Enter amount"
  value={amount}
  onChangeText={setAmount}
  keyboardType="numeric"
/>
```

### Phone Number Input
```tsx
<Input 
  placeholder="Phone number"
  value={phone}
  onChangeText={setPhone}
  keyboardType="phone-pad"
  autoComplete="tel"
/>
```

### Search Input
```tsx
<Input 
  placeholder="Search..."
  value={searchQuery}
  onChangeText={setSearchQuery}
  returnKeyType="search"
  clearButtonMode="while-editing"
/>
```

## Advanced Examples

### Form Input with Label and Error
```tsx
<View style={{ marginBottom: 16 }}>
  <Text style={styles.label}>Email Address</Text>
  <Input 
    placeholder="Enter your email"
    value={email}
    onChangeText={setEmail}
    error={!!emailError}
    keyboardType="email-address"
    autoCapitalize="none"
  />
  {emailError && (
    <Text style={styles.errorText}>{emailError}</Text>
  )}
</View>
```

### Input with Custom Styling
```tsx
<Input 
  placeholder="Custom styled input"
  value={value}
  onChangeText={setValue}
  style={{ 
    marginTop: 20,
    borderRadius: 25 
  }}
  inputStyle={{ 
    fontSize: 18,
    fontWeight: '500' 
  }}
/>
```

### Multi-line Text Input
```tsx
<Input 
  placeholder="Enter your message..."
  value={message}
  onChangeText={setMessage}
  multiline={true}
  numberOfLines={4}
  textAlignVertical="top"
  style={{ minHeight: 100 }}
/>
```

### Input with Custom Validation
```tsx
const [value, setValue] = useState('');
const [isValid, setIsValid] = useState(true);

const handleChange = (text: string) => {
  setValue(text);
  setIsValid(text.length >= 3);
};

return (
  <Input 
    placeholder="Minimum 3 characters"
    value={value}
    onChangeText={handleChange}
    error={!isValid && value.length > 0}
  />
);
```

## Input Patterns

### Login Form
```tsx
<View style={{ gap: 16 }}>
  <Input 
    placeholder="Email"
    value={email}
    onChangeText={setEmail}
    keyboardType="email-address"
    autoCapitalize="none"
    error={!!errors.email}
  />
  <Input 
    placeholder="Password"
    value={password}
    onChangeText={setPassword}
    secureTextEntry={true}
    error={!!errors.password}
  />
</View>
```

### Search Bar
```tsx
<Input 
  variant="filled"
  placeholder="Search products..."
  value={searchQuery}
  onChangeText={setSearchQuery}
  returnKeyType="search"
  onSubmitEditing={handleSearch}
  clearButtonMode="while-editing"
/>
```

### Settings Form
```tsx
<View style={{ gap: 12 }}>
  <Input 
    size="sm"
    placeholder="Display Name"
    value={displayName}
    onChangeText={setDisplayName}
  />
  <Input 
    size="sm"
    placeholder="Bio"
    value={bio}
    onChangeText={setBio}
    multiline={true}
    numberOfLines={2}
  />
</View>
```

### Contact Form
```tsx
<View style={{ gap: 16 }}>
  <Input 
    size="lg"
    variant="outline"
    placeholder="Full Name"
    value={name}
    onChangeText={setName}
    autoComplete="name"
  />
  <Input 
    size="lg"
    variant="outline"
    placeholder="Email Address"
    value={email}
    onChangeText={setEmail}
    keyboardType="email-address"
    autoComplete="email"
  />
  <Input 
    size="lg"
    variant="outline"
    placeholder="Phone Number"
    value={phone}
    onChangeText={setPhone}
    keyboardType="phone-pad"
    autoComplete="tel"
  />
</View>
```

## Accessibility

The Input component includes accessibility features:

- Automatic `accessibilityRole="text"`
- Support for screen readers
- Proper contrast ratios for all variants
- Focus indicators

### Adding Accessibility Labels
```tsx
<Input 
  placeholder="Email address"
  value={email}
  onChangeText={setEmail}
  accessibilityLabel="Email address input"
  accessibilityHint="Enter your email to sign in"
/>
```

## Validation Patterns

### Email Validation
```tsx
const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

<Input 
  placeholder="Email"
  value={email}
  onChangeText={setEmail}
  error={email.length > 0 && !isValidEmail(email)}
  keyboardType="email-address"
/>
```

### Password Strength
```tsx
const getPasswordStrength = (password: string) => {
  if (password.length < 6) return 'weak';
  if (password.length < 10) return 'medium';
  return 'strong';
};

<Input 
  placeholder="Password"
  value={password}
  onChangeText={setPassword}
  secureTextEntry={true}
  error={password.length > 0 && getPasswordStrength(password) === 'weak'}
/>
```

### Real-time Validation
```tsx
const [username, setUsername] = useState('');
const [isChecking, setIsChecking] = useState(false);
const [isAvailable, setIsAvailable] = useState(true);

const checkUsername = useCallback(
  debounce(async (value: string) => {
    if (value.length < 3) return;
    setIsChecking(true);
    const available = await checkUsernameAvailability(value);
    setIsAvailable(available);
    setIsChecking(false);
  }, 500),
  []
);

useEffect(() => {
  checkUsername(username);
}, [username, checkUsername]);

return (
  <Input 
    placeholder="Username"
    value={username}
    onChangeText={setUsername}
    error={username.length > 0 && !isAvailable}
  />
);
```

## Styling Guidelines

### Do's ✅
- Use semantic variants for different contexts
- Provide clear, descriptive placeholders
- Use appropriate keyboard types for input content
- Handle error states with visual feedback

### Don'ts ❌
- Don't override variant styles with conflicting custom styles
- Don't use inputs without proper labels or placeholders
- Don't make inputs too small for comfortable typing
- Don't ignore accessibility considerations

## Performance Notes

- Variants are pre-computed for optimal performance
- Uses React Native's optimized TextInput component
- Supports controlled and uncontrolled input patterns
- Error states use efficient style switching

## Theme Integration

The Input component automatically adapts to your app's theme:

- Colors change between light and dark modes
- Typography follows theme font sizes
- Spacing uses theme spacing scale
- Border radius follows theme values

## Migration from Standard TextInput

```tsx
// Before
<TextInput 
  placeholder="Enter text"
  value={value}
  onChangeText={setValue}
  style={styles.input}
/>

// After
<Input 
  placeholder="Enter text"
  value={value}
  onChangeText={setValue}
  variant="default"
/>
```
