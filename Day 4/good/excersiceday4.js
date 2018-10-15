var quotes = ["Whatever you do, do it well. – Walt Disney",
    "Problems are not stop signs, they are guidelines. – Robert H. Schiuller",
    "If you tell the truth you don’t have to remember anything. – Mark Twain",
    "I could agree with you but then we’d both be wrong. – Harvey Specter",
    "To live will be an awfully big adventure. – Peter Pan"
];

var quoters = document.getElementById("quoted");
quoters.innerHTML=quotes[0];
var quoteplace=0;

var timerInc= function (){
    quoteplace++;
    if (quoteplace===5){
        quoteplace=0;
    }
    quoters.innerHTML= quotes [quoteplace];
}
setInterval(timerInc, 30000);

backB= document.getElementById("backwards");
nextB= document.getElementById("forwards");
backB.addEventListener ("click",event => {
        quoteplace =quoteplace-1;
        if(quoteplace<0){
        quoteplace=4;
        }
        quoters.innerHTML=quotes[quoteplace];
}
)
nextB.addEventListener ("click",event => {
    quoteplace =quoteplace+1;
    if(quoteplace===5){
    quoteplace=0;
    }
    quoters.innerHTML=quotes[quoteplace];
}
)

