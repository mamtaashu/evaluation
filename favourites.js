// write js code here corresponding to favourites.html


var favourite=JSON.parse(localStorage.getItem("favourites")) || []


console.log(favourite)

function displaydata(favourite){

    favourite.forEach(function(element,index){


        var row=document.createElement("tr")

        var td1=document.createElement("td")
        td1.innerText=element.match
        
        var td2=document.createElement("td")
        td2.innerText=element.teamA
    
        var td3=document.createElement("td")
        td3.innerText=element.teamB
    
        var td4=document.createElement("td")
        td4.innerText=element.date
    
        var td5=document.createElement("td")
        td5.innerText=element.venue

        var td6=document.createElement("td6")
        td6.innerText="Delete"
         td6.addEventListener("click",function(){

            deleteItem(element,index)

            

           
         });
         row.append(td1,td2,td3,td4,td5,td6)

    document.querySelector("#tbody").append(row)

    });

}
window.addEventListener("load",function(){
    displaydata(favourite)
})


function deleteItem(element,index){

    favourite.splice(index,1)
    localStorage.setItem("product",JSON.stringify(favourite))
   window.location.reload();
}
