import functions from 'firebase-functions'
import admin from 'firebase-admin'
import { UserRecord } from 'firebase-functions/v1/auth';

admin.initializeApp();
const db: admin.firestore.Firestore = admin.firestore();

export const onUserCreate = functions.auth.user().onCreate((user: UserRecord): void => {
  db.doc(`users/${user.uid}`).set({
    id: user.uid,
    displayName: user.displayName,
    userPerferences: {}
  });
});
