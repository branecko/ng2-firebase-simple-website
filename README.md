# ng2-firebase-simple-website

Sample Angular 2 project created with angular CLI with firebase integrated using angular fire2.

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

##Steps
- setup firebase - [see commit](https://github.com/branecko/ng2-firebase-simple-website/commit/3ee89d8adeb60109dac64663b138a8190b05cbc3)
- get data from firebase - [see commit](https://github.com/branecko/ng2-firebase-simple-website/commit/71f34e22e9add74751de60e8a73354ebd97d8458)

