# Scoped hooks

This folder contains a number of hooks relating to authencication and data fetching. This initially covers scoped hooks. Under the hood most interaction with firebased are covered by [react-firebase-hooks](https://www.npmjs.com/package/react-firebase-hooks).

# How they work

Most of the queries on in the MBO app require knowing the current user ID before queries can be performed. This is because the data model of the site follows a setup where all user specific data is stored under a `users/{USER_ID}/{COLLECTION_PATH}`. In order to simplify the process of waiting for this information to become available form firebase we create `userScoped` rendition of standard data fetching hooks which can be found [here](https://github.com/csfrequency/react-firebase-hooks/tree/09bf06b28c82b4c3c1beabb1b32a8007232ed045/storage)

Each of these hooks should return a shared loading state while proxying the API of the original hooks otherwise. Collection and Document paths are automatically prepended with `users/{USER_ID}`
