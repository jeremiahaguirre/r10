import React, { Component } from "react";
import { View } from "react-native";
import Session from "./Session";
import Loader from "../../components/Loader";
import styles from "./styles";
import FavesContext from "../../context/FavesContext";
import { Query } from "react-apollo";
import gql from "graphql-tag";

class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };

  render() {
    const { navigation } = this.props;

    const sessionId = navigation.getParam("sessionId");

    return (
      <View style={styles.container}>
        <Query query={GET_SESSION} variables={{ id: sessionId }}>
          {({ loading, error, data }) => {
            if (loading || !data) return <Loader />;
            return (
              <FavesContext.Consumer>
                {value => (
                  <Session
                    navigation={this.props.navigation}
                    query={data}
                    data={value}
                  />
                )}
              </FavesContext.Consumer>
            );
          }}
        </Query>
      </View>
    );
  }
}

export default SessionContainer;

const GET_SESSION = gql`
  query($id: ID!) {
    Session(id: $id) {
      id
      title
      location
      startTime
      speaker {
        image
        name
        bio
        url
      }
      description
    }
  }
`;
