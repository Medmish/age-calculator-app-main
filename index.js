var inputs=document.querySelectorAll(".time");
var currTime=new Date();
for(var i=0;i<document.querySelectorAll(".time").length;i++){
    inputs[i].addEventListener("change", function(){
        const Id = this.id;
        const funcionName = "time"+Id;
        
        
    });
}
function timeday(){
    var date = document.getElementById("day").value;
    var dateError = document.getElementById("day-invalid");

    if(date <= 0 || date > 31){
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

    if( year > 2023){
        yearError.classList.remove("hidden");
    }
    else{
        yearError.classList.add("hidden");
    }
}

document.getElementById("submit-btn").addEventListener("click", function(){
    calculateAge(document.getElementById("year").value, document.getElementById("month").value, document.getElementById("day").value);
});


function calculateAge(year,month,day){

}






















































window[funcionName]();