import Task from './task'
import Project from './project'

export default class UI {

//LOAD HOMEPAGE
static loadHomepage = () => {
    UI.initNewProjectButtons()
    }

// INIT TASK BUTTONS
    
// GET PROJECT ELEMENTS

// INIT PROJECT BUTTONS
    
static initNewProjectButtons = () => {
    const newProjectButton = document.getElementById('newProjectButton');

    newProjectButton.addEventListener('click', UI.checkNewProjectPopUp);
    }


//creates popup when new project button pressed
static newProjectPopUp = () => {
    const newProjectNav = document.getElementById('new-project-nav');

    const projectButtonPopUp = document.createElement('input');
    const addProjectButton = document.createElement('button');
    addProjectButton.id = 'addProjectButton';
    addProjectButton.innerHTML = '+';
    addProjectButton.addEventListener('click', () => {
        UI.createProject();
        UI.closeProjectButtonPopUp();
    })

    const cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'X';
    cancelButton.addEventListener('click', UI.closeProjectButtonPopUp);

    newProjectNav.appendChild(projectButtonPopUp);
    newProjectNav.appendChild(addProjectButton);
    newProjectNav.appendChild(cancelButton);
}

//HELPER FUNCTIONS

static closeProjectButtonPopUp = () => {
const newProjectNav = document.getElementById('new-project-nav');
while (newProjectNav.childNodes.length > 2) {
    newProjectNav.removeChild(newProjectNav.lastChild)
}
}

//creates new project when '+' button pressed
static createProject = () => {
    const newProject = new Project('dingus',);
    alert(newProject.getName())
}

// checks for newProjectPopUp existing already, returns if it does
static checkNewProjectPopUp = () => {
const checkPopUp = document.getElementById('new-project-nav');

if (checkPopUp.childElementCount === 1) {
    UI.newProjectPopUp();
    }
return;
}

    
}