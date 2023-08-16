const directors = [
  {
    name: "Стивен Спилберг",
    career: "Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр",
    films:
      "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0",
    top_rated_film: "Список Шиндлера",
  },
  {
    name: "Кристофер Нолан",
    career:
      "Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор",
    films:
      "https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu",
    top_rated_film: "Начало",
  },
  {
    name: "Мартин МакДона",
    career: "Сценарист, Режиссёр, Продюсер",
    films: "https://www.film.ru/person/martin-makdonah",
    top_rated_film: "Три билборда на границе Эббинга, Миссури",
  },
  {
    name: "Алексей Балабанов",
    career: "Режиссёр, Сценарист, Актёр, Продюсер",
    films: "https://www.film.ru/person/aleksey-balabanov",
    top_rated_film: "Брат",
  },
  {
    name: "Питер Фаррелли",
    career: "Продюсер, Режиссёр, Сценарист, Актёр",
    films: "https://www.film.ru/person/piter-farrelli",
    top_rated_film: "Зелёная книга",
  },
  {
    name: "Юрий Быков",
    career: "Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер",
    films: "https://www.film.ru/person/yuriy-bykov",
    top_rated_film: "Дурак",
  },
  {
    name: "Жан-Марк Валле",
    career: "Режиссер, Продюсер, Монтажёр, Актёр, Сценарист",
    films: "https://www.film.ru/person/zhan-mark-valle",
    top_rated_film: "Далласский клуб покупателей",
  },
];

const topDirectors = document.getElementById("topDirectors");
const topFilms = document.getElementById("topFilms");
directors.forEach((director) => {
// создаем и наполняем элементы с именем, карьерой и ссылкой на фильмографию
  let directorName = document.createElement("h2");
  directorName.textContent = director.name;
  let directorCareer = document.createElement("p");
  directorCareer.textContent = director.career;
  let directorFilmsLink = document.createElement("a");
  directorFilmsLink.textContent = "фильмография";
  directorFilmsLink.href = director.films;
// создаем и наполняет див, в котором будут элементы, созданные раньше
  let directorElement = document.createElement("div");
  directorElement.append(directorName, directorCareer, directorFilmsLink);
  // directorElement.classList.add("director");
// добавляем нового режиссера на страницу
  topDirectors.append(directorElement);

});

// заполняем лучшие фильмы
// создаем заголовок
let topFilmsTitle = document.createElement("h2");
topFilmsTitle.textContent = "Лучшие фильмы этих режиссёров";
// создаем див, в котором будут лучшие фильмы
  let moviesElement = document.createElement("div");
// создаем массив с лучшими фильмами и помещаем его в див
  const topFilmsList = directors.map((director) => director.top_rated_film);
  moviesElement.textContent = `${topFilmsList.join(",  ")}`;
// добавляем загловок и список фильмов на станицу
  topFilms.append(topFilmsTitle, moviesElement);