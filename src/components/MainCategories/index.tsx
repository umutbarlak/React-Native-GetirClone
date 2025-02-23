import { View } from "react-native";
import React, { useState } from "react";
import data from "../../../assets/categoriesGetir";
import CategoryItem from "../CategoryItem";
import { Cat } from "../../types";

const MainCategories = () => {
  const [category, setCategory] = useState<Cat[]>(data);
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", marginVertical: 5 }}>
      {category.map((cat) => (
        <CategoryItem cat={cat} key={cat.id} />
      ))}
    </View>
  );
};

export default MainCategories;
