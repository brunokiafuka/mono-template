import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { AppRouter } from "./src/navigation/AppRouter";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
