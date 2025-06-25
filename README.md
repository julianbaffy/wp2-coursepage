# Manage courses and student's pages

## Open Tabs
By default CourseTabs will open the first non-empty course or the first course, if all are empty. You can change that, by setting the "startPosition" for the CourseTabs component in src/routes/+page.svelte. This ist not recommended. If you just want a specific tab to be open when sharing the page, this is handeled by the searchParams which are set by opening a tab. (e. a. .../course=2).

## Limits
The Layout has breakpoints to make it work on all devices for up to 4 courses. 5 Courses still work on big and medium large screens.

There is no limit to the amount of student's pages whithin a course.

## Adding new Studentpages and Courses

1. Add a new directory to static/studentpages/ and follow strictly the naming convention:
    - static/studentpages/[courseID]\_[teacherName]/[studentName]\_[studentSurname]/...   Where courseID is a number.
    - in the student's directories shall be one file 'index.html' or 'Index.html'. The path to this file is saved as url and linked on the page.
2. run `npm run generate:links` in terminal
3. deploy by pushing commit to github (it is then deployed on Vercel)

### What happen's?
generate-links.js will create or replace two json files in static/studentpages/
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

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

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
