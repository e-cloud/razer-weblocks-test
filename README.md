# Razer weblocks test

## type checking

see `src/index.ts`.

## Problem solving skills(answers)

1. see the solution in `types/static.d.ts`, and the testing code in `src/index.ts`

2. to make developer easier, the solution I could come up with, is to use **a http server(like nginx)** and map those various port to another origin's path

for example
```
localhost:8080
localhost:8081
localhost:8082
```
map to
```
localhost/8080
localhost/8081
localhost/8082
```

3. see script code in `public/index.html`, just enable the windowFeatures **noopener**, tested in Firefox and Chromium family!