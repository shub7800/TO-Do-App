let todo=[];
let req=prompt("Please enter the request");
console.log(req);
while(true){
    if(req=="quit"){
        console.log("Quitting the app");
        break;
    }else if (req=="list"){
        console.log("----------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("----------------");
    }else if(req=="add"){
        let task=prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }else if(req=="delete"){
        let idx=prompt("please enter the tast index");
        todo.splice(idx,1);
        console.log("task Delete");
    }
    else{
        console.log("Wrong Request");
    }
    req=prompt("Please enter your request");
}