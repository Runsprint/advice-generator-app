let title = document.getElementById("advice");
let text = document.getElementById("text2");
let button = document.getElementById("butt");

//main function,where I chavashene(embed) function into function, it will process when clicked button.
button.addEventListener("click",getAdvice);
// i took advices and ids from API(its not page, its tool  and we can connect two sites of each others) 
function getAdvice () {
    //just check, if there will be error, title will red 
        if(title.style.color == "red"){
            title.style.color = "#53FFAA";
        }
        //fetch function(copied)
        //then functions(short version of functions)
        fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            let id = data.slip.id;   //access(chavwvdi) datas' id's tthe first and after advices
            let advice = data.slip.advice;
            //for change title 
            title.textContent = `ADVICE# ${id}`;
            text.textContent = advice; // after chavwvdit textcontent of text and = advice
        })
        //function catch(dachera erroris);
        .catch (function(error){
            console.log(error);
            title.textContent = "something went wrong";
            title.style.color = "red";
        })
}