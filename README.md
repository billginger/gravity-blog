# Gravity Blog

A blog system built on Node.js microservice and micro-frontends.

## Features

Lite, Fast, SEO Friendly, Customizable, and Scalable.

## Apps

* sun: a GraphQL service for admin side and advanced themes.
* earth: a SSR service for visitor side.
* moon: a pure front-end SPA for admin side.

## Themes

### General Theme

Does not change the structure of the DOM, just style modification.

The example is a theme using BootStrap and custom CSS.

### Advanced Theme

Use SPA to change DOM structure, and use GraphQL to fetch data.

The example is a theme using React and React-Bootstrap.

## How to use

* Create `config.ts` file based on the following sample files:

```
apps/earth/src/config.example.ts
```

* Compile the source files:

```
cd earth
npm run build
```

* Run the application:

```
cd earth
npm start
```

## Development Plan

### v0.0.1 (processing)
Can publish an article in the admin side and display it in the visitor side.

### v0.0.2 (pending)
Support themes.

### v0.0.3 (pending)
Support plugin.
