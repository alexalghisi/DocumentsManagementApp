import React, { useState } from "react";
import { db } from "../config";

let itemsRef = db.ref("/data");

const withFireBase = WrappedComponent => {
  const FirebaseConnector = props => {
    const [data, setData] = useState([]);

    const fetchData = () => {
      itemsRef.on("value", snapshot => {
        const items = snapshot.val();
        setData(Object.values(items));
        return items;
      });
    };

    const addItem = item => {
      db.ref("/data").push({
        imageURI: item.imageURI,
        name: item.name,
        expire: item.expire,
        type: item.type
      });
    };

    return (
      <WrappedComponent
        {...props}
        addItem={addItem}
        fetchData={fetchData}
        items={data}
      />
    );
  };

  return FirebaseConnector;
};

export default withFireBase;
