import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import RouteNavigator from "./src/navigator/RouteNavigator";
import HomeNavigator from "./src/navigator/HomeNavigator";
import store from "./src/redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RouteNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
