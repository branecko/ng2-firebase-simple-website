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
