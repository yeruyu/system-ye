document.getElementById("basicMessage").addEventListener("submit", (e) => {
    e.preventDefault()
    let strUsername = document.getElementById('username').value.toString();
    let strPassword = document.getElementById('password').value.toString();
    let strName = document.getElementById('name').value;
    let strPeriods = document.getElementById('periods').value;
    let strAge = document.getElementById('age').value;
    let strKind = document.getElementById('age').value;
    let strGroup = document.getElementById('group').value;
    let strSex = document.getElementById('sex').value;

    //正则表达式检验所填信息是否准确，密码包括大写字母，小写字母，和数字，名字只能是汉字，期数规定为1-9
    
    let regPassword = /^[0-9a-zA-Z]+$/;
    let regName = /^[\u4E00-\u9FFF]+$/;
    let regPeriods = /[1-9]/;
    
    if (!regPassword.test(strPassword))
    {
        
    }
    else if (!regName.test(strName))
    {
        
    }
    else if (!regPeriods.test(strPeriods))
    {
        
    }
    
})

document.getElementById('password').addEventListener('focus', () => {
    document.getElementById('passwordHint').style.display = 'block';
});
document.getElementById('passwordInput').addEventListener('blur', () => {
    document.getElementById('passwordHint').style.display = 'none';
});


// 创建对象存储信息
const userData = {

};


const xhr = new XMLHttpRequest();
xhr.open("POST", "");
xhr.send();

