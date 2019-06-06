import React from "react";
import { StyleSheet, View, Platform, TouchableOpacity } from "react-native";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

const GradientHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 100, width: "100%" }]}
    />
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: "transparent"
  },
  headerTintColor: "#FFF",
  headerTitleStyle: {
    color: "#FFF",
    ...Platform.select({
      android: { fontFamily: "Montserrat-Regular" },
      ios: { fontFamily: "Montserrat" }
    })
  },
  ...Platform.select({
    android: {
      headerLeft:
        navigation.state.routeName === "Session" ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="md-arrow-round-back"
              style={{ marginLeft: 10, color: "#FFF" }}
              size={28}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Ionicons
              name="md-menu"
              style={{ marginLeft: 10, color: "#FFF" }}
              size={28}
            />
          </TouchableOpacity>
        )
    }
  })
});
