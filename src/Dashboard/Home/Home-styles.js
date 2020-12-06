import { makeStyles } from "@material-ui/core/styles";

export const homeStyles = makeStyles(() => ({
  section: {
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  homeImage: {
    display: "flex",
    pointerEvents: "none",
  },
}));
