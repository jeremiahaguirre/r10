import Favs from "./Favs";
import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FavesContext from "../../context/FavesContext";
import Loader from "../../components/Loader";

class FavsContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return (
      <Query query={GET_SESSION_ITEMS}>
        {({ loading, error, data }) => {
          if (loading || !data) return <Loader />;
          return (
            <FavesContext.Consumer>
              {value => (
                <Favs
                  sessionData={data}
                  consumerData={value}
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

export default FavsContainer;

const GET_SESSION_ITEMS = gql`
  query {
    allSessions {
      id
      title
      description
      location
      speaker {
        image
        name
      }
      startTime
    }
  }
`;
