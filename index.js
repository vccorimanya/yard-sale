const button = document.querySelector('.menu_btn');
const mMenu = document.querySelector('.mobile_menu');

const showHide = () => {
  if (mMenu.classList.contains('is-active')){
    mMenu.classList.remove('is-active')
  }else{
    mMenu.classList.add('is-active')
  }
}


button.addEventListener('click', showHide)

