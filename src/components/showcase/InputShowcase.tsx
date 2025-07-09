import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import Input from '../ui/input';
import Typography from '../ui/typography';

const InputShowcase = () => {
  const { theme } = useTheme();
  
  // State for different inputs
  const [basicValue, setBasicValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [errorValue, setErrorValue] = useState('invalid@');
  const [phoneValue, setPhoneValue] = useState('');
  const [amountValue, setAmountValue] = useState('');

  return (
    <View style={styles.container}>
      {/* Input Variants */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Input Variants
        </Typography>
        
        <View style={styles.inputColumn}>
          <Input
            placeholder="Default variant"
            variant="default"
            value={basicValue}
            onChangeText={setBasicValue}
            helperText="This is the default input style"
          />
          
          <Input
            placeholder="Filled variant"
            variant="filled"
            value={basicValue}
            onChangeText={setBasicValue}
            helperText="Filled background style"
          />
          
          <Input
            placeholder="Outlined variant"
            variant="outlined"
            value={basicValue}
            onChangeText={setBasicValue}
            helperText="Outlined border style"
          />
          
          <Input
            placeholder="Ghost variant"
            variant="ghost"
            value={basicValue}
            onChangeText={setBasicValue}
            helperText="Minimal ghost style"
          />
        </View>
      </View>

      {/* Input Sizes */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Input Sizes
        </Typography>
        
        <View style={styles.inputColumn}>
          <Input
            placeholder="Small input"
            size="sm"
            variant="outlined"
            value={basicValue}
            onChangeText={setBasicValue}
          />
          
          <Input
            placeholder="Medium input (default)"
            size="md"
            variant="outlined"
            value={basicValue}
            onChangeText={setBasicValue}
          />
          
          <Input
            placeholder="Large input"
            size="lg"
            variant="outlined"
            value={basicValue}
            onChangeText={setBasicValue}
          />
        </View>
      </View>

      {/* Functional Examples */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Functional Examples
        </Typography>
        
        <View style={styles.inputColumn}>
          <Input
            placeholder="Email address"
            variant="filled"
            size="md"
            keyboardType="email-address"
            autoCapitalize="none"
            value={emailValue}
            onChangeText={setEmailValue}
            clearable
            helperText="Enter your email address"
            leftComponent={
              <Text style={[styles.iconText, { color: theme.colors.mutedForeground }]}>📧</Text>
            }
          />
          
          <Input
            placeholder="Password"
            variant="outlined"
            size="md"
            secureTextEntry
            value={passwordValue}
            onChangeText={setPasswordValue}
            helperText="Password must be at least 8 characters"
            leftComponent={
              <Text style={[styles.iconText, { color: theme.colors.mutedForeground }]}>🔒</Text>
            }
          />
          
          <Input
            placeholder="Search..."
            variant="ghost"
            size="lg"
            value={searchValue}
            onChangeText={setSearchValue}
            clearable
            leftComponent={
              <Text style={[styles.iconText, { color: theme.colors.mutedForeground }]}>🔍</Text>
            }
          />
        </View>
      </View>

      {/* Input States */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Input States
        </Typography>
        
        <View style={styles.inputColumn}>
          <Input
            placeholder="Disabled input"
            variant="default"
            disabled
            value="This is disabled"
            helperText="This input is disabled"
          />
          
          <Input
            placeholder="Input with error"
            variant="outlined"
            value={errorValue}
            onChangeText={setErrorValue}
            error="Please enter a valid email address"
          />
          
          <Input
            placeholder="Success state"
            variant="filled"
            value="valid@example.com"
            helperText="This looks good!"
            rightComponent={
              <Text style={[styles.iconText, { color: theme.colors.success }]}>✓</Text>
            }
          />
        </View>
      </View>

      {/* Advanced Examples */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Advanced Examples
        </Typography>
        
        <View style={styles.inputColumn}>
          <Input
            placeholder="Amount"
            variant="outlined"
            keyboardType="numeric"
            value={amountValue}
            onChangeText={setAmountValue}
            leftComponent={
              <Text style={[styles.iconText, { color: theme.colors.mutedForeground }]}>$</Text>
            }
            rightComponent={
              <Text style={[styles.iconText, { color: theme.colors.mutedForeground }]}>USD</Text>
            }
            helperText="Enter amount in USD"
          />
          
          <Input
            placeholder="Phone number"
            variant="filled"
            size="lg"
            keyboardType="phone-pad"
            value={phoneValue}
            onChangeText={setPhoneValue}
            leftComponent={
              <Text style={[styles.iconText, { color: theme.colors.mutedForeground }]}>📱</Text>
            }
            clearable
            helperText="+1 (555) 123-4567"
          />
          
          <Input
            placeholder="Website URL"
            variant="default"
            autoCapitalize="none"
            keyboardType="url"
            leftComponent={
              <Text style={[styles.iconText, { color: theme.colors.mutedForeground }]}>🌐</Text>
            }
            rightComponent={
              <Text style={[styles.iconText, { color: theme.colors.primary }]}>↗</Text>
            }
            helperText="https://example.com"
          />
        </View>
      </View>

      {/* Special Cases */}
      <View style={styles.section}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Special Cases
        </Typography>
        
        <View style={styles.inputColumn}>
          <Input
            placeholder="Multiline text (if supported)"
            variant="outlined"
            multiline
            numberOfLines={3}
            textAlignVertical="top"
            helperText="Multiline input for longer text"
          />
          
          <Input
            placeholder="No helper text"
            variant="default"
          />
          
          <Input
            placeholder="Custom styling"
            variant="outlined"
            containerStyle={{
              borderColor: theme.colors.warning,
              borderWidth: 2,
            }}
            helperText="Input with custom container styling"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    // marginBottom handled by theme spacing
  },
  inputColumn: {
    gap: 16,
  },
  iconText: {
    fontSize: 16,
  },
});

export default InputShowcase;