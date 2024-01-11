# Vite Multi Bundle APP

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