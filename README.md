# About
This homepage was created to showcase the results of a student project. The students built websites using HTML and CSS, which are stored in the `static` directory of this repository. While Tailwind CSS is used in some snippets, I tried to stick to pure CSS to keep the project accessible for the students.

The students' websites are displayed in a grid on the front page, organized into tabs by course.

The website is currently deployed on Vercel: https://wp2coursepage.vercel.app/ .

# Manage courses and student's pages

## Open Tabs
By default, the `CourseTabs` component will open the first non-empty course, or the first course if all are empty.
You can change this by setting the `manualStartPosition` variable in `src/routes/+page.svelte` to any `courseID`.
**This is not recommended**. If you want a specific tab to be open when sharing the page, this can be handled via the URL's searchParams, which are set automatically when a tab is opened (e.g., ...?course=2).

## Limits
The layout includes breakpoints to support all screen sizes for up to 4 courses.
5 courses are still supported on large and medium screens.

There is no limit to the number of student pages within a course.

## Adding new Studentpages and Courses
1. Add a new directory to static/studentpages/ and follow the strict naming convention: </br>
  ```
  static/studentpages/[courseID]\_[teacherName]/[studentName]\_[studentSurname]/...
  ```
  - `courseID` must be a number
  - Each student’s directory must contain a file named `index.html` or `Index.html`. </br>
  This file will be used as the homepage and linked from the grid.

2. Run `npm run generate:links` in the terminal.

3. Deploy by pushing the commit to GitHub (the site will be automatically deployed via Vercel).

### What happen's?
The script `generate-links.js` will create or replace two json files in `static/studentpages/`:
1. 'courses.json', which looks like this:
```json
[
  {
    "courseID": "1",
    "teacher": "EXAMPLE"
  },
  ...
]
```

2. 'links.json', which looks like this:
```json
[
  {
    "courseID": "1",
    "teacher": "EXAMPLE",
    "title": "Student A",
    "url": "studentpages/1_EXAMPLE/Student_A/index.html"
  },
  ...
]
```

# sv

This app is built with Svelte and svelteKit. Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
