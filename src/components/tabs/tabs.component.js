import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import RestaurantScreen from "../../features/restaurant/screens/restaurant.screen";
import SettingScreen from "../../features/settings/screens/settings.screen";
import MapScreen from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: "restaurant-sharp",
  Settings: "settings-sharp",
  Map: "ios-map-sharp",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICONS[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const Tabs = () => (
  <Tab.Navigator
    tabBarOptions={{ activeTintColor: "tomato", inactiveTintColor: "gray" }}
    screenOptions={screenOptions}
  >
    <Tab.Screen name="Restaurants" component={RestaurantScreen} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Settings" component={SettingScreen} />
  </Tab.Navigator>
);

export default Tabs;
