const functions = require("firebase-functions");
const admin = require('firebase-admin');
const { uuid } = require("uuidv4");

/**
 * Get DB in cloud function
 */
admin.initializeApp();
const db = admin.firestore();

module.exports.onUserCreate = functions.auth.user().onCreate((user) => {
  console.log(JSON.stringify(user))
  db.doc(`users/`).set({
    id: user.uid,
    displayName: user.displayName,
    userPerferences: {}
  });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
