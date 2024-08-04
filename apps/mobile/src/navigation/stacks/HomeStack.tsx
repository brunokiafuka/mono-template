import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../config/navigation.types";
import { NAV_ROUTES } from "../config/routesNames";
import HomeScreen from "../../screens/Home/HomeScreen";

const Stack = createNativeStackNavigator<HomeStackParamList>();

export function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NAV_ROUTES.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
}
