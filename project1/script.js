var addElement=document.querySelector('#addElement')
var text=document.querySelector('#newtasks input')
var create = document.querySelector('#tasks');
var sortElements=document.querySelector('#sort1')
var boolean1=true
var arrString=[]
var arrInt=[]
var arrayAll=[]




addElement.addEventListener('click',()=>{
    if(text.value!=+text.value&&(text).value !== ''){
        arrString.push(text.value)
    }else if(text.value!="" &&text.value==+text.value){
        arrInt.push(text.value)
        
   }
   arrayAll=arrInt.concat(arrString)
   showElements()
  })


  function addEnter(event){
    if(event.key=="Enter"&&text.value!=+text.value&&(text).value !== ''){
        arrString.push(text.value) 
    }else if(event.key=="Enter"&&text.value==+text.value&&(text).value !== ''){
        arrInt.push(text.value)
    }
    arrayAll=arrInt.concat(arrString)
    showElements() 
}
document.addEventListener('keypress',addEnter)



sortElements.addEventListener('click',()=>{
    if(boolean1==false){
        arrInt.sort((a,b)=>a-b) 
        arrString.sort()
        boolean1=true
        }
        else if(boolean1==true){
            arrInt.sort((a,b)=>b-a) 
            arrString.sort().reverse()  
            boolean1=false
          }
        showElements()
  })
  
  function showElements(){
    create.innerHTML=''
      arrInt.forEach((item)=>{
        create.innerHTML += `<li class="task"><span>${item}</span><button class="clear">X</i></button></li>`;
        let deleteButton = document.querySelectorAll('li button')
        for(var i=0; i<deleteButton.length; i++){
            deleteButton[i].onclick = function(ev){
                let i = ev.target.previousElementSibling.innerText
                this.parentNode.remove();
                arrInt = arrInt.filter((item) => {
                  return  item != i ? item : null
                })
            }
        }
    })
      arrString.forEach((item)=>{
        create.innerHTML += `<li class="task"><span>${item}</span><button class="clear">X</i></button></li>`;
        let deleteButton = document.querySelectorAll('li button')
        for(var i=0; i<deleteButton.length; i++){
            deleteButton[i].onclick = function(ev){
                let i = ev.target.previousElementSibling.innerText
                this.parentNode.remove();
                arrString = arrString.filter((item) => {
                  return  item != i ? item : null
                })
                console.log(arrString)

            }
        }
        
      })
  }