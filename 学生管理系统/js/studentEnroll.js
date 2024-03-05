document.getElementById("basicMessage").addEventListener("submit", (e) => {
    e.preventDefault();
    let strPassword = document.getElementById('password').value.toString();
    let strName = document.getElementById('name').value;
    let strPeriods = document.getElementById('periods').value;
    let strAge = document.getElementById('age').value;
    let strKind = document.getElementById('age').value;

    //正则表达式检验所填信息是否准确，密码包括大写字母，小写字母，和数字，名字只能是汉字，期数规定为1-9
    
    let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let regName = /^[\u4E00-\u9FFF]+$/;
    let regPeriods = /[1-9]/;
   
    document.getElementById("password").addEventListener("input", () => {
        let password = this.value.toString();
        let passwordError = document.getElementById("passwordError");
        if (!regPassword.test(password)) {
            passwordError.textContent = "密码不符合要求";
        }
        else {
            passwordError.textContent = "";
        }
    });
});

//设置密码的提示信息
document.getElementById('password').addEventListener('focus', () => {
    document.getElementById('passwordHint').style.display = 'block';
});
document.getElementById('password').addEventListener('blur', () => {
    document.getElementById('passwordHint').style.display = 'none';
});

document.getElementById("basicMessage").addEventListener("submit", (event) => {
    event.preventDefault();

    const stuMessage = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        periods: document.getElementById("periods").value,
        name: document.getElementById("name").value,
        age:document.getElementById("age").value,
        sex: document.getElementsByName("sex").value,
        kind: document.getElementById("kind").value,
        group: document.getElementById("group").value,
    };
    JSON.stringify(stuMessage);
    axios.post("", stuMessage)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
});