import React from "react";
import { db } from "../config";

let itemsRef = db.ref("/data");

const withFireBase = WrappedComponent => {
  const HOC = (props) => {
    const [ items ] = React.useState(0);

    const fetchData = () => {
      itemsRef.once("value", snapshot => {
        let data = snapshot.val();
        this.setState({ items: Object.values(data) });
      });
    };

    return (
      <WrappedComponent
        {...props}
        getFirebaseData={fetchData}
        items={items}
      />
    );
  };

  return HOC;
};

export default withFireBase;

