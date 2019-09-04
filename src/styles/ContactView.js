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
  icon: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 10
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
  },
  noContactChosenText: {
    fontSize: 20,
    alignSelf: "center",
    textAlign: "center"
  }
});
