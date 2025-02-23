import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryFiltering from "../../components/CategoryFiltering";
import { useRoute } from "@react-navigation/native";
import TypeFiltering from "../../components/TypeFiltering";
import ProductContainer from "../../components/ProductContainer";
import { Cat } from "../../types";

const Category = () => {
  const route = useRoute();
  const [category, setCategory] = useState();
  const { cat }: { cat?: Cat } = route.params || {};
  useEffect(() => {
    setCategory(cat);
  }, []);

  console.log(cat);
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <CategoryFiltering category={category} setCategory={setCategory} />
      <TypeFiltering subCategory={category?.subCategories} />
      <ProductContainer />
    </ScrollView>
  );
};

export default Category;
