const Menu = document.querySelector('#menu');
const BurgerIcon = document.querySelector('.icon-hamburger');
const CloseIcon = document.querySelector('.close-menu');
const CloseMenu = document.querySelector('.close-icon');
const MenuProject = document.querySelector('.back-project-menu');
const BtnBackProject = document.querySelectorAll('.btn-project');;

const RewardTxt = document.querySelector('.reward');
const BambooTxt = document.querySelector('.bamboo');
const BlackTxt = document.querySelector('.black');

const Categories = document.querySelectorAll('.category');

const RewardCategory=document.querySelectorAll('.reward-title');
const BambooCategory=document.querySelectorAll('.bamboo-title');
const BlackCategory=document.querySelectorAll('.black-title');
// const RewardCategory=document.querySelectorAll('.reward-title')

const Inputs=document.querySelector('.input');
const InputsB=document.querySelector('.input-b');
// option-content-reward


const ThanksMenu=document.querySelector('#support-cont');
const Buttons=document.querySelectorAll('.continue');

const BtnGotIt=document.querySelector('.got-it');
const Bookmark=document.querySelector('.bookmark');
const Fill=document.querySelector('.fill');


const BookmarkTxt=document.querySelector('.bmrk-txt');
// option-content-black
// option-content-bamboo

Btn1=document.getElementById('btn-1')


Bookmark.addEventListener('click', () =>{
    Fill.classList.toggle('bookmarked')
    BookmarkTxt.classList.toggle('appear')
})

Inputs.addEventListener('keyup', inpt =>{
        var z1 = /^[0-9]*$/;
        console.log(inpt.target.value)
            if (!z1.test(inpt.target.value)) { 
                inpt.target.value="" }
    })

    
InputsB.addEventListener('keyup', inpt =>{
    var z1 = /^[0-9]*$/;
    console.log(inpt.target.value)
        if (!z1.test(inpt.target.value)) { 
            inpt.target.value="" }
})


BtnBackProject.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('abrir')
        MenuProject.classList.add('hideMenu')

   Buttons.forEach(button => {
       
       button.addEventListener('click', ()=>{
        MenuProject.classList.add('hideMenu')
        
           console.log('boton')
           if(Inputs.value >=75 || InputsB.value >=25){
            ThanksMenu.classList.add('thx')
            MenuProject.classList.remove('hideMenu')
            
           }
        

        BtnGotIt.addEventListener('click', ()=>{
            ThanksMenu.classList.remove('thx')
        })
       })
   });
    
    
    

    Categories.forEach( () => {

    

function ClearInputs() { 
    Inputs.value="";
    InputsB.value="";
 }

        // Reward Category
        RewardCategory.forEach( (reward => {
        
        reward.addEventListener('click', ()=>{
            // console.log('hola')
            RewardTxt.classList.toggle('open')
        })
        }))

        // 
        BambooCategory.forEach( (bamboo => {
        
            bamboo.addEventListener('click', ()=>{
                ClearInputs()
                // console.log('hola')
                BambooTxt.classList.toggle('open')

                InputsB.addEventListener('keyup', ()=>{
                    if( InputsB.value >=25){
                    
                        InputsB.classList.add('correct')
                        console.log('correct')
                       }else{
                        InputsB.classList.remove('correct')
                       }

                    })
                
            })
            }))

            // 
            BlackCategory.forEach( (black => {
        
                black.addEventListener('click', ()=>{
                    ClearInputs()
                    // console.log('hola')

                    Inputs.addEventListener('keyup', ()=>{
                    if( Inputs.value >=75){
                    
                        Inputs.classList.add('correct')
                        console.log('correct')
                       }else{
                        Inputs.classList.remove('correct')
                       }

                    })
                    
                    BlackTxt.classList.toggle('open')
                })
                }))
        
    });

    CloseMenu.addEventListener('click', () => {
        MenuProject.classList.remove('hideMenu')

        

    })

})
})

BurgerIcon.addEventListener('click', () => {
    BurgerIcon.classList.add('hide')

    CloseIcon.classList.add('show')

    Menu.classList.add('show')

    CloseIcon.addEventListener('click', () => {
        BurgerIcon.classList.remove('hide')

        CloseIcon.classList.remove('show')

        Menu.classList.remove('show')

    })
})

