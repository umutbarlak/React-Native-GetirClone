import { Dimensions, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Cat } from "../../types";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

type Props = {
  cat: Cat;
};

const CategoryItem = ({ cat }: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("category-details", { cat })}
      style={{
        width: width * 0.25,
        height: width * 0.25,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        padding: 1,
      }}
    >
      <Image
        source={{ uri: cat.src }}
        style={{ width: width * 0.18, height: width * 0.18, borderRadius: 8 }}
      />
      <Text
        numberOfLines={1}
        style={{
          fontSize: 12,
          color: "#616161",
          fontWeight: "500",
        }}
      >
        {cat.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
