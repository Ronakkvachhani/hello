let btn = document.querySelector('button');
        let output = document.querySelector('h1');
        
        function getRandomNumber(min,max) {
        let step1 = max-min +1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2) + min;
        return result;
        }
        
        function createArrayofNumbers(start,end) {
        let myArray = [];
        
        for(let i= start;i<= end;i++) {
        myArray.push(i);
        }
        return myArray;
        }
        
        let numbersArray= createArrayofNumbers(1,90);
        console.log(numbersArray);
        
        btn.addEventListener('click', () =>{
        if(numbersArray.length ==0) { output.innerText = "No more Numbers";
        return;}
        let randomIndex = getRandomNumber(0,numbersArray.length-1);
        let randomNumbers= numbersArray[randomIndex];
        numbersArray.splice(randomIndex, 1);
        output.innerText = randomNumbers;
        current = randomNumbers;
        let element = document.querySelectorAll("[data-id='" + current + "']");
    document.getElementById("hea").innerHTML=current;

for(var i=0; i<element.length;i++)
{
element[i].style.color = "yellow";
}
        } );