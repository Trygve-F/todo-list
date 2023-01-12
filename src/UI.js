import Task from './task'
import Project from './project'

export default class UI {

//LOAD HOMEPAGE
static loadHomepage = () => {
    UI.initNewProjectButtons();
    UI.initNewTaskButtons();
    }

// INIT TASK BUTTONS
static initNewTaskButtons = () => {
    const newTaskButton = document.getElementById('new-task-button');
    newTaskButton.addEventListener('click', UI.checkNewTaskPopUp)
}

static checkNewTaskPopUp = () => {
    
    const newTaskNav = document.getElementById('new-task-nav');

    if (newTaskNav.childElementCount === 1) {
        UI.newTaskPopUp();
        }
    return;
}

static newTaskPopUp = () => {
    const newTaskNav = document.getElementById('new-task-nav');
    
    const newTaskPopUp = document.createElement('input');
    newTaskPopUp.id = 'new-task-popup';

    const newTaskAddButton = document.createElement('button');
    newTaskAddButton.innerHTML = ' + ';
    newTaskAddButton.addEventListener('click', () => {
        UI.createTask();
        UI.closeNewTaskPopUp();

})


    const newTaskCancel = document.createElement('button');
    newTaskCancel.innerHTML = 'X';
    newTaskCancel.addEventListener('click', UI.closeNewTaskPopUp);
    

    newTaskNav.appendChild(newTaskPopUp);
    newTaskNav.appendChild(newTaskAddButton);
    newTaskNav.appendChild(newTaskCancel);
}


static closeNewTaskPopUp = () => {
    const newTaskNav = document.getElementById('new-task-nav');
    while (newTaskNav.childNodes.length > 2) {
    newTaskNav.removeChild(newTaskNav.lastChild)
}
}

static checkDuplicateTasks = () => {
    //
    createTask();
}

static createTask = () => {
    alert('wow');
}

// INIT PROJECT BUTTONS
    
static initNewProjectButtons = () => {
    const newProjectButton = document.getElementById('new-project-button');

    newProjectButton.addEventListener('click', UI.checkNewProjectPopUp);
    }

static newProjectPopUp = () => {
    const newProjectNav = document.getElementById('new-project-nav');

    const newProjectPopUp = document.createElement('input');
    const newProjectAddButton = document.createElement('button');
    newProjectAddButton.id = 'newProjectAddButton';
    newProjectAddButton.innerHTML = '+';
    newProjectAddButton.addEventListener('click', () => {
        UI.createProject();
        UI.closeProjectButtonPopUp();
    })

    const newProjectCancel = document.createElement('button');
    newProjectCancel.innerHTML = 'X';
    newProjectCancel.addEventListener('click', UI.closeProjectButtonPopUp);

    newProjectNav.appendChild(newProjectPopUp);
    newProjectNav.appendChild(newProjectAddButton);
    newProjectNav.appendChild(newProjectCancel);
}

static closeProjectButtonPopUp = () => {
const newProjectNav = document.getElementById('new-project-nav');
while (newProjectNav.childNodes.length > 2) {
    newProjectNav.removeChild(newProjectNav.lastChild)
}
}

static checkNewProjectPopUp = () => {
const checkPopUp = document.getElementById('new-project-nav');

if (checkPopUp.childElementCount === 1) {
    UI.newProjectPopUp();
    }
return;
}

//PAGE FUNCTIONS

static createProject = () => {
    const newProject = new Project('dingus',);
    alert(newProject.getName())
}

    
}