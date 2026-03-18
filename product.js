// Henter "id" fra URL
const id = new URLSearchParams(window.location.search).get("id");

// hvis ingen id i url = skriv fejl
if (id === null) {
  console.log("No ID found");
}

// Henter data (prdukterne) fra dummyjson
fetch(`https://dummyjson.com/products/${id}`)
  .then((res) => res.json())
  .then(showProduct);

// viser produktet
function showProduct(product) {
  console.log(product);

  // Vores egene bilelder
  const images = {
    // parfume billeder
    chanel: "billeder/chanel.png",
    dior: "billeder/dior.png",
    gucci: "billeder/gucci.png",
    calvin: "billeder/calvin.png",
    dolce: "billeder/dolce.png",

    // makeup billeder
    lipstick: "billeder/lipstick 1.webp",
    mascara: "billeder/mascara 1.webp",
    nail: "billeder/543 1.webp",
    powder: "billeder/image 8.webp",
    palette: "billeder/4 1.webp",
  };

  // hvis vores billeder ikke virker så tager den fra dataen
  let image = product.thumbnail;

  // Gør så det muligt at bruge vores egene billeder
  for (let key in images) {
    if (product.title.toLowerCase().includes(key)) {
      image = images[key];
    }
  }

  // Sætter billede på siden
  document.querySelector(".product-image").src = image;

  // fjerner Eau De fra parfumerne (simpel version)
  let title = product.title;

  if (title.includes("Eau De")) {
    title = title.split("Eau De")[0];
  }

  // opdeler titelen så den kommer ned på anden linje
  const words = title.split(" ");
  document.querySelector(".title-main").textContent = words[0]; // fx CHANEL
  document.querySelector(".title-sub").textContent = words.slice(1).join(" "); // resten

  // Pris
  document.querySelector(".product-price").textContent = "€" + product.price;

  // beskrivelse
  document.querySelector(".product-description").textContent =
    product.description;

  // stock
  document.querySelector(".product-stock").textContent =
    "Stock: " + product.stock;

  // --- Specifikationer
  // Info
  document.querySelector(".brand").textContent = product.brand;
  document.querySelector(".barcode").textContent = product.meta.barcode;
  document.querySelector(".sku").textContent = product.sku;
  document.querySelector(".minimum").textContent = product.minimumOrderQuantity;

  // dimensioner
  document.querySelector(".weight").textContent = product.weight + " g";
  document.querySelector(".width").textContent =
    product.dimensions.width + " cm";
  document.querySelector(".height").textContent =
    product.dimensions.height + " cm";
  document.querySelector(".depth").textContent =
    product.dimensions.depth + " cm";

  // --- Levering og retur
  document.querySelector(".warranty").textContent = product.warrantyInformation;
  document.querySelector(".shipping").textContent = product.shippingInformation;
  document.querySelector(".return").textContent = product.returnPolicy;

  // Breadcrumbs
  const categoryLink = document.querySelector(".category-link");
  const currentProduct = document.querySelector(".current-product");

  //  parfume
  if (product.category === "fragrances") {
    categoryLink.textContent = "Perfumes";
    categoryLink.href = "parfumer.html";
  }
  //  makeup
  else if (product.category === "beauty") {
    categoryLink.textContent = "Makeup";
    categoryLink.href = "makeup.html";
  }

  // Sætter produkt navnet ind i breadcrumb
  currentProduct.textContent = title;
  currentProduct.href = "#";

  // gør så class subtitle (Eau de Parfum Spray) kun er på parfumen
  const subtitle = document.querySelector(".subtitle");
  if (product.category === "beauty") {
    subtitle.style.display = "none";
  }

  // --- anmeldelser
  const reviewContainer = document.querySelector(".reviews");

  if (product.reviews && product.reviews.length > 0) {
    let reviewMarkup = "";

    product.reviews.forEach((review) => {
      reviewMarkup += `
        <article class="review">
          <h4>${review.reviewerName}</h4>
          <p>"${review.comment}"</p>
        </article>
      `;
    });

    reviewContainer.innerHTML = reviewMarkup;
  }
}
