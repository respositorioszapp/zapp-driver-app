// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASEURL: 'https://appewc.com/zapp/zapp-back/public/api/',
  SECONDARY_URL : 'https://zappstore.com.co/nuevo/wp-api/',
  firebaseConfig: {
    apiKey: "AIzaSyDa-PwG6r2LrtKHjwRWoB5MgnBoZaYT3Wk",
    authDomain: "zapp-logistica-dev.firebaseapp.com",
    databaseURL: "https://zapp-logistica-dev.firebaseio.com",
    projectId: "zapp-logistica-dev",
    storageBucket: "zapp-logistica-dev.appspot.com",
    messagingSenderId: "408995173697",
    appId: "1:408995173697:web:3cabbfbbf09e3e922ffdc0",
    measurementId: "G-PQS21Z48YG"
  },
  PLAY_AUDIO_ON_REQUEST: true,
  AUDIO_PATH: "./assets/audio/notification.mpeg",
  VERSION_NAME : "2.1.6",
  PLAY_STORE_URL : "https://play.google.com/store/apps/details?id=com.zapp.driver.app"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
