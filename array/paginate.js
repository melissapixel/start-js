// case: С бэкенда пришел массив из 50 постов. Чтобы не перегружать DOM, мы рендерим их по 10 штук на странице.
const allPosts = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6", "Post 7", "Post 8", "Post 9", "Post 10", "Post 11"];

function getPaginatedPosts(posts, page=0, limit=3) {
    let start = page * limit;
    let and = start + limit;

    return posts.slice(start, and);
}

console.log(getPaginatedPosts(allPosts, 2));