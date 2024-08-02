# dsfr-plus
Design system from the French state - React extended version


## Run examples locally

1. Build local version of the lib "dsfr-plus"

`npm run build`

2. Delete previous version of the lib "dsfr-plus" in "examples-ts" project

`rm -Rf example-ts/dist`

3. Copy local version of the lib "dsfr-plus" into the "examples-ts project"

`cp -R dist example-ts`

4. Run "examples-ts" project

`npm run example-ts`


## Deployment

To deploy in production, simply run this command from your staging branch :

```sh
npm run deploy --level=[patch|minor|major]
```

:warning: Obviously, only members of the [dataesr organization](https://github.com/dataesr/) have rights to push on the repo.
