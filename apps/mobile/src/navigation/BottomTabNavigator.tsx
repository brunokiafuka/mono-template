import { TabParamList } from "./config/navigation.types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { colors } from "../config/colors";

import { NAV_ROUTES } from "./config/routesNames";

import { TAB_HEADER_DEFAULT_CONFIG } from "../config/constants";
import { HomeStackNavigator } from "./stacks/HomeStack";

type IconProps = {
  name: React.ComponentProps<typeof Feather>["name"];
  color: string;
  focused: boolean;
};

const Tab = createBottomTabNavigator<TabParamList>();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name={NAV_ROUTES.HomeTab}
        component={HomeStackNavigator}
        options={{
          headerTitle: "Home",
          ...TAB_HEADER_DEFAULT_CONFIG,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={color} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name={NAV_ROUTES.NewBookingTab}
        component={HomeStackNavigator}
        options={{
          headerTitle: "Transactions",
          ...TAB_HEADER_DEFAULT_CONFIG,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="clock" color={color} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name={NAV_ROUTES.SettingsTab}
        component={HomeStackNavigator}
        options={{
          headerTitle: "Settings",
          ...TAB_HEADER_DEFAULT_CONFIG,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="menu" color={color} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const TabBarIcon = ({ name, color, focused }: IconProps) => (
  <Feather
    size={25}
    style={{
      marginBottom: -3,
    }}
    name={name}
    color={focused ? colors.primary : color}
  />
);
