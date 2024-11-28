// Get Element
const inputBox = document.getElementById("inputBox");
const list = document.getElementById("list-container");

// Function for add task when click button and check if input is empty

function addTask() {
    if (inputBox.value === '') {
        alert("write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; // Reset value
    saveData();
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("date", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("date") || "";
}

showTask();
