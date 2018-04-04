let jsonData;

getData();

function getData() {

  const URL = "/acme/js/acme.json";
  fetch(URL)
    .then(response => response.json())
    .then(function (data) {
      console.log('Json object from getData function');
      // JSON being saved as the variable 'data'
      jsonData = data;
      putNav();
      displayProduct();
    })
    .catch(error => console.log('There was an error: ', error))
}


function putNav() {

  // jsonData.Navigation[0];
  for (i = 0; i < jsonData.ACMEData.Navigation.length; i++) {

    let nav = document.getElementById('navItems');
    let item = document.createElement('li');

    item.appendChild(document.createTextNode(jsonData.ACMEData.Navigation[i]));
    nav.appendChild(item);

    console.log(jsonData.ACMEData.Navigation[i]);

  }
}

function displayProduct() {
  document.getElementById('product-picture').src = jsonData.ACMEData.Anvils.path;
  console.log("Displaying Product Picture");

  document.getElementById('product-name').innerHTML = jsonData.ACMEData.Anvils.name;
  console.log("Displaying Product Name");

  document.getElementById('product-description').innerHTML = jsonData.ACMEData.Anvils.description;
  console.log("Displaying Product Description");

  document.getElementById('product-manufacture').innerHTML = jsonData.ACMEData.Anvils.manufacturer;
  console.log("Displaying Product Manufacturer");

  document.getElementById('product-review').innerHTML = jsonData.ACMEData.Anvils.reviews;
  console.log("Displaying Product Reviews");

  document.getElementById('product-price').innerHTML = jsonData.ACMEData.Anvils.price;
  console.log("Displaying Product Price")

}
