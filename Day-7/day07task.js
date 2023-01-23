// a.Get all the countries from the asia continent/region using filter fn:

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
// console.log(result.region)
var out=result.filter((data)=>{
    return  data.region==='Asia'
})
console.log(out)

}


// b.Get all the countires with population of less than 2 lakhs using filter fn:

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
var out=result.filter((data)=>{
    return  (data.population
  <=200000)
})
console.log(out)
}

// c.Print the following details name, capital, flag using forEach function

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);

result.forEach((data) => {
    (console.log(data.name,data.capital,data.flag))
    
});

}

// d.Print the total population  countries using reduce F

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);

    const addPopulation = result.reduce((accumulator, data) => { accumulator + data.population;
    return accumulator + data.population;
    
})
console.log(addPopulation)}



// e.Print the country which uses US Dollars as currency.
var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    for(var i in result){
        console.log(i,result[i].currencies[0].code)
   
  }
 var out=result.filter((data)=>{
        return  (data[i].currencies[0].code == "USD")
    })
    console.log(out)
  
}
