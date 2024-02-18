function calculation() {
  const value = getAndSetElementValueById();

  const availableSeats = getElementValueById("available-seats");
  const availableSeatsNumbers = availableSeats - 1;

  const element = document.getElementById("available-seats");
  element.innerText = availableSeatsNumbers;

  const infos = setInfos(value);
}

function getAndSetElementValueById() {
  const value = getElementValueById("count");
  const result = value + 1;

  const element = document.getElementById("count");
  element.innerText = result;
}

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const elementValue = parseInt(elementText);
  return elementValue;
}
function checkAndEnableButton(element) {
  const selected = element;
  const inputValue = document.getElementById("number-field").value;
  // console.log(selected, typeof inputValue);

  if (selected && inputValue !== "") {
    document.getElementById("next-btn").removeAttribute("disabled");
  }
}

function couponCodeEnable(element) {
  const countElement = document.getElementById("count");
  console.log(countElement);
  const count = parseInt(countElement.innerText) + 1;

  if (count === 4) {
    document.getElementById("remove-disabled").removeAttribute("disabled");
    document.getElementById("apply-btn").removeAttribute("disabled");
    document.getElementById("remove-label-disbled").removeAttribute("disabled");

    const kbds = document.getElementsByClassName("kbd");

    for (const kbd of kbds) {
      kbd.classList.add("btn-disabled");
    }

    alert("You have already selected four tickets");
  }
}
