const details = document.getElementById("card-details");
const input = document.getElementById("search");
let Data = [];
const getDetails = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
  Data = data;
  displayDetails(data);
};
getDetails();
const displayDetails = (data) => {
  const output = data.reduce((acc, value) => {
    acc += `<div class="card" style="width: 14rem height:200">
    <img src="${value.image}" class="card-img-top" alt="${value.id}/>
      <div class="card-body">
      <p class="id">${value.id})</p>
        <h5 class="card-title">${value.title.slice(0, 20)}</h5>
        <p class="card-text">${value.description}
        </p>
        <a href="#" class="btn btn-primary">price:${value.price}</a>
      </div>
    </div>`;
    return acc;
  }, " ");
  details.innerHTML = output;
};
document.getElementById("search").addEventListener("keyup", (e) => {
  var search = e.target.value;

  const filtertheitems = Data.filter((val) => {
    return (
      search == val.id ||
      val.title.toLowerCase().includes(search.toLowerCase()) ||
      val.description.toLowerCase().includes(search.toLowerCase()) ||
      search == val.price
    );
  });
  displayDetails(filtertheitems);
});
