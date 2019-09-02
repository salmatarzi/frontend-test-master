import { StyleSheet } from "react-native";

export const contactsStyles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15
  },
  title: {
    alignSelf: "center",
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20
  },
  listContainer: {
    width: "100%"
  },
  item: {
    width: "100%"
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#c3c7ce"
  },
  itemText: {
    fontSize: 17,
    color: "#000",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  }
});
