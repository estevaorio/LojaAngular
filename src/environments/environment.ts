// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverAPI:"http://localhost:3000/",
  firebaseConfig: {
    apiKey: "AIzaSyBuJYylojJFWQdDahV6DYGOhRAtJjb0jyA",
    authDomain: "loja-angular-4f942.firebaseapp.com",
    databaseURL: "https://loja-angular-4f942.firebaseio.com",
    projectId: "loja-angular-4f942",
    storageBucket: "",
    messagingSenderId: "101670084193",
    appId: "1:101670084193:web:1e51469858dc0066509420"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
