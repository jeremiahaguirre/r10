import { ActivityIndicator, View } from "react-native";
import React from "react";
import styles from "./styles";

const Loader = () => {
  return (
    <ActivityIndicator
      style={styles.loader}
      animating={true}
      size="small"
      color="black"
    />
  );
};

export default Loader;
