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
        }
        li.textContent = `Проблема: ${x.title}, Место: ${x.room}, Категория: ${x.category}, Статус: ${done}`
        tickets_id.append(li)
    })
}
renderTickets()