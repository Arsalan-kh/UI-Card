
let CardData=[
    {
     title:"Cloth",
     img:"./img/girl1.jpg",
     subtitle:"Easy comfortable and flexible",
     tag:"watch"
},
{
    title:"Cloth",
    img:"./img/girl2.jpg",
    subtitle:"Easy comfortable and flexible",
    tag:"watch"
},
{
    title:"Cloth",
    img:"./img/girl5.jpg",
    subtitle:"Easy comfortable and flexible",
    tag:"cloth"
},
{
    title:"Cloth",
    img:"./img/girl3.jpg",
    subtitle:"Easy comfortable and flexible",
    tag:"cloth"
},
{
    title:"Cloth",
    img:"./img/girl6.jpg",
    subtitle:"Easy comfortable and flexible",
    tag:"cloth"
},
{
    title:"Cloth",
    img:"./img/girl3.jpg",
    subtitle:"Easy comfortable and flexible",
    tag:"cloth"
},

]



// var showCard=document.querySelector(".showCard");

// CardData.forEach(card=>{

//     showCard.innerHTML+=
//     `
//     <div class="col">
// <div class="card  h-100">
//   <img src=${card.img} class="card-img " alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${card.title}</h5>
//    <div class="title-star"> <p class="card-text">${card.subtitle}</p> <div class="rating"><i class="fas fa-star "></i><span>4.7 </span> </div></div>
//     <input class="CTA" type="button" value="Add to Cart">
//   </div>
// </div>
// </div> 

//   `
  
// })



function ProductTemplate(card) { //In this function we design a Template of product card //
  return `
  <div class="col">
  <div class="card  h-100">
    <img src=${card.img} class="card-img " alt="...">
    <div class="card-body">
      <h5 class="card-title">${card.title}</h5>
     <div class="title-star"> <p class="card-text">${card.subtitle}</p> <div class="rating"><i class="fas fa-star "></i><span>4.7 </span> </div></div>
      <input class="CTA" type="button" value="Add to Cart">
    </div>
  </div>
  </div> 
  `;
  
}


//the purpose of this line of code is to show the All products on html//
document.querySelector(".showCard").innerHTML = `

${CardData.map(ProductTemplate).join('')} 

`;

const getProduct=(userSelected)=>{
  let selectBtnValue=CardData.filter(filterCard);
  function filterCard(card){
if(card.tag===userSelected){
  return document.querySelector(".showCard").innerHTML = `
  ${CardData.map(ProductTemplate).join('')}  
  `
}
  }
  document.querySelector(".showCard").innerHTML = `

  ${selectBtnValue.map(ProductTemplate)} 
  
  `;

}
 //get All prodcuts//
const getAll=()=>{
  document.querySelector(".showCard").innerHTML = `

${CardData.map(ProductTemplate).join('')} 

`;
}

