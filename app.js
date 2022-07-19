const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

/***********buttons ******/
const btnCon = document.querySelector('.btn-container')
let categ = []
let nameOfCateg = ["All", "Korea", "Japan", "China"]
for(var i=0;i<nameOfCateg.length;i++){
  categ[i] = document.createElement('button')
  categ[i].classList.add('btn-item')
  categ[i].classList.add('btn-outline-dark')
  categ[i].classList.add('btn')
  categ[i].innerHTML = nameOfCateg[i]
  btnCon.append(categ[i])
}

/******bilgi alma */

let idList = []
let titleList = []
let categoryList = []
let priceList = []
let imageList = []
let descList = []

function infoMenu(){
  for(var k=0;k<menu.length;k++){
    idList[k] = menu[k].id
    titleList[k] = menu[k].title
    categoryList[k] = menu[k].category
    priceList[k] = menu[k].price
    imageList[k] = menu[k].img
    descList[k] = menu[k].desc
  }
}

//****** */
infoMenu()
//****** */

/*******KATEGORİ SEÇME ************************************************/

const idNumberALL = categoryList
  .map((element, index) => {
    if (element !== 'All') {
      return index;
    }
  })
  .filter(element => element >= 0);

const idNumberKOREA = categoryList
  .map((element, index) => {
    if (element === 'Korea') {
      return index;
    }
  })
  .filter(element => element >= 0);

const idNumberJAPAN = categoryList
  .map((element, index) => {
    if (element === 'Japan') {
      return index;
    }
  })
  .filter(element => element >= 0);

const idNumberCHINA = categoryList
  .map((element, index) => {
    if (element === 'China') {
      return index;
    }
  })
  .filter(element => element >= 0);

/*******element olusturma */

const divDOM = document.querySelector('.topdiv')
const buttonsDOM = document.querySelectorAll('.btn')

for(var j=0;j<buttonsDOM.length;j++){
  buttonsDOM[j].addEventListener('click', mealCreator)
}
let numberOfItems
let idNumber = []
mealCreator()
function mealCreator(){
  console.log('içine girdi')
  let outerDIV = document.querySelectorAll('.outerdiv')
  console.log(outerDIV)
  if(this.innerHTML === "All"){
    numberOfItems = idNumberALL.length
    idNumber = [...idNumberALL] 
    for(var m=0;m<outerDIV.length;m++){
    outerDIV[m].remove(outerDIV)
    }
    elementCreator(numberOfItems,idNumber)
  }
  else if(this.innerHTML === "Korea"){
    numberOfItems = idNumberKOREA.length
    idNumber = [...idNumberKOREA] 
    for(var n=0;n<outerDIV.length;n++){
      outerDIV[n].remove(outerDIV)
      }
    elementCreator(numberOfItems,idNumber)
  } 
  else if(this.innerHTML === "Japan"){
    numberOfItems = idNumberJAPAN.length
    idNumber = [...idNumberJAPAN] 
    for(var x=0;x<outerDIV.length;x++){
      outerDIV[x].remove(outerDIV)
      }
    elementCreator(numberOfItems,idNumber)
  }
  else if(this.innerHTML === "China"){
    numberOfItems = idNumberCHINA.length
    idNumber = [...idNumberCHINA] 
    for(var y=0;y<outerDIV.length;y++){
      outerDIV[y].remove(outerDIV)
      }
    elementCreator(numberOfItems,idNumber)
  }
  else{
    numberOfItems = idNumberALL.length
    idNumber = [...idNumberALL] 
    elementCreator(numberOfItems,idNumber)
  }
}

function elementCreator(numbOfItem,idNum){
  
  for(var l=0;l<numbOfItem;l++){
    
    let outerDIV = document.createElement('div')
    outerDIV.classList.add('menu-items')
    outerDIV.classList.add('col-lg-6')
    outerDIV.classList.add('col-sm-12')
    outerDIV.classList.add('outerdiv')
    divDOM.append(outerDIV)
    console.log(outerDIV)
    
    let imgDIV = document.createElement('img')
    imgDIV.setAttribute('src', imageList[idNum[l]])
    imgDIV.setAttribute('alt', titleList[idNum[l]])
    imgDIV.classList.add('photo')
    outerDIV.append(imgDIV)
  
    let midDIV = document.createElement('div')
    midDIV.classList.add('menu-info')
    outerDIV.append(midDIV)

    let innerDIV = document.createElement('div')
    innerDIV.classList.add('menu-title')
    midDIV.append(innerDIV)

    let titleDOM = document.createElement('h4')
    titleDOM.innerHTML = `${titleList[idNum[l]]}`
    innerDIV.append(titleDOM)

    let priceDOM = document.createElement('h4')
    priceDOM.classList.add('price')
    priceDOM.innerHTML = `${priceList[idNum[l]]}`
    innerDIV.append(priceDOM)

    let descDIV = document.createElement('div')
    descDIV.classList.add('menu-text')
    descDIV.innerHTML = `${descList[idNum[l]]}`
    midDIV.append(descDIV)
  }
}
