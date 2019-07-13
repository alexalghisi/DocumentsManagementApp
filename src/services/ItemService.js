import { db } from '../config';

export const addItem =  (item) => {
    db.ref('/data').push({
        imageURI: item.imageURI,
        name: item.name,
    });
};
