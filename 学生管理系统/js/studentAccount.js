let button = document.getElementById("enroll");
button.addEventListener('click', () => {
    let enrollUrl = "studentEnroll.html";
    window.location.href = enrollUrl;
});

document.getElementById("forget").addEventListener('click', () => {
    document.getElementById("forget_password").classList.remove('hidden');

});
