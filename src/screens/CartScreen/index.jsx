import React from "react";
import { FlatList, Text, View } from "react-native";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem/CartItem";
productsGetir;
const CartScreen = () => {
  return (
    <FlatList
      data={productsGetir.slice(0, 1)}
      renderItem={({ item }) => <CartItem product={item} />}
    />
  );
};

export default CartScreen;
