import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { HomeStackParamList } from "../../navigation/config/navigation.types";

type HomeScreen = NativeStackScreenProps<HomeStackParamList, "HomeScreen">;

export default function HomeScreen(props: HomeScreen) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>HomeScreen</Text>
    </View>
  );
}
