export const fetchTodos = () => {
    return fetch('https://uetcc-todo-app.herokuapp.com/draft')
        .then(response => {
            return response.json();
        });
};

export const createTodo = (text) => {
    const url = 'https://uetcc-todo-app.herokuapp.com/draft';
    const request = new Request(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            title: text
        })
    });

    return fetch(request)
        .then(response => {
            return response.json();
        });
};