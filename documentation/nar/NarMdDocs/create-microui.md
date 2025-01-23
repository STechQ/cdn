---
id: create-microui
title: Create microUI Project
---

Creating a microUI project involves using Node.js 

- **Install Npm and Node.js:** To make your system ready to start developing a UI application, Nodejs and Npm must be installed on the computer. The Node.js installer includes the NPM, therefore installing Node.js will be adequate. To download a suitable Node.js installer for your system, click [Here](https://nodejs.org/) 

- **Install NVM:** Use **13.12.0** Node version. NVM must be used to install the 13.12.0 node version. For more detailed information, click <a href="https://docs.onplateau.com/Export/Uncompiled-Export/using-nvm" target="_blank">See More</a>.

- **Install symphony-cli:** During the development phase of an application, microUI project will need **Symphony-cli**. Symphony-cli is a CLI(command-line interface) tool which helps and meets end to end requirements to develop and release a UI Application. To learn how to install and use the Symphony-cli tool, click <a href="https://docs.onplateau.com/Export/Uncompiled-Export/install-symphony-cli" target="_blank">Here</a>.

- Connect **openVpn**

- Define the nexus address in the C:\Users\\**[USERNAME]**\\.npmrc file as follows.

    registry=http://nexus.rally.softtech/repository/rally-npm/ 



- Go to the folder where the project was requested to be created, right-click in the folder and open **Git Bash** by going to **Git Bash Here**.

    <img src="https://stechq.github.io/cdn/documentation/ui-create/git-bash.png" />

- In **Git Bash**, use the command **symphony-cli mui-create [moduleName]** to create microUI project.

> the moduleName (root project name)
```js
symphony-cli mui-create moduleName  
```
<br/>    
    <img src="https://stechq.github.io/cdn/documentation/ui-create/microui-create-help.png" width="640" />
    <br/>
    <br/>
    <img src="https://stechq.github.io/cdn/documentation/ui-create/microui-create.png" width="640" />
    <br/>

- Open the UI project with **Visual Studio Code**. Go to the <a href="https://code.visualstudio.com/download" target="_blank">**Visual Studio Code**</a> to download.

- Write the latest versions of the following  package in the **package.json** file of the project.
    ```json
    "devDependencies": {
    "microuiexternal": "^1.0.959139"
    }
    ```
    <img src="https://stechq.github.io/cdn/documentation/ui-create/microui-project.png" width="640" />


- On the terminal of the project, run the **npm install** code command. Running npm install in the root directory of your project will install all the dependencies listed in the package.json file into the node_modules folder.

    <img src="https://stechq.github.io/cdn/documentation/ui-create/microui-npm-install.png" width="640" />

- On the terminal of the project, run the  **npm run qbuild** code command to build your microUI project.

    <br/>
    <img src="https://stechq.github.io/cdn/documentation/ui-create/microui-npm-run-qbuild.png" width="640" />
    <br/>



