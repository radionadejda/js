
// 2. Воспользуемся открытым API — [JSONplaceholder](https://jsonplaceholder.typicode.com/). От этого API можно получить тестовые данные: строки, данные пользователя, набор постов. И все они будут лишены смысла — это идеально для тренировки.

//     Нужно получить с сервера список постов и отобразить его на странице.

//     Создайте функции:
//     - получает на вход объект поста и возвращает строку HTML-разметки;
//     - добавляет полученную разметку в полученный контейнер;
//     - делает GET запрос по адресу `https://jsonplaceholder.typicode.com/posts` и добавит их на страницу (для этого примените метод `forEach` и функции созданные ранее).

    const blog = document.getElementById("blog");

function addPost(post) {
    const newPost = document.createElement("div");
    newPost.classList.add("post")
    const title = document.createElement("h2");
    title.textContent = `Заголовок: ${post.title}`;
    title.classList.add("h2");
    newPost.appendChild(title);
    const postText = document.createElement("p");
    postText.textContent = `Статья: ${post.body}`;
    newPost.appendChild(postText);
    postText.classList.add("post-text")
    blog.appendChild(newPost);
}

function loadPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) => {
            posts.forEach((post) => {
                addPost(post);
            });
        })
        .catch((error) => {
            console.error("Ошибка", error);
        });
}

loadPosts();