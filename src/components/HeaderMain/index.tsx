import React from "react";
import { View, Text, Image } from "react-native";
import "./styles";
import styles from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";

const HeaderMain = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          width={30}
          height={30}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={styles.headerOneView}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Ev</Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 12,
              color: "#6e7080",
              marginEnd: 20,
            }}
          >
            Mert Cad. No:4 Mermer Plaza...
          </Text>
          <AntDesign name="right" size={18} color="black" />
        </View>
        <Text></Text>
      </View>
      <View style={styles.headerTwo}>
        <Text style={{ fontSize: 10, fontWeight: "bold", color: "#5d3ebd" }}>
          TVS
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#5d3ebd" }}>
          15 <Text style={{ fontSize: 16 }}>dk</Text>
        </Text>
      </View>
    </View>
  );
};

export default HeaderMain;
