document.addEventListener('DOMContentLoaded', () => {
    // This event listener ensures that the code inside runs only after the DOM is fully loaded.

    const resultDiv = document.getElementById('result');
    // Selects the HTML element with the id 'result' and assigns it to the variable resultDiv.

    const displayResult = (data) => {
        // This function displays the result data in the resultDiv element.
        resultDiv.style.display = 'block';
        // Sets the display style of resultDiv to 'block' to make it visible.
        resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        // Converts the data to a formatted JSON string and inserts it into resultDiv.
    };

    const hidePreviousResults = () => {
        // This function hides the resultDiv and clears its content.
        resultDiv.style.display = 'none';
        // Sets the display style of resultDiv to 'none' to hide it.
        resultDiv.innerHTML = '';
        // Clears the inner HTML of resultDiv.
    };

    const displayError = (error) => {
        // This function displays an error message in the resultDiv.
        resultDiv.style.display = 'block';
        // Sets the display style of resultDiv to 'block' to make it visible.
        resultDiv.innerHTML = `<pre style="color: red;">Error: ${error}</pre>`;
        // Inserts the error message into resultDiv with red text color.
    };

    document.getElementById('getAllPosts').addEventListener('click', () => {
        // Adds a click event listener to the element with id 'getAllPosts'.
        hidePreviousResults();
        // Calls the function to hide any previous results.
        fetch('https://jsonplaceholder.typicode.com/posts')
            // Fetches all posts from the API.
            .then(response => response.json())
            // Parses the response as JSON.
            .then(data => displayResult(data))
            // Calls the function to display the fetched data.
            .catch(error => displayError(error));
            // Catches and displays any errors that occur during the fetch.
    });

    document.getElementById('getPost10').addEventListener('click', () => {
        // Adds a click event listener to the element with id 'getPost10'.
        hidePreviousResults();
        // Calls the function to hide any previous results.
        fetch('https://jsonplaceholder.typicode.com/posts/10')
            // Fetches the post with id 10 from the API.
            .then(response => response.json())
            // Parses the response as JSON.
            .then(data => displayResult(data))
            // Calls the function to display the fetched data.
            .catch(error => displayError(error));
            // Catches and displays any errors that occur during the fetch.
    });

    document.getElementById('createPost').addEventListener('click', () => {
        // Adds a click event listener to the element with id 'createPost'.
        hidePreviousResults();
        // Calls the function to hide any previous results.
        fetch('https://jsonplaceholder.typicode.com/posts', {
            // Sends a POST request to create a new post.
            method: 'POST',
            // Specifies the HTTP method as POST.
            headers: {
                'Content-Type': 'application/json'
            },
            // Sets the Content-Type header to 'application/json'.
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            })
            // Converts the post data to a JSON string and includes it in the request body.
        })
            .then(response => response.json())
            // Parses the response as JSON.
            .then(data => {
                displayResult(data);
                // Calls the function to display the created post data.
            })
            .catch(error => displayError(error));
            // Catches and displays any errors that occur during the fetch.
    });

    document.getElementById('replacePost12').addEventListener('click', () => {
        // Adds a click event listener to the element with id 'replacePost12'.
        hidePreviousResults();
        // Calls the function to hide any previous results.
        fetch('https://jsonplaceholder.typicode.com/posts/12', {
            // Sends a PUT request to replace the post with id 12.
            method: 'PUT',
            // Specifies the HTTP method as PUT.
            headers: {
                'Content-Type': 'application/json'
            },
            // Sets the Content-Type header to 'application/json'.
            body: JSON.stringify({
                id: 12,
                title: 'Replaced title',
                body: 'Replaced body',
                userId: 1
            })
            // Converts the new post data to a JSON string and includes it in the request body.
        })
            .then(response => response.json())
            // Parses the response as JSON.
            .then(data => displayResult(data))
            // Calls the function to display the replaced post data.
            .catch(error => displayError(error));
            // Catches and displays any errors that occur during the fetch.
    });

    document.getElementById('updatePost12').addEventListener('click', () => {
        // Adds a click event listener to the element with id 'updatePost12'.
        hidePreviousResults();
        // Calls the function to hide any previous results.
        fetch('https://jsonplaceholder.typicode.com/posts/12', {
            // Sends a PATCH request to update the post with id 12.
            method: 'PATCH',
            // Specifies the HTTP method as PATCH.
            headers: {
                'Content-Type': 'application/json'
            },
            // Sets the Content-Type header to 'application/json'.
            body: JSON.stringify({
                title: 'Updated title'
            })
            // Converts the updated title to a JSON string and includes it in the request body.
        })
            .then(response => response.json())
            // Parses the response as JSON.
            .then(data => displayResult(data))
            // Calls the function to display the updated post data.
            .catch(error => displayError(error));
            // Catches and displays any errors that occur during the fetch.
    });

    document.getElementById('deletePost12').addEventListener('click', () => {
        // Adds a click event listener to the element with id 'deletePost12'.
        hidePreviousResults();
        // Calls the function to hide any previous results.
        fetch('https://jsonplaceholder.typicode.com/posts/12', {
            // Sends a DELETE request to delete the post with id 12.
            method: 'DELETE'
            // Specifies the HTTP method as DELETE.
        })
            .then(() => displayResult({ message: 'Post deleted successfully' }))
            // Calls the function to display a success message after the post is deleted.
            .catch(error => displayError(error));
            // Catches and displays any errors that occur during the fetch.
    });
});
