## AUTHENTICATION-API

Module to reuse authentication part. If you are bored to code authentication part on your side project this module is for you!


## RUN SAMPLE

1. Clone this repo

2. Install dependencies:

  `npm install`

3. Run the following command:

  `npm run sample`

4. localhost:3000/ is ready to do requests (use your favourite API development environment as CURL, POSTMAN or whatever you want)

## HOW TO USE IN YOUR PROJECT?

1. Install `authentication-api`:

  `npm install authentication-api`

2. Import module

```javascript
var authApi = require('authentication-api');
```

3. Set authentication-api routes on your express routes:

```javascript
app.use('/*', authApi.router);
```

## Routes that were generated:

|Method| url                 | data                              | description                                      |
| ---- |---------------------| ----------------------------------| -------------------------------------------------|
| POST | /signup             | {email: ..., password: ...}       | create user                                      |
| POST | /login              | {email: ..., password: ...}       | check email/password are correct and return token|


## TODO

- [] Testing
- [] Create middleware to check user is logged
- [] Reset password
- [] Accept other databases (MySql, PostgreSQL)

## license

  MIT