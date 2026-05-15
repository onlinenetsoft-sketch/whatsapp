import React from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import DashboardScreen from './screens/DashboardScreen';
import InboxScreen from './screens/InboxScreen';
import CampaignScreen from './screens/CampaignScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: '#25D366',
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
        />

        <Tab.Screen
          name="Inbox"
          component={InboxScreen}
        />

        <Tab.Screen
          name="Campaigns"
          component={CampaignScreen}
        />

        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}