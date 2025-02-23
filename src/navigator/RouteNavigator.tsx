import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import HomeNavigator from "./HomeNavigator";
import { TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const CustomTabBarButton = ({ children }: any) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#5e37bf",
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        marginTop: -8,
        borderWidth: 2,
        borderColor: "white",
      }}
    >
      <Entypo name="list" size={32} color="#ffd602" />
    </TouchableOpacity>
  );
};

const Tab = createBottomTabNavigator();

const RouteNavigator = () => {
  const isProductDetailsFocused = useIsFocused();

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5e37bf",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          display: isProductDetailsFocused ? "none" : "flex",
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="list"
        component={HomeNavigator}
        options={{
          tabBarIcon: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="user"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user-large" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="offer"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="gift" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RouteNavigator;
