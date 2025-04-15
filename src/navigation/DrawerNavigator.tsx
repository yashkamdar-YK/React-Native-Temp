import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextStyle } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { COLORS } from '../styles/typography/colors';
import { Menu, Settings, HelpCircle, LogOut } from 'lucide-react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import MainNavigator from './MainNavigator';
import SettingsScreen from '../screens/main/SettingsScreen';
import Heading from '../components/ui/heading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

interface DrawerItemProps {
  icon: React.ReactNode;
  label: string;
  labelStyle?: TextStyle;
  onPress: () => void;
}

// Custom drawer item component
const DrawerItem: React.FC<DrawerItemProps> = ({ icon, label, labelStyle={}, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.drawerItem} 
      onPress={onPress}
    >
      {icon}
      <Heading 
        size="base" 
        weight="MEDIUM" 
        style={{ ...styles.drawerItemLabel, ...labelStyle }}
      >
        {label}
      </Heading>
    </TouchableOpacity>
  );
};

// Custom drawer content component
const CustomDrawerContent = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    navigation.reset({
      index: 0,
      // @ts-ignore
      routes: [{ name: 'Auth' }],
    });
  };

  return (
    <View style={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Heading size="xl" weight="BOLD">
          Our App
        </Heading>
      </View>
      
      <View style={styles.drawerItems}>
        <DrawerItem 
          icon={<Menu color={COLORS.gray[700]} size={20} />}
          label="Main Menu"
          onPress={() => {
            // @ts-ignore
            navigation.navigate('MainTabs');
          }}
        />
        
        <DrawerItem 
          icon={<Settings color={COLORS.gray[700]} size={20} />}
          label="Settings"
          onPress={() => {
            // @ts-ignore
            navigation.navigate('Settings');
          }}
        />
        
        <DrawerItem 
          icon={<HelpCircle color={COLORS.gray[700]} size={20} />}
          label="Help & Support"
          onPress={() => {
            // Future implementation
          }}
        />
      </View>
      
      <View style={styles.drawerFooter}>
        <DrawerItem 
          icon={<LogOut color={COLORS.red[500]} size={20} />}
          label="Logout"
          labelStyle={{ color: COLORS.red[500] }}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawerContent />}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          width: responsiveWidth(70),
          backgroundColor: COLORS.white,
        },
      }}
    >
      <Drawer.Screen name="MainTabs" component={MainNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 50,
  },
  drawerHeader: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[200],
  },
  drawerItems: {
    flex: 1,
    paddingTop: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  drawerItemLabel: {
    marginLeft: 15,
    color: COLORS.gray[700],
  },
  drawerFooter: {
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray[200],
    paddingTop: 20,
  },
});

export default DrawerNavigator; 