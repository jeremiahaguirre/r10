//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../components/Loader";
import Speaker from "./Speaker";

// create a component
class SpeakerContainer extends Component {
  render() {
    const sessionId = navigation.getParam("sessionId");
    return (
      <Query query={GET_SPEAKER} variables={{ id: sessionId }}>
        {({ loading, error, data }) => {
          if (loading || !data) return <Loader />;
          return (
            <FavesContext.Consumer>
              {value => (
                <Speaker
                  sessionData={data}
                  data={value}
                  navigation={this.props.navigation}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

export default SpeakerContainer;

const GET_SPEAKER = gql`
  query Speaker($id: ID!) {
    Speaker(id: $id) {
      id
      bio
      name
      image
      url
    }
  }
`;
