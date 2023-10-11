let emailUser = document.getElementById("email")
let passwordUser = document.getElementById("password")
let alert = document.getElementById("alert")
let btnSubmit = document.getElementById("btn-login")


btnSubmit.addEventListener("click", async (event) => {
    event.preventDefault();

    async function getUsers() {
        let respons = await fetch("https://6526212367cfb1e59ce7eae2.mockapi.io/api/users")
        let users = await respons.json()
    
        let popup = `
        <div class="alert alert-danger align-items-lg-center" role="alert">
            Email atau password salah !
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;

        let found = users.find((user) => {
            return emailUser.value === user.email && passwordUser.value === user.password;
        });

        if (found) {
            window.location.href = "landing-page.html"
            localStorage.setItem("token", found.id)
        }else {
            return alert.innerHTML += popup
        }
    }

    getUsers()
})
