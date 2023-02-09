let outputScreen = document.getElementById("result");

function display(num){
    result.value += num;
}
function Calculate(){
    try{
        result.value = eval(result.value);
    }
    catch(err){
        alert("Invalid")
    }
}
function Clear(){
    result.value = "";

}
function del(){
    result.value = result.value.slice(0,-1)
}
// const addbtn = document.getElementById('add');
// addbtn.addEventListener('click',function(){
//     console.log("hello")
// })
// btn.addEventListener('click',() => {

// })
// function clicking(event){
//     console.log(event)
//     console.log(event.innerText)

//     parent = document.querySelector('#result')
//     parent.innerText = parent.innerText + event.innerText
//     console.log('button clicked')
// }
// window.addEventListener('keypress',(e) =>{
//     console.log(e)
// })