// 1. Создайте программу, которая будет добавлять посты на страницу. Для этого нам понадобится метод `POST`. Чтобы понять, какой метод использовать и как, нужно посмотреть в документации к API. У сервиса JSONplaceholder есть [документация](https://jsonplaceholder.typicode.com/), даже с [примерами запросов](https://github.com/typicode/jsonplaceholder#creating-a-resource).

//     ```jsx
//     // как сделать POST-запрос, чтобы создать пост
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8"
//         }
//       })
//       .then(response => response.json())
//       .then(json => console.log(json))

//     // то такой запрос вернёт
//     {
//       id: 101,
//       title: 'foo',
//       body: 'bar',
//       userId: 1
//     }
//
//     Вам нужно написать функцию для создания постов, в ней должен быть вызов `fetch`, с двумя обработчиками then, который:
//     - делает POST-запрос по адресу https://jsonplaceholder.typicode.com/posts ;
//     - с телом — JSON с двумя свойствами `title` и `body` ;
//     - со свойством `headers` с единственным заголовком: `'Content-Type': 'application/json; charset=UTF-8'` ;
//     - добавляет созданный пост в DOM.

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