const vegPromeise = new Promise((resolve,reject)=>{
    let vegArr = ["🌽","🍆","🍅",,"🌶️","🥒","🥦","🥔","🥕","🧅","🧄",]
setTimeout(()=>{
    resolve(vegArr);
},3000);
});

async function printveg(){
    console.log("Please wait");
    let vegetables = await vegPromeise;
    console.log("successful => running print...");

    vegetables.forEach((vegetables)=>{
        console.log(vegetables);
        let mainDiv = document.createElement("div");
		document.body.appendChild(mainDiv);
		mainDiv.innerText += vegetables;
    });
}
printveg()