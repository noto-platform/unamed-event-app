import { StyleSheet } from "react-primitives";

// TODO Add colors and common values in global

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    height: 50,
    zIndex: 10
  },
  topBar: {
    position: "absolute",
    top: 0,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    backgroundColor: "#1BCBAC",
    display: "flex",
    justifyContent: "center"
  },
  topBarTitle: {
    color: "#fff",
    fontWeight: "bold"
  },
  topBarClose: {
    position: "absolute",
    height: "100%",
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    right: 0
  },
  body: {
    position: "fixed",
    backgroundColor: "#fff",
    marginTop: "50px",
    padding: "5px",
    width: "100%",
    height: "100%"
  }
});

export default styles;
