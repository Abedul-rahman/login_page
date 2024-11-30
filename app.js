const container=document.querySelector('.container');
const signup=document.querySelector('.sign-up');
const login=document.querySelector('.Login');
const name_log=document.querySelector("#name-log");
const name_reg=document.querySelector("#name-reg");
const pass_log=document.querySelector("#password-log");
const pass_reg=document.querySelector("#password-reg");
const email =document.querySelector("#email");
const btn_log =document.querySelector('#login');
const btn_reg =document.querySelector('#reg');

signup.addEventListener('click',()=>{
    container.classList.add('active');

})
login.addEventListener('click',()=>{
    container.classList.remove('active');
 
})  
btn_log.addEventListener('click',e=>{
e.preventDefault();
if(!Validation(name_log)){Invalid(name_log);submit=false;}
if(!Validation(pass_log)){Invalid(pass_log);submit=false;}
if(submit){
    /*
    send to the server
    */ 
}
})
btn_reg.addEventListener('click',e=>{
    let submit=true;
    e.preventDefault();
    if(!Validation(name_reg)){Invalid(name_reg); submit=false;}
    if(!Validation(pass_reg)){Invalid(pass_reg);submit=false;}
    if(!Validation(email)){Invalid(email);  submit=false;}
    if(submit){
        /*
        send to the server
        */ 
    }
})


    
const Valid=(ele)=>{
    ele.classList.remove('invalid');
    ele.classList.add('valid');
    }
const Invalid=(ele)=>{
    ele.classList.remove('valid');
    ele.classList.add('invalid');

}
const netural=(ele)=>{
    ele.classList.remove('invalid');
    ele.classList.remove('valid');
}
const Validation=(ele)=>{
    let req;
    if(ele.name=='name')
     req=(/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/);
    else if(ele.name=="password")
        req=(/^(?=.*?[A-z)(?=.*?[0-9])(?=.*?[#?!@$%^&*=-]).{6,}$/);
    else if(ele.name=='email')
        req=(/^[\w-\.]+@ju\.edu\.jo$/);
    return ele.value.match(req);

}

function Validated(ele){
    if(ele.value=="")netural(ele);
    else if(Validation(ele))Valid(ele);
    else Invalid(ele);
}

name_log.addEventListener('input', function (){Validated(this)});
pass_log.addEventListener('input',function (){Validated(this)});
name_reg.addEventListener('input',function (){Validated(this)});
pass_reg.addEventListener('input',function (){Validated(this)});
email.addEventListener('input',function (){Validated(this)});
