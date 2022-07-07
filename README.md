# Calendar Backend

This is the backend for "React Calendar App" using "NodeJs", "ExpressJs" and "MongoDB".

## Install Dependencies

NPM
```
npm install
```

YARN
```
yarn
```

## Run Production

NPM
```
npm start
```

YARN
```
yarn start
```

## Run Development

NPM
```
npm run dev
```

YARN
```
yarn dev
```

## Generate Encrypted code

This creates a encrypted code for your environment variables:

Terminal

```
$ node
> require('crypto').randomBytes(64).toString('hex');
// '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587 ...'
```

.env

```
...
SECRET_JWT_SEED=09f26e402586e2faa ...
```

## Heroku Logs

This only works if you are deploying your app in Heroku.

```
$ heroku logs -n 1000 --tail
```