function paribahan() {
  const bannerElement = document.getElementById("paribahan");
  bannerElement.scrollIntoView({ behavior: "smooth" });
}

function calCulationAndSetBackground(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#1DD100]", "text-white");

  element.classList.add("btn-disabled");

  checkAndEnableButton(element);
  setInfos(element);
  couponCodeEnable(element);

  const count = calculation();
  console.log(count);
}
function checkAndEnableButton(element) {
  const selected = element;
  let count = 0;
  if (selected) {
    count = count + 1;
  }

  console.log(count);
  const inputValue = document.getElementById("number-field");

  if (count > 0 && inputValue.value !== "") {
    document.getElementById("next-btn").removeAttribute("disabled");
  }
}

function setInfos(element) {
  const ele = element;
  const element1Text = ele.innerText;

  const element2 = document.getElementById("seat-info");
  const ul1 = document.createElement("ul");
  ul1.classList.add("flex", "justify-between");

  const li1Create = document.createElement("li");
  li1Create.innerText = element1Text;
  ul1.appendChild(li1Create);
  const li2Create = document.createElement("li");
  li2Create.innerText = "Economoy";
  ul1.appendChild(li2Create);
  const li3Create = document.createElement("li");
  li3Create.innerText = "550";
  li3Create.classList.add("price");
  ul1.appendChild(li3Create);

  element2.appendChild(ul1);

  totalPrice(ul1);
}

function totalPrice(element) {
  const totalPriceElement = document.getElementById("total-price");
  // console.log(totalPriceElement);
  const totalPriceText = totalPriceElement.innerText;
  const totalPrice = parseInt(totalPriceText);
  // console.log(totalPrice);

  const selectedElementPrice = element.childNodes[2].innerText;
  const selectedPrice = parseInt(selectedElementPrice);

  const price = totalPrice + selectedPrice;
  totalPriceElement.innerText = price;

  const grandTotalElement = document.getElementById("grand-total");
  grandTotalElement.innerText = price;
}

function discountWithCopupon() {
  const inputElement = document.getElementById("remove-disabled");
  const value = inputElement.value;

  // console.log(value);

  // document.getElementById("apply-btn").classList.add("btn-disabled");
  // <div class="flex justify-between pt-3">
  //   <h1 class="text-xl font-bold">Total Price</h1>
  //   <h2 class="text-xl font-bold">
  //     BDT <span id="total-price">0</span>
  //   </h2>
  // </div>;

  if (value === "NEW15") {
    const totalPriceString = document.getElementById("total-price");
    const totalPriceVai = parseInt(totalPriceString.innerText);
    const discount = (totalPriceVai * 15) / 100;
    console.log(totalPriceVai, discount);
    const discountContainer = document.getElementById("added-discount");

    const div = document.createElement("div");
    div.classList.add("flex", "justify-between", "pt-3");
    const h1 = document.createElement("h1");
    h1.classList.add("text-xl", "font-bold");
    h1.innerText = "Discount Price";
    const h2 = document.createElement("h2");
    h2.classList.add("text-xl", "font-bold");
    h2.innerText = "BDT";
    const span = document.createElement("span");
    span.classList.add("discount-koto-paicho", "pl-3");
    span.innerText = discount;

    div.appendChild(h1);
    div.appendChild(h2);
    h2.appendChild(span);
    discountContainer.appendChild(div);

    const grandTotal = totalPriceVai - discount;
    document.getElementById("grand-total").innerText = grandTotal;

    document.getElementById("remove-label-disbled").classList.add("hidden");
  } else if (value === "Couple 20") {
    console.log(value);
    const totalPriceString = document.getElementById("total-price");
    const totalPriceVai = parseInt(totalPriceString.innerText);
    const discount = (totalPriceVai * 20) / 100;
    console.log(totalPriceVai, discount);
    const discountContainer = document.getElementById("added-discount");

    const div = document.createElement("div");
    div.classList.add("flex", "justify-between", "pt-3");
    const h1 = document.createElement("h1");
    h1.classList.add("text-xl", "font-bold");
    h1.innerText = "Discount Price";
    const h2 = document.createElement("h2");
    h2.classList.add("text-xl", "font-bold");
    h2.innerText = "BDT";
    const span = document.createElement("span");
    span.classList.add("discount-koto-paicho", "pl-3");
    span.innerText = discount;

    div.appendChild(h1);
    div.appendChild(h2);
    h2.appendChild(span);
    discountContainer.appendChild(div);

    const grandTotal = totalPriceVai - discount;
    document.getElementById("grand-total").innerText = grandTotal;

    document.getElementById("remove-label-disbled").classList.add("hidden");
  } else {
    alert("The coupon code you entered is not valid");
  }
}
