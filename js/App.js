import React, { Component } from "react";
import RootStackNavigator from "./navigation/RootStackNavigator";
import { ApolloProvider } from "react-apollo";
import { FavesProvider } from "./context/FavesContext";
import SplashScreen from "react-native-splash-screen";
import client from "./config/api";
import { Platform } from "react-native";

export default class App extends Component {
  componentDidMount() {
    Platform.select({
      ios: SplashScreen.hide()
    });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
