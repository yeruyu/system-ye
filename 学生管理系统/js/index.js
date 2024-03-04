function replaceBox() {
    let box1 = document.getElementById("student");
    let box2 = document.getElementById("admin");

    box1.classList.add("hidden");
    box2.classList.remove("hidden");
}
function replaceStu() {
    let box1 = document.getElementById("student");
    let box2 = document.getElementById("admin");

    box1.classList.remove("hidden");
    box2.classList.add("hidden");
}


let buttonStu = document.getElementById("image_stu");
buttonStu.addEventListener('click', () => {
    let targetUrl = "studentAccount.html";
    window.location.href = targetUrl;
});

let buttonAdmin = document.getElementById("admin_button");
buttonAdmin.addEventListener('click', () => {
    let targetUrl = "";
    window.location.href = targetUrl;
});

