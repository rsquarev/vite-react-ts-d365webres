# React + TypeScript + Vite + FluentUI v9 + Dynamic 365 WebResource

This template provides a minimal setup to create React for Dynamics 365 CRM Webresource with FluentUI v9. This template doesnt include css assets, so please leverage FluentUI themes.

This template is designed for a dialog to show using `Xrm.Navigation.navigateTo` api, which can pass `data` parameter to html thru search params. Based on dialog result, you can customize what to return back as response of `navigateTo` api.

## Rename package.json `name` (!Important)
It is important to update the `name` property in `package.json` as `name` used as application name for generating outputs.

## Build and Deploy
- Use `npm run build` to build for production which doesnt generate sourcemaps
  - `npm run devbuild` generates sourcemaps
- Deployment to D365 CRM
  - Create a HTML web resource in your solution as you do normally with the `dist/<name>.html`
  - Create a JS web resource in your solution
    - add extra `/js/` path in your resource naming (in addition to what is done for HTML webres) so relative path work on rendering html web resource
    - use `dist/js/<name>.js`
  - Publish and Start using your HTML webresource

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
