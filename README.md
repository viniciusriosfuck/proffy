<!-- LOGO  -->
<h1 align="center" >
    <img alt="Proffy Logo" src="/public/images/logo.png" />
</h1>

<!-- SLOGAN -->
<h3 align="center">
    Your marketplace for classes
</h3>

<!-- BADGES -->
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/viniciusriosfuck/proffy?color=%2304D361">

  <img alt="Repo size" src="https://img.shields.io/github/repo-size/viniciusriosfuck/proffy">

  <a href="https://github.com/viniciusriosfuck/README-proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/viniciusriosfuck/proffy?color=%4d0000">
  </a>
    
   <img alt="License MIT" src="https://img.shields.io/badge/license-MIT-8622f8">

   <a href="https://github.com/viniciusriosfuck/proffy/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/viniciusriosfuck/proffy?style=social">
  </a>

</p>

<!-- <h1 align="center">
    <img alt="NextLevelWeek#02" title="#NextLevelWeek#02" src="/public/images/home-page.png" />
</h1> -->

<h4 align="center"> 
	Proffy - Initial Project
</h4>

<p align="center">
	<a href="#-about">About</a> |
	<a href="#-layout">Layout</a> | 
 	<a href="#-setup">Setup</a> | 
  <a href="#-resources">Resources</a>
  <a href="#-todo">TODO</a>
  <a href="#-contributions">Contributions</a> | 
 	<a href="#-author">Author</a> | 
 	<a href="#user-content--license">License</a>
</p>


## About

Proffy - It's a marketplace where anyone can offer classes as well as consult the available offers. A teacher give his contact infos (name, whatsapp, bio) and classes infos (subject, weekday and available time windows). The platform is able to record this entries on a relational database and are disposable to be queried by interested students.

Developed during the **NLW - Next Level Week#02** offered by [Rocketseat](https://rocketseat.com.br/).

---

## Layout

###  Index page
<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  	<img alt="Index page" src="/public/images/index-page-ex.png" width="100%">
</p>

###  Teacher register page

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  	<img alt="Teacher register page" src="/public/images/register-page-ex.png" width="100%">
</p>

###  Student consult page

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  	<img alt="Student consult page" src="/public/images/consult-page-ex.png" width="100%">
</p>


---

## Setup

### Recommended softwares

1. Install [Git](https://git-scm.com)
2. Use a code/text editor, the used was [VSCode](https://code.visualstudio.com/)



#### How to configure the application on the recommended softwares

```bash

# Clone this repo
$ git clone https://github.com/viniciusriosfuck/proffy

# Move to the project folder
$ cd proffy


# Install the dependencies
# on Visual Code you can do the following
# npm to run servers
$ npm install

# Start the  server
$ npm start

# The server will be started on port:5500 - access as http://localhost:5500 
```

---

## Resources

We used the following resources on this project:

1. **[HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)** - Hypertext Markup Language - structure the pages
2. **[CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)** - Cascading Style Sheets - to format the pages
3. **[JavaScript](https://www.javascript.com)** - programming language used to interact with the pages
 1. **[NodeJS](https://nodejs.org/en/)** - to run js scripts
 2. **[Nunjucks](https://github.com/mozilla/nunjucks)** - templating engine - to add code chunks to html files (v: 3.2.2)
 3. **[Express](https://expressjs.com/)** - to build web apps and APIs on js (v: 4.17.1)
 4. **[Nodemon](https://github.com/remy/nodemon)** - enables restart the server when files are updated (v: 2.0.4)
4. **[SQLite](https://www.sqlite.org/index.html)** - to create the relational database on SQL (Structured Query Language)
 1. **[Sqlite-async](https://www.npmjs.com/package/sqlite-async)** - to consult the database with js (v: 1.1.0)


> Look at the file [package.json](https://github.com/viniciusriosfuck/proffy/blob/master/package.json)


---
## TODO

1. [ ] Save the database
 * present status: as the server is closed the database is lost
2. [ ] Display the time of the offers
 * present status: only displays name, avatar, cost, bio of the teachers with offers whose time window contain the selected time
3. [ ] Deploy the app
 * present status: runs on a local server
4. [ ] Add funcionalities
 * [ ] Delete new hour entry, e.g. by miss click, is required to send the entry
 * [ ] Update the visualization counts (static on 200 visualizations) 


---
## Contributions

1. **Fork** this repo
2. Create a **branch** with the suggesting changes: `git checkout -b my-feature`
3. Save the changes and create a commit describing them: `git commit -m "feature: My new feature"`
4. Send your changes: `git push origin my-feature`

---

## Author

 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/60109015?s=460&u=941726645c23518f8cbcb9fca84ea7becc0508c5&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Vinícius Rios Fuck</b></sub>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-viniciusriosfuck-black?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/viniciusriosfuck/)](https://www.linkedin.com/in/viniciusriosfuck/) 
[![Gmail Badge](https://img.shields.io/badge/-viniciusrf1992@gmail.com-black?style=flat-square&logo=Gmail&logoColor=white&link=mailto:viniciusrf1992@gmail.com)](mailto:viniciusrf1992@gmail.com)

---

## License

This project is under the [MIT](./LICENSE.md) license.
