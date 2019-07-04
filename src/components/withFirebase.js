import React from "react";
import { db } from "../config";

let itemsRef = db.ref("/data");

const withFireBase = WrappedComponent => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [] };
    }

    getFirebaseData() {
      itemsRef.once("value", snapshot => {
        let data = snapshot.val();
        this.setState({ items: Object.values(data) });
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          getFirebaseData={this.getFirebaseData.bind(this)}
          items={this.state.items}
        />
      );
    }
  }

  return HOC;
};

export default withFireBase;

