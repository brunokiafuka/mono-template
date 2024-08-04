import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NAV_ROUTES } from "./config/routesNames";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { EntryStacksParamList } from "./config/navigation.types";

const Stack = createNativeStackNavigator<EntryStacksParamList>();

export function AppRouter() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NAV_ROUTES.Tabs} component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
