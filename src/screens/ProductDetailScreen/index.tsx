import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Product } from "../../types";
import ImageCarousel from "../../components/ImageCarousel";
import DetailBox from "../../components/DetailBox";
import DetailProperty from "../../components/DetailProperty";
import CardButton from "../../components/CardButton";

const ProductDetail = (props) => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);

  if (!product) {
    return <ActivityIndicator color="#5d3ebd" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <ImageCarousel images={product?.images} />
        <DetailBox product={product} />
        <Text
          style={{
            paddingVertical: 20,
            paddingHorizontal: 10,
            fontWeight: "600",
            fontSize: 16,
            color: "gray",
          }}
        >
          Detaylar
        </Text>
        <DetailProperty />
      </ScrollView>
      <CardButton product={product} />
    </View>
  );
};

export default ProductDetail;
