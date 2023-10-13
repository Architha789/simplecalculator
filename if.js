function divisible(){
    a=parseInt(document.getElementById('num1').value);
    if(a%3 == 0 ){
        result="Divisible by 3";
    }
    else if(a%7 == 0){
        result="Divisible by 7";
    }
    else{
        document.getElementById("p1").innerHTML="Not divisile by 3 and 7";
    }
    document.getElementById("p1").innerHTML=result;
}
function compare(){
    alpha=(document.getElementById('num2').value);

    if( alpha == "a" || alpha == "e" || alpha =="i" || alpha == "o" || alpha == "u"){
        result="Vowel";

    } 
    else{
        result="Consonant";
    }
    document.getElementById("p2").innerHTML=result;
}

