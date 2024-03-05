let button = document.getElementById("enroll");
button.addEventListener('click', () => {
    let enrollUrl = "studentEnroll.html";
    window.location.href = enrollUrl;
});

document.getElementById("forget").addEventListener('click', () => {
    document.getElementById("forget_password").classList.remove('hidden');

});

document.getElementById("stuMessage").addEventListener("submit", (event) => {
    event.preventDefault();

    //定义学生登录信息    
    const stuData = {
        username: JSON.stringify(document.getElementById("account").value),
        password: JSON.stringify(document.getElementById("pwd").value),
    };
    //发送到后端进行验证
    axios.post("", stuData)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
});
