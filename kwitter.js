function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
}
function showPw()
{
    pw = document.getElementById("password").value;
    document.getElementById("sp").innerHTML = pw;
}