import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    backgroundColor: "#ffd602",
    flexDirection: "row",
  },
  headerOne: {
    backgroundColor: "white",
    width: "80%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderTopRightRadius: 28,
    borderBottomRightRadius: 28,
    paddingHorizontal: "3%",
  },
  headerOneView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    gap: 5,
    borderLeftWidth: 2,
    borderLeftColor: "#f3f2fd",
  },
  headerTwo: {
    width: "20%",

    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
