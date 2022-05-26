function Task(title){//Values for object created for every other .js files
    this.id = new Date().toLocaleString();
    this.title = title;
    this.isComplete = false;
}

export default Task;