# ng2-firebase-simple-website

Sample Angular 2 project created with angular CLI with [firebase](https://firebase.google.com/) integrated using [angular fire2](https://github.com/angular/angularfire2).

In this project I used [Foundation framework](http://foundation.zurb.com/) instead of Bootstrap.

Project generated with [angular-cli](https://github.com/angular/angular-cli)
* run `npm install`
* start local server with `npm start`

Sample db imports in folder `_resources`

**Don't forget to change db rules** 
```
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```
into
```
{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}
```

**Add your firebase keys into `./src/app/app.module.ts`**
```
// Must export the config
export const firebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  databaseURL: '<your-database-URL>',
  storageBucket: '<your-storage-bucket>'
};
```

##List of interesting commits
- setup firebase - [see commit](https://github.com/branecko/ng2-firebase-simple-website/commit/3ee89d8adeb60109dac64663b138a8190b05cbc3)
- get data from firebase - [see commit](https://github.com/branecko/ng2-firebase-simple-website/commit/71f34e22e9add74751de60e8a73354ebd97d8458)
- implement frontend using Foundation - [see commit](https://github.com/branecko/ng2-firebase-simple-website/commit/84cfc33212e88afb8dd62064994ccd947bbb7c77)
- use firebase query (used to filter entries from) - [see commit](https://github.com/branecko/ng2-firebase-simple-website/commit/816cc1c0e260c48b4f637c71ae3ca49e9dfa59ee)
- add entry to firebase db - [see commit](https://github.com/branecko/ng2-firebase-simple-website/commit/e454156bd863dbbf736170da3755d4372ed13872)
- edit and remove entry in/from firebase db - [see commit](https://github.com/branecko/ng2-firebase-simple-website/commit/6c1311a3b0701f73db13111965e98ce3096de71d)

