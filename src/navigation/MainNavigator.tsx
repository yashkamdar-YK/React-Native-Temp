import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { MainStackParamList } from './types';
import { NAVIGATION } from './constants';
import { Home, User, Settings, Menu } from 'lucide-react-native';
import { COLORS } from '../styles/typography/colors';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Heading from '../components/ui/heading';

// Import screens
import HomeScreen from '../screens/main/HomeScreen';
import SettingsScreen from '../screens/main/SettingsScreen';

const Tab = createBottomTabNavigator<MainStackParamList>();

// Custom header with drawer toggle
const CustomHeader = ({ title }: {
  title: string
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        style={styles.menuButton}
      >
        <Menu color={COLORS.gray[700]} size={24} />
      </TouchableOpacity>
      <Heading size="xl" weight="BOLD">
        {title}
      </Heading>
      <View style={styles.rightPlaceholder} />
    </View>
  );
};

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        header: ({ route }) => <CustomHeader title={route.name} />,
        tabBarActiveTintColor: COLORS.blue[500],
        tabBarInactiveTintColor: COLORS.gray[400],
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: COLORS.gray[200],
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
      initialRouteName={NAVIGATION.Home}>
      <Tab.Screen
        name={NAVIGATION.Home}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />

      <Tab.Screen
        name={NAVIGATION.Settings}
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(5),
    paddingBottom: responsiveHeight(2),
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[200],
  },
  menuButton: {
    padding: 5,
  },
  rightPlaceholder: {
    width: 24,
  },
});

export default MainNavigator; 