import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Product } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";
const { width, height } = Dimensions.get("window");

type productItemType = {
  product: Product;
  addItemToCart: (a: Product) => void;
};

const ProductItem = ({ product, addItemToCart }: productItemType) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("product-details", { product })}
      style={{
        width: width * 0.3,
        height: height * 0.25,
        marginHorizontal: 5,
      }}
    >
      <Image
        style={{
          width: width * 0.28,
          height: width * 0.28,
          marginHorizontal: "auto",
          borderRadius: 20,
          borderWidth: 1.5,
          borderColor: "#f2f2f2",
        }}
        source={{
          uri: product.image,
        }}
      />
      <View style={{ marginVertical: 10, gap: 5 }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text
            style={{ color: "#747990", textDecorationLine: "line-through" }}
          >
            <Text>{"\u20BA"}</Text>
            {product.fiyat}
          </Text>
          <Text style={{ color: "#804aff", fontWeight: "bold" }}>
            <Text>{"\u20BA"}</Text>
            {product.fiyatIndirimli}
          </Text>
        </View>
        <Text
          numberOfLines={2}
          style={{ color: "#1F1E1A", fontWeight: "bold" }}
        >
          {product.name}
        </Text>
        <Text style={{ color: "#747474", fontWeight: "bold" }}>
          <Text>{product.miktar}</Text> kg
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => addItemToCart(product)}
        style={{
          width: 30,
          height: 30,
          borderWidth: 0.5,
          borderColor: "lightgrey",
          position: "absolute",
          right: -6,
          top: -6,
          borderRadius: 6,
          backgroundColor: "white",
          shadowRadius: 3.8,
          shadowOpacity: 0.09,
        }}
      >
        <Entypo
          style={{ margin: "auto" }}
          name="plus"
          size={22}
          color="#804aff"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
