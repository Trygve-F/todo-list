import Project from './project';
import Task from './task';
import UI from './UI';

const test = () => {
    const array = []
        const well = new Task('dishes',)
        const werent = new Task('sponge',)
        array.push(well)
        array.push(werent)
        console.log(well.getName())
        well.setName('wing')
        console.log(well.getName())
        console.table(array)
        console.log(well.getName())
    }
    
    const npb = document.getElementById('onclick', test)
    console.log('ww')
