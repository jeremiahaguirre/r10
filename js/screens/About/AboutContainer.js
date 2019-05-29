import React, { Component } from "react";
import About from "./About";
import { Text } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../components/Loader";

class AboutContainer extends Component {
  static navigationOptions = {
    title: "About"
  };
  render() {
    return (
      <Query query={GET_CONDUCT_ITEMS}>
        {({ loading, error, data }) => {
          if (loading || !data) return <Loader />;
          return <About conductData={data} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;

const GET_CONDUCT_ITEMS = gql`
  query {
    allConducts(orderBy: order_ASC) {
      id
      description
      title
    }
  }
`;
