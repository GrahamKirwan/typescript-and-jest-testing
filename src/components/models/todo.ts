class Todo {
    id: string;
    text: string;

    constructor(setText: string) {
        this.id = new Date().toISOString();
        this.text = setText;
    }
}

export default Todo;