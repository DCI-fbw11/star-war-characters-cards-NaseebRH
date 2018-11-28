
var pageNumber = 1;
document.getElementById('btn').onclick = click;

function click() {
  changePage();
}

function changePage() {
  //let user = $('#input').val();

  //let user = document.getElementById('input').value;
  let url = `https://swapi.co/api/people/?page=${pageNumber}`;
  console.log(url);

  async function getUsers() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.results);
    renderOutput(data.results);
  }

  getUsers();

}

function nextOn() {
  if (pageNumber < 9) {
    pageNumber++;
    changePage();
  }
}

function preOn() {
  if (pageNumber > 1) {
    pageNumber--;
    changePage();
  }
}

function renderOutput(data) {
  document.getElementById('demo').innerHTML = '';
  data.forEach(item => {
    console.log(item.name);
    // let cardItem = document.createElement("p");
    // cardItem.textContent = item.name;
    // document.getElementById("demo").appendChild(listItem);





    let show = `<div class="card"> <p> <h3> ${item.name} </h3><br>
 height : ${item.height} cm <br><br>
 birth date : ${item.birth_year} <br><br>
 gender : ${item.gender} <br> </p></div>`;
    document.getElementById('demo').innerHTML += show;
  });
}