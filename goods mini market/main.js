

let menu_mobi = document.querySelector('.menu_mobi')
let burger_icon = document.querySelector('.br_icon')
let X_icon = document.querySelector('.X_icon')
//let menu_mobi = document.querySelector('.menu_mobi') 

burger_icon.onclick = () => {
  menu_mobi.style.height = 100 + '%'
  burger_icon.style.display = "none"
  X_icon.style.display = "block"
}


X_icon.onclick = () => {
  menu_mobi.style.height = 30 + 'px'
  burger_icon.style.display = "block"
  X_icon.style.display = "none"
  console.log("clcick");

}

