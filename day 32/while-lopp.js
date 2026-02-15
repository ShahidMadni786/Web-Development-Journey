let i = 1;
while(i <= 10){
    if(i == 6){
        i++; // Increment before continue to avoid infinite loop
        continue;
    }
    console.log(i);
    i++;
}
