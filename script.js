
const initialprice = document.getElementById('initial-price');
const currentprice = document.getElementById('current-price');
const quentityofstock = document.getElementById("quentity-of-Stock");
const btnTellMeHandler = document.getElementById("btnTellMe");
const outputcontainer = document.getElementById("output-container");
const Forbackground = document.getElementById("Forbackground");
//........................................


//call when button clicked
btnTellMeHandler.addEventListener("click", () => {
    let initial = Number(initialprice.value);
    let current = Number(currentprice.value);
    let quentity = Number(quentityofstock.value);
    if (initial > 0 && current > 0 && quentity > 0) {
        CalculateResult(initial, current, quentity);//call calculateResult function
    } else {
        outputcontainer.innerHTML = "Fill all input ð";
    }  
});


//calculate all results 
function CalculateResult(initial, current, quentity) {
    if (initial > current) {

        Forbackground.style.backgroundColor = "red"
        let loss = (initial - current) * quentity;
        let lossPercent = ((loss/initial) * 100).toFixed(2);
        MessageBox(` No!ð¯ð¥Your Loss is ${loss} â¹ ,Your Loss in Percentage ${lossPercent}%  `);

    } else if (current > initial) {
        Forbackground.style.backgroundColor = "rgb(0, 255, 123)"   ;
        let profit = (current - initial) * quentity;
        let ProfitPercent = ((profit / initial) * 100).toFixed(2);
        MessageBox(` yay! ððð Your Profit is ${profit}â¹ ,Your Profit in Percentage ${ProfitPercent}%`);

    } else {
        let loss = ( initial - current) * quentity;
        let profit = (current - initial) * quentity;
        MessageBox(`ð! thare is  No Loss No Profit just chill... ${profit} â¹ profit, ${loss} â¹ loss`);
    };
};

function MessageBox(msg) {//it will chnge text on the basis of condition
    outputcontainer.innerHTML = msg;
};


