import { asianCountries,europeanCountries,africanCountries,southAmericanCountries,northAmericanCountries } from "./countryrelient.js";

var Eu=false;
var As =false;
var Af=false;
var Na=false;
var Sa=false
var selectedcont=false;
var createdboxes=false;
var inputboxarr=[];
var SelectedArr=[];

var correctAns=0;

function selectArr(){
    if (Eu){
        return europeanCountries;
        
    }
    if (As){
        return asianCountries;
    }
    if(Af){
        return africanCountries;
    }
    if (Na){
        return northAmericanCountries;
    }
    if (Sa){
        return southAmericanCountries;
    }
};

function CreateInputBoxes(SelectedArr){
    for(let i=0;i<SelectedArr.length;i++){
        let inputbox=document.createElement("input");
        inputbox.style.width="100px";
        inputbox.style.height="50px";
        inputbox.style.fontSize="20px";
        inputbox.style.fontFamily="sansserif"
        if(i<10){
            inputbox.style.top='$(i*5)%';
        }
        if (i>10){
            inputbox.style.left="20%";

        }
        inputbox.id = `ib${i}`;
        
        document.body.appendChild(inputbox);
        inputboxarr.push(inputbox);
        inputbox.addEventListener("input",function(){
            checkans(inputbox);
        });
    }
}

function checkans(inputbox){
    let inputval=inputbox.value.trim().toLowerCase();
    
    if (SelectedArr.includes(inputval)){
        let index=SelectedArr.indexOf(inputval);
        SelectedArr.splice(index,1);
        inputbox.style.backgroundColor="lightgreen";
        inputbox.disabled=true;
        correctAns++;
        if (correctAns==SelectedArr.length){
            alert("youve won");
        }
        

    }
}

$(document).ready(function(){
    
    var h1ttl=document.getElementById("h1ttl");

    switch(localStorage.getItem("Continent")){
        case "Eu":
            h1ttl.textContent="Europe Country Quiz";
            Eu=true;
            break;
        case "As":
            h1ttl.textContent="Asian Country Quiz";
            As=true;
            break;
        case "Af":
            h1ttl.textContent="African Country Quiz";
            Af=true;
            break;
        case  "Na":
            h1ttl.textContent="North Country Flag Quiz";
            Na=true;
            break;
        case "Sa":
            h1ttl.textContent="South Country Flag Quiz";
            Sa=true;
            break;   
    }
    if (! selectedcont){
        SelectedArr=selectArr();
        selectedcont=true;
    }
    if(!createdboxes){
        CreateInputBoxes(SelectedArr);
        createdboxes=true;
    }
    $("#homebttn").click(function(){
        window.location.href="../index.html";
    })

    $("#giveupbtn").click(function(){
        alert("you gave up");
        for(let i=0; i<inputboxarr.length;i++){
            let currbox=inputboxarr[i];
            let val=currbox.value;
            if (val==""){
                let currcount=SelectedArr[0];
                currbox.value=currcount;
                currbox.style.backgroundColor="red";
                currbox.disabled=true;
                SelectedArr.splice(0,1);
            }
        }
    });
    $("#refreshbttn").click(function(){
        window.location.href = window.location.href;

    });

    

});