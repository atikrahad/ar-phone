function getProducts(phone) {
  fetch(`https://openapi.programming-hero.com/api/phones?search=${phone}`)
    .then((res) => res.json())
    .then((data) => moveTamplete(data));
}

const moveTamplete = (data) => {
  const parent = document.getElementById('parent')
  parent.textContent = ''
  const getData = data.data;

  const seeall = document.getElementById('seeall');
  if(getData.length > 6){
    seeall.classList.remove('hidden')
  }else{
    seeall.classList.add('hidden')
  }
  
  const showdata = getData.slice(0, 6);
 
  showdata.forEach((element) => {
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


const  searchProducts = () => {
    const searchPhone = document.getElementById('userPhone');
    const serPhone = searchPhone.value;
    getProducts(serPhone);

}



getProducts('a')
