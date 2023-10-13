let inputName = document.getElementById("name")
let inputSchool = document.getElementById("school")
let inputPassword = document.getElementById("inputPassword")
let inputEmail = document.getElementById("inputEmail")
let confirmPassword = document.getElementById("confirmPassword")
let btnSubmit = document.getElementById("btn-submit")
let alertRegister = document.getElementById("alert-register")

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault()
    let newUser = {
        name : inputName.value,
        email : inputEmail.value,
        password : inputPassword.value,
        school : inputSchool.value,
    };

    let popupSuccess = `
    <div class="alert alert-success d-flex justify-content-between" role="alert">
        Account created successfully!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;

    let popupFailed = `
    <div class="alert alert-danger d-flex justify-content-between" role="alert">
        Failed to create an account
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;

    console.log(newUser);
    
    if(newUser.password === confirmPassword.value) {
        fetch("https://6526212367cfb1e59ce7eae2.mockapi.io/api/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          }).then((res) => {
            console.log(res);
            return alertRegister.innerHTML += popupSuccess
          });
        } else {
            return alertRegister.innerHTML += popupFailed
        }
});