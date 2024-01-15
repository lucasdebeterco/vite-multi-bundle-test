# Vite Multi Bundle APP

ES (Branch master): https://vite-multi-bundle-test.vercel.app/ <br>
IIFE (Branch iife): https://iife.d3r5xcl02ikhf3.amplifyapp.com/

Test application, creating multiple bundles on build action. Dinamically importing each bundle based on user action inside the App index.

(Branch master - ES) For recreating the 3 test bundles, change:

```
vite.config.ts

if (command !== 'build') --> if (command === 'build')
```

and run:
```
npm run build
```
