import Task from './task'
import Project from './project'

const projectArray = []

export default class UI {


//LOAD HOMEPAGE
static loadHomepage = () => {
    UI.initNewProjectButtons();
    UI.initNewTaskButtons();
    UI.initDefaultProjects();
    UI.renderProjects();
    };

// INIT TASK BUTTONS
static initNewTaskButtons = () => {
    const newTaskButton = document.getElementById('new-task-button');
    newTaskButton.addEventListener('click', UI.checkNewTaskPopUp);
};

static checkNewTaskPopUp = () => {
    
    const newTaskNav = document.getElementById('new-task-nav');

    if (newTaskNav.childElementCount === 1) {
        UI.newTaskPopUp();
        }
    return;
};

static newTaskPopUp = () => {
    const newTaskNav = document.getElementById('new-task-nav');
    
    const newTaskPopUp = document.createElement('input');
    newTaskPopUp.id = 'new-task-popup';

    const newTaskAddButton = document.createElement('button');
    newTaskAddButton.innerHTML = ' + ';
    newTaskAddButton.addEventListener('click', () => {
        UI.addTaskToArray();
        UI.closeNewTaskPopUp();
});


    const newTaskCancel = document.createElement('button');
    newTaskCancel.innerHTML = 'X';
    newTaskCancel.addEventListener('click', UI.closeNewTaskPopUp);
    

    newTaskNav.appendChild(newTaskPopUp);
    newTaskNav.appendChild(newTaskAddButton);
    newTaskNav.appendChild(newTaskCancel);
};


static closeNewTaskPopUp = () => {
    const newTaskNav = document.getElementById('new-task-nav');
    while (newTaskNav.childNodes.length > 2) {
    newTaskNav.removeChild(newTaskNav.lastChild)
    };
};


static addTaskToArray = () => {
    //find active project
    //add task to active projects array
    const taskArray = []
    

};

// INIT PROJECT BUTTONS
    
static initNewProjectButtons = () => {
    const newProjectButton = document.getElementById('new-project-button');

    newProjectButton.addEventListener('click', UI.checkNewProjectPopUp);
    }; 

static newProjectPopUp = () => {
    const newProjectNav = document.getElementById('new-project-nav');

    const newProjectInput = document.createElement('input');
    newProjectInput.id = 'new-project-input'
    const newProjectAddButton = document.createElement('button');
    newProjectAddButton.id = 'new-project-add-button';
    newProjectAddButton.innerHTML = '+';
    newProjectAddButton.addEventListener('click', () => {
        UI.addProjectToArray();
        UI.renderProjects();
        UI.closeProjectButtonPopUp();
    });

    const newProjectCancel = document.createElement('button');
    newProjectCancel.innerHTML = 'X';
    newProjectCancel.addEventListener('click', UI.closeProjectButtonPopUp);

    newProjectNav.appendChild(newProjectInput);
    newProjectNav.appendChild(newProjectAddButton);
    newProjectNav.appendChild(newProjectCancel);
};

static closeProjectButtonPopUp = () => {
    const newProjectNav = document.getElementById('new-project-nav');
    while (newProjectNav.childNodes.length > 2) {
        newProjectNav.removeChild(newProjectNav.lastChild);
    };
};

static checkNewProjectPopUp = () => {
    const checkPopUp = document.getElementById('new-project-nav');

    if (checkPopUp.childElementCount === 1) {
        UI.newProjectPopUp();
        };
    return;
};

//PROJECTS CONTAINER

static initDefaultProjects = () => {
    projectArray.push(new Project('Today'));
    projectArray.push(new Project('This Week'));
    }



static getProjectInputValue = () => {
    const value = document.getElementById('new-project-input').value;
    return value;
}

static addProjectToArray = () => {
    const value = UI.getProjectInputValue();
    projectArray.push(new Project(value));
}

static renderProjects = () => {
    const container = document.getElementById('new-project-container')
    container.innerHTML = '';
    projectArray.forEach((e) => {
        const temp = document.createElement('div');
        temp.innerHTML = e.getName();
        container.appendChild(temp)
        })
}

 
};





/* static createDefaultProjects = () => {
    const projectArray = []
    projectArray.push(new Project('Today'));
    projectArray.push(new Project('This Week'));

    projectArray.forEach((e) => {
        alert(e.getName())
    })
} */
