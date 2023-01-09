export default class Task {
    constructor (name, deadline = 'no date') {
        this.name = name
        this.deadline = deadline
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setDeadline(deadline) {
        this.deadline = deadline

    }

    getDeadline() {
        return this.deadline;
    }
}
