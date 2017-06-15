import { StyleSheet } from "react-primitives";

// TODO Add colors and common values in global

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  icon: {
    width: 50
  },
  text: {},
  tag: {
    width: 100, // TODO fix auto
    padding: 10,
    margin: 5,
    boxShadow: "2px 2px 2px #eee",
    borderRadius: 10,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center"
  },
  tagText: {},
  saveButton: {
    marginTop: 10,
    backgroundColor: "#eee",
    padding: 10,
    width: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
