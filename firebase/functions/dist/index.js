import functions from 'firebase-functions';
import admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();
export const onUserCreate = functions.auth.user().onCreate((user) => {
    db.doc(`users/${user.uid}`).set({
        id: user.uid,
        displayName: user.displayName,
        userPerferences: {}
    });
});
