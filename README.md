# Vite Multi Bundle APP

es: https://vite-multi-bundle-test.vercel.app/
iife: https://iife.d3r5xcl02ikhf3.amplifyapp.com/

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
