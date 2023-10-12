fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => loadComments(data))


function loadComments(comments) {
    const postsContainer = document.getElementById('comment-container');
    for (const comment of comments) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="p-8 space-y-4 border-2 border-cyan-200 rounded-lg h-full">
            <h4 class="font-medium text-xs">Comment No. ${comment.id}</h4>
            <h3 class="font-medium text-lg text-justify">${comment.body}</h3>
            <h4 class="font-extrabold text-xl">Name: ${comment.name}</h4>
            <h5 class="text-xs">Commented from <span class="font-bold text-xl">${comment.email}</span></h5>
        </div>`
        postsContainer.appendChild(div);
    }
}