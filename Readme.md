# MBO App
This repository contains the multiplied by one app. It contains a React PWA connected to a google firebase backend

## Getting started
> It is recommended to join the Multiplied By One Developer [Discord server](https://discord.gg/ga3VmhW7AG). 

### Technologies Used
The MBO app uses a number of libraries and technologies. It is currently a React Progressive Web App backed by a firebase backend. 

Libraries used prevalently in ths repository are as follows:
 * [React JS](https://reactjs.org/)
 * [Material UI V5](https://mui.com/)
 * [React Firebase Hooks](https://www.npmjs.com/package/react-firebase-hooks)


### Installation
To get started you will need to have installed:
 * JDK 8+: This will need to be exported in you PATH environment variable.
 * Node Version 16+: Recommended [Install NVM](https://github.com/nvm-sh/nvm) and then run `nvm use` in the project directory

Make sure to install the [firebase emulator](https://firebase.google.com/docs/emulator-suite/install_and_configure) (and required dependencies)

run the following to install project dependencies run following:
```bash
npm i 
cd firebase/functions
npm i
```

> Warning: This will terminate any processes bound to port 4000, 8080, 3000, 5001 and 9099,

Run the following command to start the stack:
```bash
npm run start
```

The frontend app should start on [port 3000](http://localhost:3000) and the admin on [port 4000](http://localhost:4000) 

To stop the stack you can press control+c or run in another terminal 
```bash
npm run kill:firebase
```

### Development 
Linting Guidelines: TBC
Testing Guidelines: TBC

### Tour of the repository
```bash
.
├── firebase
│   ├── emulator_data # Exported Emulator data used to bootstrap local dev env (Can be refreshed
│   │   └── [...]     # using `npm run export:firebase`)
│   ├── firestore
│   │   ├── firestore.indexes.json # Firestore index configuration 
│   │   └── firestore.rules        # Firestore user access rules
│   └── functions
│       ├── index.js          # Google Cloud Functions used by the app
│       ├── package.json      # The dependencies for the cloud functions
│       └── package-lock.json # The locked versions of the dependencies for cloud functions
├── firebase.json     # The Root firebase configuration file
├── package.json      # Firebase App Dependencies
├── package-lock.json # Firebase App Dependencies at locked versions
├── public            # Public directory for static assets
│   ├── favicon.ico   # The app icon
│   ├── index.html    # The html document the react app is mounted into
│   ├── logo192.png   # Logo Used on android / IOS for the PWA
│   ├── logo512.png   # Read Above
│   ├── manifest.json # Asset discovery containing information about how the PWA should look
│   └── robots.txt # Robot Crawling Rules
├── Readme.md # You are here :) 
└── src # React App Code
    ├── App.css     # Global CSS Styles
    ├── App.js      # Main React App component
    ├── App.test.js # Tests (Currently not in use)
    ├── components  # App Components
    │   └── [...]
    ├── firebase.config.js # Google Firebase configuration (Handles Emulation toggles)
    ├── global.css         # More Global styles ... Might need removing
    ├── hooks 
    │   └── [...] # Custom react hooks (Mainly used for data fetching)
    ├── index.js  # Main react entrypoint JS File
    ├── logo.svg  # Site Logo
    ├── pages
    │   └── [...] # Page Level components
    ├── reportWebVitals.js # 
    ├── routes
    │   ├── AppRouter.js
    │   └── AuthRouter.js
    ├── service-worker.js             # PWA Required Service worker definition
    ├── serviceWorkerRegistration.js  # Code related to registering the service worker
    ├── setupTests.js                 # Test JS Entrypoint 
    ├── styles
    │   └── fonts
    │       └── [...] # Site Fonts 
    └── theme
        └── [...] # Site Fonts
```