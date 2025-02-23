import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/SearchScreen";

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="search" component={Search} />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
