import { FlatList, Text, View, Image, Dimensions } from "react-native";
import "./styles";
import React, { useState } from "react";
const { width, height } = Dimensions.get("window");
const BannerCarousel = () => {
  const [banners, setBanners] = useState([
    "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg",
    "https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg",
    "https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg",
    "https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg",
  ]);

  return (
    <FlatList
      data={banners}
      renderItem={(item) => (
        <Image
          source={{ uri: item.item }}
          width={width}
          height={height * 0.25}
        />
      )}
      horizontal
      showsVerticalScrollIndicator={false}
      snapToInterval={width}
      snapToAlignment="center"
      decelerationRate={"fast"}
    >
      <Text>index</Text>
    </FlatList>
  );
};

export default BannerCarousel;
