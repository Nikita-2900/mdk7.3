const tickets = [
    {title: "Проектор не включается", room: "203", category: "Оборудование", done: false},
    {title: "Не закрывается окно", room: "105", category: "Аудитория", done: false},
    {title: "В коридоре не горит свет", room: "Коридор, 2-й этаж", category: "Другое", done: true},
]

const trouble_id = document.getElementById("trouble-id")
const room_id = document.getElementById("room-id")
const category_id = document.getElementById("category-id")
const add_button = document.getElementById("add-button")
const tickets_id = document.getElementById("tickets-id")
const message = document.getElementById("message")

function renderTickets() {
    tickets_id.innerHTML = ""
    tickets.forEach(x => {
        const li = document.createElement("li")
        let done = ""
        if(x.done === true) {
            done = "Выполнена"
        }
        else {
            done = "Открыта"
        };
        li.textContent = `Проблема: ${x.title}, Место: ${x.room}, Категория: ${x.category}, Статус: ${done}`
        tickets_id.append(li)
    })
};
renderTickets();


add_button.addEventListener('click', () => {
    const new_obj = {title: "", room: "", category: "", done: false}
    if (trouble_id.value.trim() == "" || room_id.value.trim() == "" || category_id.value === "") {
        message.textContent = "Вы заполнили не все поля"
    }
    else {
        new_obj.title = trouble_id.value
        new_obj.room = room_id.value
        new_obj.category = category_id.value
        tickets.push(new_obj)
        renderTickets();
        trouble_id.value = ""
        room_id.value = ""
        category_id.value = ""
        message.textContent = ""
    }
});