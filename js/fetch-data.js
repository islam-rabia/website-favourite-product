function myFuncData() {
  let card = document.querySelector(".card-list");
  let btn = document.querySelector(".btn-card");

  let myDataTwo;
  async function generateFunc() {
    let result = await fetch("data/data-work.json");
    let myData = await result.json();
    myDataTwo = myData;

    myData = myData.filter((item) => item.id <= 3);
    myDataTwo = myDataTwo.filter((item) => item.id > 3);

    generateData(myData);
  }

  btn.addEventListener("click", function () {
    btn.disabled = true;
    setTimeout(function () {
      btn.classList.add("active");
      btn.innerHTML = "Not Found!";
    }, 1500);

    generateData(myDataTwo);
  });

  function generateData(data) {
    card.innerHTML += data
      .map((item) => {
        let { id, title, description, img } = item;
        return `
        <li id="card-${id}">
          <img src="${img}" alt="image card" class="img-card${id}" />
          <div class="card-title">
            <h3>${title}</h3>
            <p>${description}</p>
          </div>
        </li>
      `;
      })
      .join("");
  }

  generateFunc();
}

export { myFuncData };
