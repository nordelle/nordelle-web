//  URL til parfume produkter fra dummyjson
const url = "https://dummyjson.com/products/category/fragrances";

//  henter data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProducts(data.products));

//viser alle produkter på siden
function showProducts(products) {
  // finder container i html hvor produkterne skal være
  const container = document.querySelector(".product-grid");
  let markup = "";

  // forEach går gennem alle produkter og laver dem 1 efter 1
  products.forEach((product) => {
    // gør titel til små bogstaver
    const title = product.title.toLowerCase();

    // vores egne billeder
    const images = {
      chanel: "billeder/chanel.png",
      dior: "billeder/dior.png",
      gucci: "billeder/gucci.png",
      calvin: "billeder/calvin.png",
      dolce: "billeder/dolce.png",
    };

    // hvis vores billeder ikke virker, så bruger de den fra dataen
    let image = product.thumbnail;

    //  går gennem alle vores billeder og gør det muligt at bruge
    for (let key in images) {
      if (title.includes(key)) {
        image = images[key];
      }
    }

    // css til billeder
    let imageClass = "product-image";

    // udsalg mærke
    let badge = "";
    let cardClass = "product-card";

    // udsalg på calvin klein
    if (title.includes("calvin")) {
      badge = `<span class="product-badge">Sale</span>`;
      cardClass += " product-card--sale";
    }

    // laver html for hvert produkt
    markup += `
      <article class="${cardClass}">

        ${badge}

        <!-- klik → går til product side med ID -->
        <a href="product.html?id=${product.id}">
          <div class="image-frame">
            <img src="${image}" class="${imageClass}" alt="${product.title}">
          </div>
        </a>

        <!-- tekst info -->
        <div class="product-copy">
          <h2>${product.title}</h2>
          <p>Eau de Parfum Spray</p>
          <strong>€${product.price}</strong>
        </div>

      </article>
    `;
  });

  // indsætter alt html i siden
  container.innerHTML = markup;
}
