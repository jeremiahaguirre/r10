import React, { createContext, Component } from "react";
import { cpus } from "os";

const FavesContext = createContext();

class FavesProvider extends Component {
  constructor(props) {
    super();
    this.state = { FavIds: [] };
  }

  render() {
    return (
      <FavesContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
