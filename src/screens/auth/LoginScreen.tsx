import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {NAVIGATION} from '../../constants/navigation';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import Heading from '../../components/ui/heading';
import {COLORS} from '../../styles/typography';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      // Show error message
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store login token
      await AsyncStorage.setItem('logged', 'true');
      
      // Navigate to main app
      navigation.replace(NAVIGATION.Main);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Heading size="2xl" weight="BOLD">
          Welcome Back
        </Heading>
        <Heading 
          size="base" 
          weight="REGULAR" 
          color={COLORS.gray[600]}
          style={styles.subtitle}
        >
          Sign in to continue
        </Heading>
      </View>
      
      <View style={styles.formContainer}>
        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Input
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <Button
          title="Forgot Password?"
          onPress={() => navigation.navigate(NAVIGATION.ForgotPassword)}
          variant="info"
          size="small"
          style={styles.forgotButton}
        />
        
        <Button
          title="Login"
          onPress={handleLogin}
          variant="primary"
          size="large"
          loading={loading}
          style={styles.loginButton}
        />
        
        <View style={styles.registerContainer}>
          <Heading size="sm" weight="REGULAR" color={COLORS.gray[600]}>
            Don't have an account?
          </Heading>
          <Button
            title="Register"
            onPress={() => navigation.navigate(NAVIGATION.Register)}
            variant="secondary"
            size="small"
            style={styles.registerButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: responsiveWidth(5),
  },
  headerContainer: {
    marginTop: responsiveHeight(10),
    marginBottom: responsiveHeight(5),
  },
  subtitle: {
    marginTop: responsiveHeight(1),
  },
  formContainer: {
    width: '100%',
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: responsiveHeight(2),
  },
  loginButton: {
    marginTop: responsiveHeight(2),
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(5),
  },
  registerButton: {
    marginLeft: responsiveWidth(2),
  },
});

export default LoginScreen; 