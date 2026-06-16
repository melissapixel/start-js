// case: С бэкенда пришел массив из 50 постов. Чтобы не перегружать DOM, мы рендерим их по 10 штук на странице.
const allPosts = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6", "Post 7", "Post 8", "Post 9", "Post 10", "Post 11"];

function getPaginatedPosts(posts, page=1, limit=5) {
    if (page === 1) {
        return posts.slice(0, limit);
    }
    else if (page === 2) {
        return posts.slice(limit, limit+limit);
    }
}

console.log(getPaginatedPosts(allPosts, 2));