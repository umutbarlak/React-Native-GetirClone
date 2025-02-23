import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem/CartItem";
import ProductItem from "../../components/ProductItem";
import { connect } from "react-redux";
productsGetir;
import { Product } from "../../types/index";
const { width, height } = Dimensions.get("window");

const CartScreen = ({
  cartItems,
}: {
  cartItems: {
    product: Product;
    quantity: number;
  }[];
}) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const getProductsPrice = () => {
    let total = 0;
    cartItems?.forEach((cartItem) => {
      total += cartItem.product.fiyatIndirimli * cartItem.quantity;

      setTotalPrice(total);
    });

    if (cartItems.length === 0) {
      setTotalPrice(0);
    }
  };

  useEffect(() => {
    getProductsPrice();
  }, [cartItems]);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        nestedScrollEnabled={true}
        data={cartItems}
        renderItem={({ item }) => (
          <CartItem product={item.product} quantity={item.quantity} />
        )}
        ListFooterComponent={
          <>
            <Text style={{ padding: 15, fontWeight: "bold", color: "#5d3edb" }}>
              Önerilen Ürünler
            </Text>
            <ScrollView
              style={{
                paddingVertical: 20,
                backgroundColor: "white",
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              bounces={true}
            >
              {productsGetir.map((item, index) => (
                <ProductItem key={index} product={item} />
              ))}
            </ScrollView>
          </>
        }
      />
      <View
        style={{
          height: height * 0.1,
          justifyContent: "center",
          padding: 10,
        }}
      >
        <View
          style={{
            height: height * 0.05,
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: width * 0.9,
              backgroundColor: "#804aff",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
                margin: "auto",
              }}
            >
              Devam Et
            </Text>
            <View
              style={{
                height: "100%",
                width: width * 0.25,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#5d3ebd",
                }}
              >
                {"\u20BA"}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#5d3ebd",
                }}
              >
                {totalPrice.toFixed(2)}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps, null)(CartScreen);
