import { View, Text } from "react-native";
import React from "react";
import products from "../../../assets/productsGetir";
import ProductItem from "../ProductItem";

const ProductContainer = () => {
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          backgroundColor: "white",
          paddingVertical: 20,
          paddingHorizontal: 5,
          alignItems: "center",
        }}
      >
        {products.slice(0, 3).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </View>
      <Text style={{ color: "gray", fontWeight: "bold", padding: 14 }}>
        Çubuk
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "white",
          paddingTop: 20,
          paddingHorizontal: 5,
        }}
      >
        {products.slice(3).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </View>
    </View>
  );
};

export default ProductContainer;
