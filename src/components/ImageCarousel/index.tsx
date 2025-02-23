import React, { useState } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [acitveIndex, setAcitveIndex] = useState(0);

  const onViewRef = React.useRef((viewableItems) => {
    if (viewableItems.viewableItems.length > 0) {
      setAcitveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });
  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
        paddingTop: 20,
        height: height * 0.28,
      }}
    >
      <FlatList
        data={images}
        style={{ width: width, height: height * 0.2 }}
        renderItem={(item) => (
          <Image
            source={{ uri: item.item }}
            style={{
              width: width,
              height: height * 0.2,
              resizeMode: "contain",
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        snapToAlignment="center"
        decelerationRate={"fast"}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      ></FlatList>
      <View>
        <View style={{ flexDirection: "row", gap: 10, padding: 20 }}>
          {images.map((image, i) => (
            <View
              key={i}
              style={{
                width: 10,
                height: 10,
                backgroundColor: acitveIndex === i ? "#5d3ebd" : "gray",
                borderRadius: 30,
              }}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default ImageCarousel;
