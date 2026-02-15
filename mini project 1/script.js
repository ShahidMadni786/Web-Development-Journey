
let x = document.getElementById("from");
let y = document.getElementById('to');
let f = document.getElementById("fromflag");
let t = document.getElementById("toflag");
let btn = document.getElementById("btn1");
let inp = document.getElementById("amount");
let msg = document.getElementById("msg");

// Populate the dropdowns
for (const [key, value] of Object.entries(countryList)) {
    let option = document.createElement("option");
    let option2 =  document.createElement("option");
    option.text = key;
    option.value = key;
    x.add(option);
    option2.text = key;
    option2.value = key;
    y.add(option2);
}

// Function to update flag
let updateFlag = (selectElement, flagImageElement) => {
    const currencyCode = selectElement.value;  // Get the selected currency code
    const countryCode = countryList[currencyCode];  // Map currency code to country code
    const flagUrl = `https://flagsapi.com/${countryCode}/flat/64.png`;
    flagImageElement.src = flagUrl;
};

// Initial flag setup
updateFlag(x, f);
updateFlag(y, t);

x.addEventListener("change", () => {
    updateFlag(x, f);
});
y.addEventListener("change", () => {
    updateFlag(y, t);
});


btn.addEventListener("click", async (event)=>{
    event.preventDefault();
    if(inp.value==""){
        inp.value = 1;
    }
  const amount = parseInt(inp.value);
    var myHeaders = new Headers();
    myHeaders.append("apikey", "nXPshvQgj945pILBxKI7kiqxbeeH6Z32");
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    
    let response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${y.value}&from=${x.value}&amount=${inp.value}`, requestOptions);
    
    
    let data = await response.json();
    let finalAmount = data.result;
    
    
    msg.textContent = inp.value + " " +x.value.toUpperCase()+ " "+ "= " + finalAmount +" "+y.value.toUpperCase(); 

});
       

  
