document.addEventListener('DOMContentLoaded', () => {
    const resultDiv = document.getElementById('result');

    const displayResult = (data) => {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    };

    const hidePreviousResults = () => {
        resultDiv.style.display = 'none';
        resultDiv.innerHTML = '';
    };

    const displayError = (error) => {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `<pre style="color: red;">Error: ${error}</pre>`;
    };

    document.getElementById('getAllPosts').addEventListener('click', () => {
        hidePreviousResults();
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => displayResult(data))
            .catch(error => displayError(error));
    });

    document.getElementById('getPost10').addEventListener('click', () => {
        hidePreviousResults();
        fetch('https://jsonplaceholder.typicode.com/posts/10')
            .then(response => response.json())
            .then(data => displayResult(data))
            .catch(error => displayError(error));
    });

    document.getElementById('createPost').addEventListener('click', () => {
        hidePreviousResults();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            })
        })
            .then(response => response.json())
            .then(data => {
                displayResult(data);
            })
            .catch(error => displayError(error));
    });

    document.getElementById('replacePost12').addEventListener('click', () => {
        hidePreviousResults();
        fetch('https://jsonplaceholder.typicode.com/posts/12', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 12,
                title: 'Replaced title',
                body: 'Replaced body',
                userId: 1
            })
        })
            .then(response => response.json())
            .then(data => displayResult(data))
            .catch(error => displayError(error));
    });

    document.getElementById('updatePost12').addEventListener('click', () => {
        hidePreviousResults();
        fetch('https://jsonplaceholder.typicode.com/posts/12', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Updated title'
            })
        })
            .then(response => response.json())
            .then(data => displayResult(data))
            .catch(error => displayError(error));
    });

    document.getElementById('deletePost12').addEventListener('click', () => {
        hidePreviousResults();
        fetch('https://jsonplaceholder.typicode.com/posts/12', {
            method: 'DELETE'
        })
            .then(() => displayResult({ message: 'Post deleted successfully' }))
            .catch(error => displayError(error));
    });
});
