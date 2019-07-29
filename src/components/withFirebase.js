import React, { useState } from "react";
import { db } from "../config";

let itemsRef = db.ref("/data");

const withFireBase = WrappedComponent => {
  const FirebaseConnector = props => {
    const [data, setData] = useState([]);

    const fetchData = () => {
      itemsRef.on("value", snapshot => {
        const items = snapshot.val();
          setData(Object.keys(items).map(id => ({
                    id,
                    ...items[id],
          })));
        return items;
      });
    };

    const updateItem = item => {
      db.ref("/data/" + item.ID).update({
        name: item.name,
        expire: item.expire,
        type: item.type,
        downloadURL: item.downloadURL
      });
    };

    return (
      <WrappedComponent
        {...props}
        updateItem={updateItem}
        fetchData={fetchData}
        items={data}
      />
    );
  };

  return FirebaseConnector;
};

export default withFireBase;
