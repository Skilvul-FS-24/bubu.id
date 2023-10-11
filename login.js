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
        <div class="alert alert-danger" role="alert">
            Email atau password salah !
        </div>
        `;
    
        users.find((user, index) => {
            if (emailUser.value === user.email && passwordUser.value === user.password){ 
                window.location.href = "index.html"
            }else{
                return alert.innerHTML += popup
            }
        })
    }

    getUsers()
})
