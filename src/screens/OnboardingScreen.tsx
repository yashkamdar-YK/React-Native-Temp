import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../styles/typography/colors';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Heading from '../components/ui/heading';
import Button from '../components/ui/button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleGetStarted = async () => {
    // Set hasLaunched to true
    await AsyncStorage.setItem('hasLaunched', 'true');
    // Navigate to Auth
    // @ts-ignore - Navigation type issue
    navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          {/* Replace with your actual onboarding image */}
          <View style={styles.imagePlaceholder} />
        </View>
        
        <View style={styles.textContainer}>
          <Heading size="2xl" weight="BOLD" center>
            Welcome to Our App
          </Heading>
          <Heading 
            size="base" 
            weight="REGULAR" 
            color={COLORS.gray[600]} 
            center
            style={styles.subtitle}
          >
            Discover amazing features and experiences with our app. Get started today!
          </Heading>
        </View>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Get Started" 
            onPress={handleGetStarted} 
            variant="primary"
            size="large"
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
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(10),
    paddingBottom: responsiveHeight(5),
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: responsiveHeight(5),
  },
  imagePlaceholder: {
    width: responsiveWidth(80),
    height: responsiveHeight(30),
    backgroundColor: COLORS.blue[100],
    borderRadius: 12,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: responsiveHeight(5),
  },
  subtitle: {
    marginTop: responsiveHeight(2),
  },
  buttonContainer: {
    width: '100%',
  },
});

export default OnboardingScreen; 