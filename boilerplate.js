

let a = 13
let b = 10

let result= a * b 

let reality = Math.floor(Math.random() * 100)

let button = document.getElementById("cliki")

button.addEventListener("click", handleclick)

function handleclick(){
    reality = Math.floor(Math.random() * 100)
    
    document.getElementById("virsraksts").textContent = "tavs matemātikas rez.: "+ reality;
if(reality == 67){
    document.getElementById("virsraksts").textContent = "67 67 67 67 iq 6 7 6 7 "+ reality;
}
else if(reality <= 10){
    document.getElementById("virsraksts").textContent = "tavs īstais tavs matemātikas rez.( bez GPT): "+ reality +" es pat neesmu izbrīnīts";
}

}



console.log("cik tev vajadzētu būt iq "+ result + " cik tu dabūji: " + reality)

