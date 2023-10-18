let listArtikel = document.getElementById("artikel")
async function getArtikel () {
    try { 
      let respons = await fetch("https://652e2b79f9afa8ef4b28226a.mockapi.io/artikel")
      let artikels = await respons.json()
  
      artikels.map((item, index) => {
        let cardArtikel = `
        <div class="col-3">
        ${item.judul}
        <div class="col-sm-9 p-3">
            ${item.isi}
        </div>
      </div>
      <a id="link" href="https://skilvul.com" class="cta-button">Baca Selengkapnya</a>
      </div>
      <img src="assets/${item.image}" class="img-artikel col-md-6 float-md-end mb-3 ms-md-3 col-sm-12" alt="." width="350">
        `
        listArtikel.innerHTML += cardArtikel
      })
  
    } catch (error) {
      console.log(error);
    }
  }
  
  getArtikel()