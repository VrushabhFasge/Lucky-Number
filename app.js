//getting the values from DOM
var dob=document.querySelector(".dateOfBirth");
var luckyNumber=document.querySelector(".number");
var check=document.querySelector(".calculate");

function luckCheck(){
    
    if(dob.value == "" || luckyNumber.value == ""){
        $(".animatedDiv").text("Please enter all the required values");
    }
    else{
        alert("We do not store your birth date. We are strictly against storing personal data.")
        addNum();
    }
}
 
function addNum(){
    console.log("calling function");
    var sum=0;
    var DOB=dob.value;
    var num=luckyNumber.value;

    DOB=DOB.replaceAll("-","");
    for(var i=0;i<DOB.length;i++){
        sum+=Number(DOB.charAt(i));
    }
    if(sum % num == 0){
        $(".animatedDiv").text(num+" is your lucky number 🎉🎊🥳");
    }
    else{
        $(".animatedDiv").text(num+" is not your lucky number 😟💔");
    }
    console.log(sum);
}

check.addEventListener("click",luckCheck);


