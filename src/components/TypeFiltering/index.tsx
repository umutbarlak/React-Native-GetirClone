import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const { width, height } = Dimensions.get("window");

const TypeBox = ({
  setCategory,
  item,
  active,
}: {
  setCategory: any;
  item: string;
  active: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCategory(item)}
      style={[
        {
          marginVertical: "auto",
          paddingHorizontal: 20,
          paddingVertical: 10,
          margin: 10,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#f2f2f2",
        },
        active === item && { backgroundColor: "#804aff" },
      ]}
    >
      <Text
        style={[
          { fontSize: 12, color: "#804aff", fontWeight: "semibold" },
          active === item && { color: "white" },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const TypeFiltering = ({ subCategory }: { subCategory: string[] }) => {
  const [category, setCategory] = useState<string>("Birlikte İyi Gider");
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
      style={{
        width: width,
        backgroundColor: "white",
        height: height * 0.07,
        borderBottomWidth: 2,
        borderColor: "#f1f1f1",
        shadowColor: "#000", // Gölge rengi (iOS)
        shadowOffset: { width: 0, height: 2 }, // Gölge ofseti (iOS)
        shadowOpacity: 0.2, // Gölge opaklığı (iOS)
        shadowRadius: 3, // Gölge yarıçapı (iOS)
        elevation: 5, // Gölge yüksekliği (Android)
      }}
    >
      {subCategory?.map((item, i) => (
        <TypeBox
          key={i}
          setCategory={setCategory}
          item={item}
          active={category}
        />
      ))}
    </ScrollView>
  );
};

export default TypeFiltering;
