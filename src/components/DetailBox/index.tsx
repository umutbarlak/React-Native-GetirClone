import { View, Text } from "react-native";
import React from "react";
import { Product } from "../../types";

const DetailBox = ({ product }: { product: Product }) => {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "white",
        paddingBottom: 20,
      }}
    >
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Text
          style={[
            { textDecorationLine: "line-through", fontSize: 22 },
            !product.fiyatIndirimli && { display: "none" },
          ]}
        >
          {"\u20BA"}
          {product.fiyat}
        </Text>
        {product.fiyatIndirimli && (
          <Text style={{ color: "#5d3ebd", fontWeight: "bold", fontSize: 22 }}>
            {"\u20BA"}
            {product.fiyat}
          </Text>
        )}
      </View>
      <Text style={{ fontWeight: "700", fontSize: 20, marginVertical: 8 }}>
        {product.name}
      </Text>
      <Text style={{ fontWeight: "500", fontSize: 16, color: "gray" }}>
        {product.miktar}
      </Text>
    </View>
  );
};

export default DetailBox;
