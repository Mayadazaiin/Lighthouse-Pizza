let recipesList=[]
async function getData(){

     let myData=await  fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
     let list= await myData.json()
     recipesList=list.recipes;
     console.log(recipesList);
     display()

}
getData()
function display()
{
    let temp=""
    recipesList.forEach((Element)=>{
temp+=`<div class="col-md-3">
     <div class="border text-center">
     <img src="${Element.image_url}" class="w-100" alt="">
     <h6>${Element.title}</h6>
     </div>
     </div>

`
    })
    document.getElementById("myrow").innerHTML=temp
}
