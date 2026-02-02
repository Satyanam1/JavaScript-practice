
function userLogin(){
    let myName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    localStorage.setItem('name',myName);
    localStorage.setItem('email',email);
}