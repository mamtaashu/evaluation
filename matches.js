// write js code here corresponding to matches.html


var array=JSON.parse(localStorage.getItem("schedule")) || []


var fav=JSON.parse(localStorage.getItem("favourites")) || []

displaydata(array);

function displaydata(array){
document.querySelector("tbody").innerHTML="";

array.forEach(element => {
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

    var p=document.createElement("td")
    p.innerText="favourite";

    p.style.color="green"
    p.addEventListener("click",function(){
        fav.push(element)


        localStorage.setItem("favourites",JSON.stringify(fav))

        alert("Add to favouites")
    })


    row.append(td1,td2,td3,td4,td5,p)

    document.querySelector("#tbody").append(row)


});

}