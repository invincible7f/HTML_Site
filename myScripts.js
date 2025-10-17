let button = document.querySelector('#join_now_button')
let buttonWidth = 195;   
let buttonHeight = 46;

let submitButton = document.querySelector('.submitButton')
let aboutGymButton = document.querySelector('#button')
let mensWorkautButton = document.querySelector('#mens_workaut_button')
let typesOfTraining = document.querySelectorAll('.types_of_training')
let enterField = document.querySelectorAll('.enterField')
let form = document.querySelector('form')
let headerMenu = document.querySelectorAll('.nav');
for(let i = 0; i < headerMenu.length; i++){

    headerMenu[i].onmouseover = ()=>{

        headerMenu[i].style.color ='red'; 


    }

    headerMenu[i].onmouseleave = ()=> {

        headerMenu[i].style.color ='black'; 


    }

}







button.onmouseover = function(){
let font = document.querySelector('#join_now_text');
font.style.color = 'red';
this.style.borderColor = 'red';


}


button.onmouseleave = function() {
    let font = document.querySelector('#join_now_text');

   
    font.style.color = 'white';
    this.style.borderColor = 'white';

}






mensWorkautButton.onmouseover= () =>{

    
    mensWorkautButton.style.background ='tomato';
    mensWorkautButton.childNodes[0].style.color ='white'
  

} 

mensWorkautButton.onmouseleave = () =>{
  

    mensWorkautButton.style.background ='';
    mensWorkautButton.children[0].style.color = '';
}






submitButton.onmouseover = ()=>{

submitButton.style.scale = 0.97 ;


}


submitButton.onmouseleave = () =>{

    submitButton.style.scale = 1.0; 
     


}






aboutGymButton.onmouseover = ()=>{

    aboutGymButton.style.background = 'tomato';
    aboutGymButton.style.color = 'white'
  
}



aboutGymButton.onmouseleave = () =>{

    aboutGymButton.style.background = '';
      aboutGymButton.style.color = ''
      

}




for(let i = 0; i<typesOfTraining.length;i++){

typesOfTraining[i].onmouseover = ()=>{

typesOfTraining[i].style.scale = 1.03;


}

typesOfTraining[i].onmouseleave = ()=>{

    typesOfTraining[i].style.scale = '';
    
    
    }




}




for(let i = 0; i < enterField.length;i++){

enterField[i].onmouseover = ()=>{

enterField[i].style.scale = 1.02;
enterField[i].style.cursor = "default"


} 

enterField[i].onmouseleave = ()=>{

    enterField[i].style.scale = '';
    
    
    
    } 




}


form.children[5].onmouseover = ()=>{

 form.childNodes[11].style.scale = 1.01;
 form.childNodes[11].style.cursor = "default"



}

form.childNodes[11].onmouseleave = ()=>{

form.children[5].style.scale =''; 


}



submitButton.onclick = (event) => {
    
  
    // let user={
    //  "adress" : document.querySelector('.adress'),
    //  "name": document.querySelector('.name'),
    //  "phone": document.querySelector('.phone'),       __proto___
    //  "date": document.querySelector('.date'),
    //   "user_message": document.querySelector('#message')
    // }
  
    


const _user = new User();


 _user.adress = document.querySelector(".adress ");
 _user.name = document.querySelector(".name");
 _user.phone = document.querySelector(".phone");
 _user.date = document.querySelector(".date");
 
  console.log(_user.adress);
  console.log(_user.name);
  console.log(_user.phone );
  console.log(_user.date);

}