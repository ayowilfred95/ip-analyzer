# cisco-starter-repo
Jumping off point for Cisco's backend Forage program
In this task, you will begin work on the Sextant frontend. First, let's take some time to think through how it should look. We know that the site needs to display two primary data points: the user's public IP and latency information for Pylon. Furthermore, we understand that these requirements are likely to change frequently in the future—namely, additional data points will also need to be displayed. While we don't know what these data points will be, we can prepare for them by investing in the extensibility of our site. We define extensibility in a software context as the ability of a system to grow and change over time with minimal additional effort. In the case of Sextant, we can enhance extensibility by creating reusable React components—we can define a component once, then add it to our site several times, each with different data to display. Take some time to sketch out a few ideas for how the site should look. It must include the following:

A banner with a title at the top of the page.
A card style component for each data point to be visualized.
Aside from these requirements, the site’s design is up to you. Don’t forget to make it visually appealing!




Start by serving your React app by running npm start from the sextant directory of your project repo.
Next, let’s change the website’s title, the text in your browser tab. Navigate to sextant/public/index.html and change the `title` content to something appropriate.
We're going to pair down your workspace so it only contains files we will focus on in this program.
Delete sextant/src/logo.svg, sextant/src/App.test.js, and sextant/README.md
Remove all lines related to logo.svg in sextant/src/App.js. Since we removed the file earlier, your site won’t compile unless you remove all references to that file. You can also take this opportunity to remove the boilerplate welcome text create-react-app generates. We won’t need the App-header div or the App-intro paragraph (these are also in sextant/src/App.js). 
Take a moment to review the remaining files in your workspace. You should have the following:
Package-lock.json and the node_modules directory. Both of these are fully managed by npm and used to track the state of all project dependencies. Never modify these directly unless you know what you're doing, and even then, it's inadvisable.
Package.json. Npm uses this file to store its configuration. It contains information on how to initialize the project, required dependencies, and even a few handy scripts for interacting with create-react-app. If you want to add a dependency, change the project name, etc., this is the place to do it.
Public directory. This directory effectively contains the entry point for our app. It holds the HTML necessary to bootstrap the page when loaded by a browser. Since we're using React, we will add content to the page using React Components rather than raw HTML.
Src directory. This directory contains the bulk of your website’s code. Most of the changes we’ll make throughout this program will occur in this directory. Right now, it should contain four files, two stylesheets (responsible for determining how to render content), and two JavaScript files. Take a moment to review src/index.js. Notice that it contains a single call to the react engine, kindly asking it to render an App component. This line effectively bootstraps your website, linking your root component, App, to the index.html file. If you open up src/App.js, you’ll see the site’s actual content.
Now that you have a feel for what you’re working with, let’s start adding content to the site.
Create a banner component at the top of the page which displays the site’s title.
Create an exhibit component that displays a heading and any child components. This component will wrap the components we create in the following tasks—think of it as a pretty container to logically separate different data points. It can take any form you like, from a card to a panel with multiple tabs. Make it your own!
When finished, commit and push your changes, and submit a link to your GitHub repo below.