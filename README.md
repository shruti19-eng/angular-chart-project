# ChartAssignment

## Project Overview
This project is a reusable and configurable chart component built using Angular. The component dynamically renders different types of charts based on input configuration without using any external charting libraries.
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.5.

The goal of this assignment was to:

- Build a reusable <io-chart> component 
- Render multiple chart types dynamically 
- Use pure Angular, TypeScript, HTML, CSS, and SVG 
- Follow clean architecture and best practices

## Project Structure 
src/
 └── app/
      ├── chart/
      │    ├── chart.component.ts
      │    ├── chart.component.html
      │    ├── chart.component.scss
      │    └── chart-options.model.ts
      ├── app.ts
      └── app.html
      
## The component supports: 
📈 Line Chart 📊 Column Chart 🥧 Pie Chart

## Tools & Technologies Used
- Angular (Standalone Components) 
- TypeScript 
- HTML5 
- SCSS 
- SVG (for Line & Pie charts) 
- CSS Flexbox (for Column chart layout)
No external chart libraries were used.

## Implementation Details
- Created a reusable ChartComponent
- Used @Input() for dynamic configuration
- Implemented OnChanges lifecycle hook for recalculating chart values
- Built custom SVG path logic for pie chart arcs
- Implemented dynamic scaling for line and column charts
- Added hover effects and legend support
- Handled edge cases (empty data, single data point, zero values)
- Designed responsive and clean UI

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## 📷 Screenshots

### Line Chart
![Line Chart](https://drive.google.com/file/d/1gFN_2__52_sYDd-YKhf_Bz5AgBimun5O/view?usp=drive_link)

### Column Chart
![Column Chart](https://drive.google.com/file/d/16riQ2ZN29PSH62B217YPaVQIUoucbU2C/view?usp=drive_link)

### Pie Chart
![Pie Chart](https://drive.google.com/file/d/1gFN_2__52_sYDd-YKhf_Bz5AgBimun5O/view?usp=drive_link)

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
