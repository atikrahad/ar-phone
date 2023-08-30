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

    

    const div1 = document.createElement("div");
    div1.classList.add(
      "card", "bg-base-100", "rounded-md", "border-[1px]", "p-5", "border-[#00000048]"
    );
    div1.innerHTML = `
        <div class="px-10 h-64 bg-sky-200 mb-4 rounded-md pt-10">
                    <img src="${element.image}" alt="Shoes" class="rounded-xl mx-auto h-44"/>
                    </div>
                    <div class=" text-center space-y-2">
                      <h2 class="md:text-2xl text-xl lg:text-3xl font-bold">${element.phone_name}</h2>
                      <p class="text-[#706F6F]">${element.slug}</p>
                      <h2 class="text-3xl font-bold">$999</h2>
                      <button onclick="my_modal_5.showModal(), showID('${element.slug}')"  class="btn bg-sky-700 border-none hover:bg-sky-600 text-white font-bold">Show Details</button> 
                      
                      `
        ;
        parent.appendChild(div1);
      });
      toggle(false)
};


const  searchProducts = () => {
  toggle(true)
    const searchPhone = document.getElementById('userPhone');
    const serPhone = searchPhone.value;
    getProducts(serPhone);
    

}

const toggle  = (loading)=> {
  const loadingS = document.getElementById('spinner')
  if(loading){
    loadingS.classList.remove('hidden');
  }else{
    loadingS.classList.add('hidden');
  }
}



const showID = (id) => {
  console.log('clicked');
  fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  .then(res => res.json())
  .then(data => showOnModal(data))
}


const  showOnModal = data => {
  const info = data.data;
const parent2 = document.getElementById('my_modal_5')
  const deepinfo = info.mainFeatures;
  const form = document.createElement('form');
  form.classList.add('modal-box', 'p-3');
  form.setAttribute('method', 'dialog');
  form.innerHTML = `
  <div class="px-10 h-40 bg-sky-200 flex justify-center items-center rounded-md ">
              <img src="${info.image}" alt="Shoes" class="rounded-xl mx-auto h-36"/>
              </div>
             <div class="space-y-1">
              <h1 class="text-3xl font-bold">${info.name}</h1>
              <h3 class="font-semibold">Storage: <span class="font-normal text-[#706F6f]">${deepinfo?.storage}</span></h3>
              <h3 class="font-semibold">Display Size : <span class="font-normal text-[#706F6f]">${deepinfo?.displaySize}</span></h3>
              <h3 class="font-semibold">Chipset: <span class="font-normal text-[#706F6f]">${deepinfo?.chipSet}</span></h3>
              <h3 class="font-semibold">Memory: <span class="font-normal text-[#706F6f]">${deepinfo?.memory}</span></h3>
              <h3 class="font-semibold">Release data: <span class="font-normal text-[#706F6f]">${info?.releaseDate}</span></h3>
              <h3 class="font-semibold">Sensors: <span class="font-normal text-[#706F6f]">${deepinfo?.sensors}</span></h3>
              <h3 class="font-semibold">Release data: <span class="font-normal text-[#706F6f]">${info?.releaseDate}</span></h3>
              <h3 class="font-semibold">Brand: <span class="font-normal text-[#706F6f]">${info?.brand}</span></h3>
              <h3 class="font-semibold">GPS : <span class="font-normal text-[#706F6f]">${info?.others?.GPS}</span></h3>
            
             </div>
            <div class="text-right">
              
              <button class="py-2 bg-sky-700 rounded-xl text-white  px-3">Close</button>
            </div>
  `
  parent2.appendChild(form);
  console.log(info, deepinfo);
}
getProducts('a')