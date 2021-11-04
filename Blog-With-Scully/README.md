# MyBlog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.
This project is an example of how to combine Angular framework with Scully library.
I followed feature based modules approach with lazy loading.

## File Structure

`src/app/core` -> contains commonly used components that are fixed like header navigation.
`src/app/shared` -> contains shareable components
`src/app/contact` ->  contains flat structure for contact component
`src/app/artciles` ->  contains flat structure for articles component with scully selector in html file


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
