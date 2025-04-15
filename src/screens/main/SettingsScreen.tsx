import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Switch } from 'react-native';
import { COLORS } from '../../styles/typography/colors';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Heading from '../../components/ui/heading';

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [locationServices, setLocationServices] = useState(true);
  const [dataUsage, setDataUsage] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Heading size="2xl" weight="BOLD">
          Settings
        </Heading>
        <Heading 
          size="base" 
          weight="REGULAR" 
          color={COLORS.gray[600]}
          style={styles.subtitle}
        >
          Customize your app experience
        </Heading>
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.sectionContainer}>
          <Heading size="lg" weight="SEMI_BOLD">
            Notifications
          </Heading>
          
          <View style={styles.settingItem}>
            <Heading size="base" weight="MEDIUM">
              Push Notifications
            </Heading>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: COLORS.gray[300], true: COLORS.blue[500] }}
              thumbColor={COLORS.white}
            />
          </View>
        </View>
        
        <View style={styles.sectionContainer}>
          <Heading size="lg" weight="SEMI_BOLD">
            Appearance
          </Heading>
          
          <View style={styles.settingItem}>
            <Heading size="base" weight="MEDIUM">
              Dark Mode
            </Heading>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: COLORS.gray[300], true: COLORS.blue[500] }}
              thumbColor={COLORS.white}
            />
          </View>
        </View>
        
        <View style={styles.sectionContainer}>
          <Heading size="lg" weight="SEMI_BOLD">
            Privacy
          </Heading>
          
          <View style={styles.settingItem}>
            <Heading size="base" weight="MEDIUM">
              Location Services
            </Heading>
            <Switch
              value={locationServices}
              onValueChange={setLocationServices}
              trackColor={{ false: COLORS.gray[300], true: COLORS.blue[500] }}
              thumbColor={COLORS.white}
            />
          </View>
          
          <View style={styles.settingItem}>
            <Heading size="base" weight="MEDIUM">
              Data Usage
            </Heading>
            <Switch
              value={dataUsage}
              onValueChange={setDataUsage}
              trackColor={{ false: COLORS.gray[300], true: COLORS.blue[500] }}
              thumbColor={COLORS.white}
            />
          </View>
        </View>
        
        <View style={styles.sectionContainer}>
          <Heading size="lg" weight="SEMI_BOLD">
            About
          </Heading>
          
          <View style={styles.aboutItem}>
            <Heading size="base" weight="MEDIUM">
              Version
            </Heading>
            <Heading size="base" weight="REGULAR" color={COLORS.gray[600]}>
              1.0.0
            </Heading>
          </View>
          
          <View style={styles.aboutItem}>
            <Heading size="base" weight="MEDIUM">
              Build
            </Heading>
            <Heading size="base" weight="REGULAR" color={COLORS.gray[600]}>
              2023.1
            </Heading>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(5),
    paddingBottom: responsiveHeight(3),
  },
  subtitle: {
    marginTop: responsiveHeight(1),
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
  },
  sectionContainer: {
    marginBottom: responsiveHeight(4),
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: responsiveHeight(2),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[200],
  },
  aboutItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: responsiveHeight(2),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[200],
  },
});

export default SettingsScreen; 