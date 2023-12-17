// 1. Добавление новой задачи

const form = document.getElementById("addForm");
const itemsList = document.getElementById("items");
const filter = document.getElementById("filter");


/* Прослушки */
// Добавление новой задачи
form.addEventListener("submit", addItem);

//Удаление элемента из списка
itemsList.addEventListener("click", removeItem);

// Фильтрация - прослушка ввода
filter.addEventListener("keyup", filterItems);


/* Функции */
// function addItem(e) {
// Оменяем отрпавку формы по нажатию на "Добавить"
//   e.preventDefault();
// Находим инпут по айди, где вводится текст новой задачи
//   let newItemInput = document.getElementById("newItemText");
// Получаем текст из инпута
//   let newItemText = newItemInput.value;
//Создаем элемент для новой задачи
//   let newElement = document.createElement("li");
// Добавляем внутрь класс "list-group-team"
//   newElement.className = "list-group-item";
// Добавим текст в новый элемент
//   let newTextNode = document.createTextNode(newItemText);
// Помещяем текст в элемент li
//   newElement.appendChild(newTextNode);
// Создаем кнопку "удалить"
//   let deleteBtn = document.createElement("button");
// Сокращаем до одной команды добавление текста во внутрь кнопки
//   deleteBtn.appendChild(document.createTextNode("Удалить"));
// Добавим класс новому элементу кнопке "удалить"
//   deleteBtn.className = "btn btn-light btn-sm float-right";
// Добавляем data-атрибут
//   deleteBtn.dataset.action = "delete";
// Добавляем кнопку во внутрь нового элемента "li"
//   newElement.appendChild(deleteBtn);
// Добавляем новый готовый элемент в список на страницу
//   itemsList.prepend(newElement);
// console.log(newElement);
//   newItemInput.value = "";
// }

// Функция добавления новой задачи
function addItem(e) {
  e.preventDefault();
  const newItemText = document.querySelector("#newItemText").value;
  const newElement = document.createElement("li");
  newElement.classList.add("list-group-item");
  newElement.insertAdjacentHTML(
    "beforeend",
    `${newItemText} <button class="btn btn-light btn-sm float-right" data-action="delete">Удалить</button>`
  );
  itemsList.prepend(newElement);
  document.getElementById("newItemText").value = "";
}

// Функция удаления новой задачи
function removeItem(e) {
  if (
    e.target.hasAttribute("data-action") &&
    e.target.getAttribute("data-action") === "delete"
  ) {
    if (confirm("Вы действительно хотите удалить задачу из списка дела?")) {
      e.target.parentElement.remove();
    }
  }
}

// Функция фильтрации
function filterItems(e) {
  //Получаем фразу для поиска и переводим ее в нижний регистр
  let searchText = e.target.value.toLowerCase();

  // 1. Получаем список всех задач
  const items = itemsList.querySelectorAll("li");

  // Перебираем циклом все найденные теги li
  items.forEach((item) => {
    // Получаем текст задачи из списка и переводим его в нижний регистр 
    let itemText = item.firstChild.textContent.toLowerCase();
    // Проверяем имеется ли вводимая подстрока в списке задач
    if (itemText.indexOf(searchText) != -1) {
      // Если вхождение есть - показываем элемент с задачей
      item.style.display = "block";
    } else {
      // Если нет - скрываем элемент с задачей
      item.style.display = "none";
    }
  }); // console.log(items);
}
