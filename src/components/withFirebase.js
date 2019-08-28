import React, { useState } from "react";
import { db } from "../config";
import firebase from "react-native-firebase";
import uuid from "uuid/v4";

let itemsRef = db.ref("/data");

const withFireBase = WrappedComponent => {
  const FirebaseConnector = props => {
    const [data, setData] = useState([]);

    const fetchData = () => {
      itemsRef.on("value", snapshot => {
        const items = snapshot.val();
        setData(
          Object.keys(items).map(id => ({
            id,
            ...items[id]
          }))
        );
        return items;
      });
    };

    const uploadImageToStorage = ({ imageUri }, callBack) => {
      const ext = imageUri && imageUri.split(".").pop();
      const filename = `${uuid()}.${ext}`;
      const filePath = `Asigurari/images/${filename}`;
      firebase
        .storage()
        .ref(filePath)
        .putFile(imageUri)
        .on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          snapshot => {
            if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
              const downloadURL = snapshot.downloadURL;
              callBack(downloadURL);
            }
          },
          error => {
            alert("Sorry, Try again.");
          }
        );
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
        uploadImageToStorage={uploadImageToStorage}
        fetchData={fetchData}
        items={data}
      />
    );
  };

  return FirebaseConnector;
};

export default withFireBase;
