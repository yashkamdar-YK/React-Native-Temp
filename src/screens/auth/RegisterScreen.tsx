import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../styles/typography/colors';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Heading from '../../components/ui/heading';
import Button from '../../components/ui/button';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      // Show error message
      return;
    }

    if (password !== confirmPassword) {
      // Show password mismatch error
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Navigate back to Login
      // @ts-ignore - Navigation type issue
      navigation.navigate('Login');
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    // @ts-ignore - Navigation type issue
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Heading size="3xl" weight="BOLD" center>
              Create Account
            </Heading>
            <Heading 
              size="base" 
              weight="REGULAR" 
              color={COLORS.gray[600]} 
              center
              style={styles.subtitle}
            >
              Sign up to get started
            </Heading>
          </View>
          
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Heading size="sm" weight="MEDIUM" style={styles.inputLabel}>
                Full Name
              </Heading>
              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                value={name}
                onChangeText={setName}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Heading size="sm" weight="MEDIUM" style={styles.inputLabel}>
                Email
              </Heading>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Heading size="sm" weight="MEDIUM" style={styles.inputLabel}>
                Password
              </Heading>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Heading size="sm" weight="MEDIUM" style={styles.inputLabel}>
                Confirm Password
              </Heading>
              <TextInput
                style={styles.input}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>
            
            <Button 
              title="Sign Up" 
              onPress={handleRegister} 
              variant="primary"
              size="large"
              loading={isLoading}
              style={styles.registerButton}
            />
            
            <View style={styles.loginContainer}>
              <Heading size="base" weight="REGULAR" color={COLORS.gray[600]}>
                Already have an account?
              </Heading>
              <TouchableOpacity onPress={handleLogin}>
                <Heading size="base" weight="SEMI_BOLD" color={COLORS.blue[500]}>
                  Sign In
                </Heading>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(5),
  },
  headerContainer: {
    marginBottom: responsiveHeight(5),
  },
  subtitle: {
    marginTop: responsiveHeight(1),
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: responsiveHeight(3),
  },
  inputLabel: {
    marginBottom: responsiveHeight(1),
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray[300],
    borderRadius: 8,
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
    fontSize: 16,
  },
  registerButton: {
    marginTop: responsiveHeight(3),
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(4),
    gap: responsiveWidth(2),
  },
});

export default RegisterScreen; 