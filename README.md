# freitag-auto-base

_freitag-auto-base_ is a NPM package that build and configure the skeleton for a NodeJS app. It brings Stylus, Gulp and Browser-Sync to the project, so you wont need to configure those packages yourself.

## Instalation 

1. First, create the directory for your application
``` 
mkdir myApp 
```
2. Inside the _myApp_ directory, type ```npm init``` as usual for any other NodeJS app.
```javascript 
npm init
```
This will generate the pacjake.json that we all know:
```javascript 
{
  "name": "package-name",
  "version": "1.0.0",
  "description": "description",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "your-name",
  "license": "ISC"
}
```
Keep this in mind, we will modify this file later.

4. Install the _freitag-auto-base_ package
```javascript
npm i freitag-auto-base --save
```
It might take a few minutes to complete install the package, so don't worry.

5. After instalation, modify the _package.json_ file to insert the _baseGenerate_ script. Your _package.json_ should look as follows:

```javascript 
{
  "name": "package-name",
  "version": "1.0.0",
  "description": "description",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "baseGenerate": "generateBase"
  },
  "author": "your-name",
  "license": "ISC"
}
```

6. Finally, type in the command-line ``` npm baseGenerate ```

Your skeleton is done! You have a structure inside the _myApp_ directory that look as follows:
```
.
+-- public
|   +--css
|   |   +--style.css
|   +--js
|   |   +--script.js //Where you type your js scripts
|   +--img
|   +--stylus
|   └── +--style.styl //where you type your stylus code
|
+-- package.json
+-- gulpfile.js
└── index.html //Your main html file
```