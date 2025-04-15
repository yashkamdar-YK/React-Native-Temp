import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../styles/typography/colors';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Heading from '../../components/ui/heading';
import Button from '../../components/ui/button';
import { ArrowLeft } from 'lucide-react-native';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleResetPassword = async () => {
    if (!email) {
      // Show error message
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Reset password error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToLogin = () => {
    // @ts-ignore - Navigation type issue
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.contentContainer}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBackToLogin}
        >
          <ArrowLeft color={COLORS.gray[600]} size={24} />
        </TouchableOpacity>
        
        <View style={styles.headerContainer}>
          <Heading size="2xl" weight="BOLD" center>
            Forgot Password
          </Heading>
          <Heading 
            size="base" 
            weight="REGULAR" 
            color={COLORS.gray[600]} 
            center
            style={styles.subtitle}
          >
            {isSubmitted 
              ? "We've sent password reset instructions to your email" 
              : "Enter your email to reset your password"}
          </Heading>
        </View>
        
        {!isSubmitted ? (
          <View style={styles.formContainer}>
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
            
            <Button 
              title="Reset Password" 
              onPress={handleResetPassword} 
              variant="primary"
              size="large"
              loading={isLoading}
              style={styles.resetButton}
            />
          </View>
        ) : (
          <View style={styles.successContainer}>
            <Button 
              title="Back to Login" 
              onPress={handleBackToLogin} 
              variant="primary"
              size="large"
              style={styles.backToLoginButton}
            />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(5),
  },
  backButton: {
    marginBottom: responsiveHeight(3),
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
  resetButton: {
    marginTop: responsiveHeight(3),
  },
  successContainer: {
    alignItems: 'center',
    marginTop: responsiveHeight(3),
  },
  backToLoginButton: {
    width: '100%',
  },
});

export default ForgotPasswordScreen; 