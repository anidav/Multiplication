var container = document.getElementsByClassName("container")[0];
var table = document.createElement("table");

function createTable() {     
    for (let i = 0; i <= 9; i++) {
        var row = document.createElement("tr");
        for (let j = 0; j <= 9; j++) {            
            var cell = document.createElement("td");   
                if(i === 0)
                    cell.innerHTML = j;                                    
                if(j === 0)
                    cell.innerHTML = i;
            cell.width = 20 + "px";       
            cell.height = 20 +"px";      
            row.appendChild(cell);
            cell.classList.add("table_cell");
        }
        table.appendChild(row);
    }
    container.appendChild(table);       
}
createTable();

function multiple() {
    let trueAnswer = 0;
    for(let i = 1; i <= 9; i++){
        for(let j = 1; j <= 9; j++){
            let point = table.rows[i].cells[j];
            point.style.cursor = "pointer";
            point.addEventListener("click", () => {    
                if(!event.target.innerHTML) {
                let message = document.getElementById("message");
                let answer = prompt("What do you think is equal?  " + i + " * " + j, "");
                    if(answer == i * j) { 
                        trueAnswer++;
                        message.innerHTML = "Your answer is correct!";
                        point.style.backgroundColor = "#52a552";    
                        point.style.color = "white";        
                        message.style.color = "#52a552";
                        point.innerHTML = i * j;
                    }
                    else {
                        message.innerHTML = "Your answer is incorrect!";
                        point.style.backgroundColor = "#db3030";  
                        point.style.color = "white";            
                        message.style.color = "#db3030";
                        point.innerHTML = "X";
                    }    
                }
                else {
                    return;
                }    
                SeeResult(trueAnswer); 
            });   
        }      
    }
}
multiple();


function SeeResult(answers) {
    let button = document.getElementById("result");
    button.addEventListener("click", function() {
        message.innerHTML = "Your correct answers are " + Math.round((answers * 100)/81) + "%";
    })
}


