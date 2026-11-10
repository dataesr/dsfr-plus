# dsfr-plus
Design system from the French state - React extended version


## Run examples locally

1. Build local version of the lib "dsfr-plus"

`npm run build`

2. Delete previous version of the lib "dsfr-plus" in "example-ts" project

`rm -Rf example-ts/dist`

3. Copy local version of the lib "dsfr-plus" into the "example-ts project"

`cp -R dist example-ts`

4. Run "example-ts" project

`npm run example-ts`


## About 1.15 version of DSFR

`@dataesr/dsfr-plus` requires the DSFR (`@gouvfr/dsfr` ≥ 1.15), which asks you to accept its terms of use once per project:

```bash
npm create @gouvfr/dsfr@latest   # creates .dsfr.yml — commit it
npm install @dataesr/dsfr-plus
```

## Versionning

DSFR-plus will now try to fit with the major version of de DSFR (passing from 0.6.8 direclty to 1.15.0)

## Deployment

The version number follows [semver](https://semver.org/).

To push in prod, run `npm run deploy -- [patch|minor|major]`

:warning: Obviously, only members of the [dataesr organization](https://github.com/dataesr/) have rights to push on the repo.
