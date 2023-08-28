function getProducts() {
  fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then((res) => res.json())
    .then((data) => moveTamplete(data));
}

const moveTamplete = (data) => {
  const parent = document.getElementById('parent')
  const getData = data.data;
  console.log(getData);
  getData.forEach((element) => {
    console.log(element);

    const div1 = document.createElement("div");
    div1.classList.add(
      "card", "bg-base-100", "rounded-md", "border-[1px]", "p-5", "border-[#00000048]"
    );
    div1.innerHTML = `
        <div class="px-10 h-64 bg-sky-200 mb-4 rounded-md pt-10">
                    <img src="${element.image}" alt="Shoes" class="rounded-xl mx-auto h-44"/>
                    </div>
                    <div class=" text-center space-y-2">
                      <h2 class="text-3xl font-bold">${element.phone_name}</h2>
                      <p class="text-[#706F6F]">${element.slug}</p>
                      <h2 class="text-3xl font-bold">$999</h2>
                      <button
          class="btn bg-sky-700 border-none hover:bg-sky-600 text-white font-bold"
        >
        Show Details
        </button>
        `
        ;
        parent.appendChild(div1);
  });
};

getProducts();
