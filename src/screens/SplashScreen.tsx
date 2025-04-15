import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS } from '../styles/typography/colors';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Heading from '../components/ui/heading';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Heading size="3xl" weight="BOLD" color={COLORS.blue[500]}>
          App Name
        </Heading>
      </View>
      <ActivityIndicator size="large" color={COLORS.blue[500]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  logoContainer: {
    marginBottom: responsiveHeight(5),
  },
});

export default SplashScreen; 