import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Product } from "../../types";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";

const { width, height } = Dimensions.get("window");

type cartButtonType = {
  addItemToCart: (a: Product) => void;
  product: Product;
};

const CardButton = ({ product, addItemToCart }: cartButtonType) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: height * 0.1,
        padding: 5,
        marginBottom: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => addItemToCart(product)}
        style={{
          height: height * 0.06,
          width: width * 0.9,
          backgroundColor: "#5d39c1",
          marginHorizontal: "auto",
          borderRadius: 10,
          margin: "auto",
        }}
      >
        <Text
          style={{
            margin: "auto",
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Sepete Ekle
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

export default connect(null, mapDispatchToProps)(CardButton);
