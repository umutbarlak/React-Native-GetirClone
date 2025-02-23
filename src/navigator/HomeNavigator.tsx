import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/HomeScreen";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Category from "../screens/CategoryFilterScreen";
import ProductDetail from "../screens/ProductDetailScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import CartScreen from "../screens/CartScreen";
import { connect } from "react-redux";
import { Product } from "../types";
import * as actions from ".././redux/actions/cartActions";

const { width, height } = Dimensions.get("window");

const Stack = createNativeStackNavigator();

function MyStack({
  navigation,
  route,
  clearCart,
  cartItems,
}: {
  cartItems: {
    product: Product;
    quantity: number;
  }[];
  clearCart: () => void;
}) {
  const tabHiddenRoutes = ["product-details", "cart-screen"];

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log("Route Name is ", routeName);

    if (tabHiddenRoutes.includes(routeName)) {
      console.log("Kapat ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      console.log("Aç ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  console.log(cartItems);

  const getProductsPrice = () => {
    if (cartItems.length === 0) {
      setTotalPrice(0);
    }
    let total = 0;
    cartItems?.forEach((cartItem) => {
      total += cartItem.product.fiyatIndirimli * cartItem.quantity;

      setTotalPrice(total);
    });
  };

  useEffect(() => {
    getProductsPrice();
  }, [cartItems, navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: "#5e37bf" },
          headerTitle: () => (
            <Image
              style={{ width: 700, height: 30, objectFit: "contain" }}
              source={require("../../assets/getirlogo.png")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="category-details"
        component={Category}
        options={({ navigation }) => ({
          headerBackButtonDisplayMode: "minimal",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#5e37bf" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.push("cart-screen")}
              style={[
                {
                  flexDirection: "row",
                  width: width * 0.2,
                  height: 33,
                  backgroundColor: "white",
                  marginRight: width * 0.01,
                  borderRadius: 9,
                  overflow: "hidden",
                },
                totalPrice === 0 ? { display: "none" } : { display: "flex" },
              ]}
            >
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 2,
                  alignSelf: "center",
                }}
                source={require("../../assets/cart.png")}
                resizeMode="contain"
              />
              <View
                style={{
                  backgroundColor: "#f4f4f4",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "#5d3ebd",
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  <Text>{"\u20BA"}</Text>
                  {totalPrice.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="product-details"
        component={ProductDetail}
        options={({ navigation }) => ({
          headerBackButtonDisplayMode: "minimal",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#5e37bf" },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={28} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              {/* <Ionicons name="heart-outline" size={28} color="804aff" /> */}
              <Ionicons name="heart-sharp" size={28} color="#804aff" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
              Ürün Detayı
            </Text>
          ),
          tabBarStyle: { display: "none" },
        })}
      />
      <Stack.Screen
        name="cart-screen"
        component={CartScreen}
        options={({ navigation }) => ({
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerBackButtonDisplayMode: "minimal",
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "white" }}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={28} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={clearCart}>
              <Ionicons name="trash" size={24} color="white" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

function HomeNavigator({
  navigation,
  route,
  cartItems,
  clearCart,
}: {
  clearCart: () => void;
  cartItems: {
    product: Product;
    quantity: number;
  }[];
}) {
  return (
    <MyStack
      navigation={navigation}
      route={route}
      cartItems={cartItems}
      clearCart={clearCart}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator);
