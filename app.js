const container=document.querySelector('.container');
const signup=document.querySelector('.sign-up');
const login=document.querySelector('.Login');

signup.addEventListener('click',()=>{
    container.classList.add('active');

})
login.addEventListener('click',()=>{
    container.classList.remove('active');
 
})
