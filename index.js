window.onload = function() {
    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value = "";

}
var inputs=document.querySelectorAll(".time");
var today=new Date();
for(var i=0;i<document.querySelectorAll(".time").length;i++){
    inputs[i].addEventListener("change", function(){
        const Id=this.id;
        const functionName="time"+Id;
        window[functionName]();
    });
}
function timeday(){
    var date = document.getElementById("day").value;
    var dateError = document.getElementById("day-invalid");
   
    if(date <= 0 || date > 31 ){
        dateError.classList.remove("hidden");
    }
    else{
        dateError.classList.add("hidden");
    }
}
function timemonth(){
     var month = document.getElementById("month").value;
    var monError = document.getElementById("month-invalid");
    
    if(month <=0 || month > 12){
        monError.classList.remove("hidden");
    }
    else{
        monError.classList.add("hidden");
    }
}
function timeyear(){
    var year = document.getElementById("year").value;
    var yearError = document.getElementById("year-invalid");
    
    if( year< 1950 || year > 2023){
        yearError.classList.remove("hidden");
    }
    else{
        yearError.classList.add("hidden");
    }
}


var date = document.getElementById("day").value;
var dateError = document.getElementById("day-invalid");

var month = document.getElementById("month").value;
var monthError = document.getElementById("month-invalid");

var year = document.getElementById("year").value;
var yearError = document.getElementById("year-invalid");
  

document.getElementById("submit-btn").addEventListener("click", function handleClick(event){
    if(date==="" || month===""||year===""){
        dateError.classList.remove("hidden");
        monthError.classList.remove("hidden");
        yearError.classList.remove("hidden");
    }
  
    
  else{
    calculateAge(document.getElementById("year").value, document.getElementById("month").value, document.getElementById("day").value);

    // event.preventDefault();
    // const Input = document.querySelectorAll("#day,#month,#year");

    // Input.forEach(input => {
    //   input.value = '';
    // });
  }
   
});

  
function calculateAge(year,month,day){
    var past =new Date(year,month-1,day);
    var ageDifference = today -past;
    var ageDate = new Date(ageDifference);
    var years = ageDate.getFullYear()-1970;
    var months = ageDate.getMonth();
    var days = ageDate.getDate()-1;
    document.getElementById("year-smt").innerHTML = years;
    document.getElementById("month-smt").innerHTML = months;
    document.getElementById("day-smt").innerHTML  = days;
}






















































