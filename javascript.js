function waittingFn(timeInMs){
    futureTime = Date.now() + timeInMs;
    while (futureTime>Date.now()){
     //waiting...   
    }
}


waitting(3000);
console.log("Function called has just ended!");