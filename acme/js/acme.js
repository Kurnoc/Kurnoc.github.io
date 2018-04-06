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

document.getElementById('navItems').onclick = function(event) {
  let NAVIGATION = event.target.innerHTML;
  console.log("NAV: " + NAVIGATION);

  if (NAVIGATION == "Anvils") {

    document.getElementById('home-content').style.display = 'none';
    document.getElementById('product-content').style.display = 'flex';
    document.getElementById('page-title').innerHTML = 'ACME Anvils'

    document.getElementById('product-picture').src = jsonData.ACMEData.Anvils.path;


    document.getElementById('product-name').innerHTML = jsonData.ACMEData.Anvils.name;


    document.getElementById('product-description').innerHTML = jsonData.ACMEData.Anvils.description;


    document.getElementById('product-manufacture').innerHTML = jsonData.ACMEData.Anvils.manufacturer;


    document.getElementById('product-review').innerHTML = jsonData.ACMEData.Anvils.reviews;


    document.getElementById('product-price').innerHTML = jsonData.ACMEData.Anvils.price;


  }else if (NAVIGATION == "Explosives"){
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('product-content').style.display = 'flex';
    document.getElementById('page-title').innerHTML = 'ACME Explosives'

      document.getElementById('product-picture').src = jsonData.ACMEData.Explosives.path;


      document.getElementById('product-name').innerHTML = jsonData.ACMEData.Explosives.name;


      document.getElementById('product-description').innerHTML = jsonData.ACMEData.Explosives.description;


      document.getElementById('product-manufacture').innerHTML = jsonData.ACMEData.Explosives.manufacturer;


      document.getElementById('product-review').innerHTML = jsonData.ACMEData.Explosives.reviews;


      document.getElementById('product-price').innerHTML = jsonData.ACMEData.Explosives.price;


    } else if (NAVIGATION == "Decoys"){
      document.getElementById('home-content').style.display = 'none';
      document.getElementById('product-content').style.display = 'flex';
      document.getElementById('page-title').innerHTML = 'ACME Decoys'

      document.getElementById('product-picture').src = jsonData.ACMEData.Decoys.path;


      document.getElementById('product-name').innerHTML = jsonData.ACMEData.Decoys.name;


      document.getElementById('product-description').innerHTML = jsonData.ACMEData.Decoys.description;


      document.getElementById('product-manufacture').innerHTML = jsonData.ACMEData.Decoys.manufacturer;


      document.getElementById('product-review').innerHTML = jsonData.ACMEData.Decoys.reviews;


      document.getElementById('product-price').innerHTML = jsonData.ACMEData.Decoys.price;

    } else if (NAVIGATION == "Traps"){
      document.getElementById('page-title').innerHTML = 'ACME Traps'
      document.getElementById('product-picture').src = jsonData.ACMEData.Traps.path;


      document.getElementById('product-name').innerHTML = jsonData.ACMEData.Traps.name;


      document.getElementById('product-description').innerHTML = jsonData.ACMEData.Traps.description;


      document.getElementById('product-manufacture').innerHTML = jsonData.ACMEData.Traps.manufacturer;


      document.getElementById('product-review').innerHTML = jsonData.ACMEData.Traps.reviews;


      document.getElementById('product-price').innerHTML = jsonData.ACMEData.Traps.price;
    } else {

      document.getElementById('home-content').style.display = 'block';
      document.getElementById('product-content').style.display = 'none';
    }
  }


