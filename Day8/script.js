function listItem(Productname, Productprice) {
  let l = document.createElement("li");
  l.innerHTML = `<p>Product Name: ${Productname} and Product Price:${Productprice} </p>`;
  return l;
}

const dataList = [];

function displayData(obj) {
  let display = document.querySelector("ul");
  const L = listItem(obj.Productname, obj.Productprice);
  display.appendChild(L);
}

const buttonSubmit = document.querySelector("button");
buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  let n = document.querySelector("#NameP");
  let p = document.querySelector("#PriceP");
  let obj = { Productname: n.value, Productprice: p.value };
  dataList.push(obj);
  displayData(obj);
});