import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Product } from "../../types/index";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";

const { width, height } = Dimensions.get("window");

type CartItemProps = {
  product: Product;
  quantity: number;
  removeItemCart: () => void;
  addItemToCart: () => void;
};

const CartItem = ({
  product,
  quantity,
  removeItemCart,
  addItemToCart,
}: CartItemProps) => {
  return (
    <View style={{ width: "100%", backgroundColor: "white" }}>
      <View
        style={{
          height: height * 0.13,
          width: width * 0.92,
          marginHorizontal: "auto",
          flexDirection: "row",
          backgroundColor: "white",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
          borderBottomWidth: 0.4,
          borderBottomColor: "lightgray",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            style={{
              width: height * 0.09,
              height: height * 0.09,
              borderColor: "lightgray",
              borderWidth: 0.45,
              borderRadius: 8,
              padding: 5,
            }}
            source={{ uri: product.image }}
          />
          <View>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                maxWidth: width * 0.45,
              }}
            >
              {product.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginVertical: 3,
                color: "#848897",
                fontWeight: "600",
              }}
            >
              {product.miktar}
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginVertical: 3,
                color: "#5d3ebd",
                fontWeight: "600",
              }}
            >
              <Text>{"\u20BA"}</Text>
              {product.fiyatIndirimli}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            width: width * 0.2,
            height: height * 0.035,
            borderRadius: 10,
            justifyContent: "space-around",
            alignItems: "center",
            borderColor: "lightgray",
            borderWidth: 0.5,
            shadowOpacity: 0.4,
            shadowRadius: 10,
            shadowColor: "gray",
          }}
        >
          <TouchableOpacity
            onPress={() => removeItemCart(product.id)}
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ fontSize: 21, color: "#5d3edb", fontWeight: "600" }}>
              -
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#5d3edb",
              height: "100%",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
              {quantity}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => addItemToCart(product)}
            style={{ flex: 1, alignItems: "center" }}
          >
            <Text style={{ fontSize: 21, color: "#5d3edb", fontWeight: "600" }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),

    removeItemCart: (id: string) => dispatch(actions.removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
