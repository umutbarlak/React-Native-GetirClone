import {
  ScrollView,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Cat } from "../../types";

const { width, height } = Dimensions.get("window");

const CategoryBox = ({
  setActiveCat,
  item,
  activeCat,
  setCategory,
}: {
  setActiveCat: any;
  item: Cat;
  activeCat: Cat;
  setCategory: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setActiveCat(item);
        setCategory(item);
      }}
      style={[
        {
          justifyContent: "center",
          paddingHorizontal: 10,
        },
        activeCat &&
          item.name === activeCat.name && {
            borderBottomColor: "#ffd00c",
            borderBottomWidth: 3,
          },
      ]}
    >
      <Text style={{ fontSize: 16, color: "white", fontWeight: "600" }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const CategoryFiltering = ({
  category,
  setCategory,
}: {
  category: Cat;
  setCategory: () => void;
}) => {
  const [categories, setCategories] = useState<Cat[]>(categoriesGetir);
  const [activeCat, setActiveCat] = useState(category);

  return (
    <ScrollView
      style={{
        width: width,
        height: height * 0.065,
        backgroundColor: "#804aff",
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {categories.map((item) => (
        <CategoryBox
          activeCat={activeCat}
          setCategory={setCategory}
          setActiveCat={setActiveCat}
          key={item.id}
          item={item}
        />
      ))}
    </ScrollView>
  );
};

export default CategoryFiltering;
