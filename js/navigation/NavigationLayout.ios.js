import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AboutScreen from "../screens/About";
import SessionScreen from "../screens/Session";
import ScheduleScreen from "../screens/Schedule";
import FavsScreen from "../screens/Favs";
import { sharedNavigationOptions } from "./config";

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const FavsStack = createStackNavigator(
  {
    Favs: FavsScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Favs: FavsStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Schedule") {
          iconName = `ios-calendar`;
        } else if (routeName === "Favs") {
          iconName = `ios-heart`;
        } else if (routeName === "About") {
          iconName = `ios-information-circle`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#FFF",
      inactiveTintColor: "#999999",
      labelStyle: {
        fontFamily: "Montserrat",
        fontSize: 12
      },
      style: { backgroundColor: "#000" }
    }
  }
);
