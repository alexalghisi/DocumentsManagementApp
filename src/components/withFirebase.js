import React, { useState } from "react";
import { db } from "../config";

let itemsRef = db.ref("/data");

const withFireBase = WrappedComponent => {
    const FirebaseConnector = (props) => {
      const [ data, setData ] = useState([]);

        const fetchData = () => {
          itemsRef.once("value", snapshot => {
            const items = snapshot.val();
            setData(Object.values(items));
            return items;
          });
        };

        return (
            <WrappedComponent
                {...props}
                fetchData={fetchData}
                items={data}
            />
        );
    };

    return FirebaseConnector;
};

export default withFireBase;
