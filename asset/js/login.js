const wrapper = document.querySelector('.wrapper-login');
const loginLink = wrapper.querySelector('.login-link');
const registerLink = wrapper.querySelector('.register-link');
const btnPopup =  document.querySelector('.btnLogin-popup')
const iconClose =  document.querySelector('.close-icon')

registerLink.addEventListener('click', function(){
    wrapper.classList.add('active');
})
loginLink.addEventListener('click', function(){
    wrapper.classList.remove('active');
})
btnPopup.addEventListener('click', function(){
    wrapper.classList.add('active-popup');
})
iconClose.addEventListener('click', function(){
    wrapper.classList.remove('active-popup');
})
