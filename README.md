# My Portfolio

A React site that shows the projects I built.

This portfolio documents my progress through CodeX Academy and the skills I am building.

| Component | What it shows | Where its values come from | What it remembers | What it receives |
| --- | --- | --- | --- | --- |
| `Hero` | my hero photos | `heroPhoto`, which calls `imageUrl` | which photo is showing, and whether it is in color | - |
| `About`         | information about me                                           | typed into JSX                        | -                                      | -                                                                                           
| `ProjectCard` | 5 projects: the project name, description, details, and two links | `projects.js`, through `App` | its likes, and whether it shows more | `project` |
| `Footer`        | copyright and year                                             | current year                          | -                                      |                                                                                                  |
| `PhotoControls` | the hero's buttons | `Hero` | - | `onNext`, `onPrevious`, `onColor`, `onBlackAndWhite` |


## What I'm adding next

- More Projects
- Better Css

## Built with

React, Vite, Bun, and Pico CSS.