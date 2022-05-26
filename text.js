document.getElementById("calculate").addEventListener("click",
 () => Calculate(height,weight)
)

function Calculate(Num) {
    document.getElementById("bmi").style.display = "block"
    let height = document.getElementById("height").value/100;
    let weight = document.getElementById("weight").value;
    let bmi = weight/(height*height);
    document.getElementById("result").innerHTML = bmi.toFixed(2);
    let advice = document.getElementById("comment");

    if (bmi < 18.5) {
        advice.innerHTML = "You are Underweighed"
        advice.style.color = "red"
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        advice.innerHTML = "You are Healthy"
        advice.style.color = "green"
    }
    else if(bmi >= 25 && bmi <= 29.9){
        advice.innerHTML = "You are OverWeighed"
        advice.style.color = "darkred"
    }
    else{
        advice.innerHTML = "You are Obesed"
        advice.style.color = "red"
    }
    
}