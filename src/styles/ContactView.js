import { StyleSheet } from "react-native";

export const contactViewStyles = StyleSheet.create({
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
    marginBottom: 20
  },
  cellView: {
    width: "100%",
    fontSize: 17,
    color: "#000",
    textAlign: "left",
    marginTop: 10,
    marginBottom: 10
  },
  backButton: {
    color: "#0000ff",
    fontSize: 15
  },
  backButtonView: {
    alignSelf: "flex-start",
    marginTop: 20
  },
  alignSelfFlexStart: {
    alignSelf: "flex-start"
  }
});
