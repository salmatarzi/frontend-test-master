import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15
  },
  flex1: {
    flex: 1
  },
  flex1Centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  addIcon: {
    top: 20,
    right: 10,
    alignSelf: "flex-end"
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#c3c7ce"
  },

  button: {
    width: 200,
    height: 50,
    backgroundColor: "#608cee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  },
  buttonText: {
    fontSize: 17,
    color: "#fff"
  }
});
