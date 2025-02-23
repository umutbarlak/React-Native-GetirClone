import { View, Text } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
const DetailProperty = () => {
  const [details, setDetails] = useState<string[]>([
    "Sütlü kıtır çikolata ve badem parçaçıklarıyla kaplı vanilya lezzeti",
    "İçindekiler",
    "Besin Değeri",
    "Kullanım",
    "Ek Bilgiler",
  ]);
  const TextComponent = ({
    detail,
    index,
  }: {
    detail: string;
    index: number;
  }) => {
    return (
      <View
        style={{
          paddingVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomWidth: index === details.length - 1 ? 0 : 0.4,
          borderColor: "lightgray",
        }}
      >
        <Text
          style={{
            color: "#687482",
            fontWeight: index === 0 ? "400" : "500",
            fontSize: index === 0 ? 12 : 14,
          }}
        >
          {detail}
        </Text>
        {index !== 0 && (
          <Entypo name="chevron-down" size={20} color="#697483" />
        )}
      </View>
    );
  };
  return (
    <View
      style={{
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      {details.map((detail, i) => (
        <TextComponent key={i} index={i} detail={detail} />
      ))}
    </View>
  );
};

export default DetailProperty;
