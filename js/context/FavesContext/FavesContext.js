import React, { createContext, Component } from "react";
import { queryFaves, saveFav, removeFav } from "../../config/models";

const FavesContext = createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { favIds: [] };
  }

  componentDidCatch() {
    this.getFavedSessionIds();
  }

  getFavedSessionIds = async () => {
    try {
      const faves = await queryFaves();
      const favIds = faves.map(fave => fave[0]);
      this.setState({ favIds });
    } catch (e) {
      return false;
    }
  };

  addFaveSession = async sessionId => {
    try {
      await saveFav(sessionId);
      this.getFavedSessionIds();
    } catch (e) {
      return false;
    }
  };

  removeFaveSession = async sessionId => {
    try {
      await removeFav(sessionId);
      this.getFavedSessionIds();
    } catch (e) {
      return false;
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSession: this.addFaveSession,
          removeFaveSession: this.removeFaveSession
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;
