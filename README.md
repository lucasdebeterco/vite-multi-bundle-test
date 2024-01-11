# Vite Multi Bundle APP

https://vite-multi-bundle-test.vercel.app/

Test application, creating multiple bundles on build action. Dinamically importing each bundle based on user action inside the App index.

For recreating the 3 test bundles, change:

```
vite.config.ts

if (command !== 'build') --> if (command === 'build')
```

and run:
```
npm run build
```
