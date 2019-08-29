import { StyleSheet } from "react-native";
import { screenWidth } from "../utils/common";

export const contactsStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15
  },
  title: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20
  },
  listContainer: {
    flex: 1
  },
  item: {
    width: screenWidth
  },
  separator: {
    width: screenWidth,
    height: 1,
    backgroundColor: "#000"
  },
  itemText: {
    fontSize: 17,
    color: "#000",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10
  }
});
