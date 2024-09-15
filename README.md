# Vite Multi Bundle APP

ES (Branch master): https://vite-multi-bundle-test.vercel.app/ <br>
IIFE (Branch iife): https://iife.d3r5xcl02ikhf3.amplifyapp.com/

Test application, creating multiple bundles on build action. Dinamically importing each bundle based on user action inside the App index. This application was developed by me to solve a problem we faced when we decided to componentize parts of our website to run on React.js. We needed a project structure in which all product page templates were in the same repository (only with different entrypoints), but the bundles needed to be generated separately. When I created this structure and applied it to our product models, it was possible to proceed with all componentization projects for areas of the website (product, footer, headers, etc..), this structure is now used within the company in all site projects and the 2400+ customer websites.

(Branch master - ES) For recreating the 3 test bundles, change:

```
vite.config.ts

if (command !== 'build') --> if (command === 'build')
```

and run:
```
npm run build
```
