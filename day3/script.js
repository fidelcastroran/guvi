var request=new XMLHttpRequest();
request.open("GET",'https://restcountries.com/v3.1/all')
request.send();
request.onload=function(){
    var json=JSON.parse(request.response);
    // console.log(json[0])
// for in
for( let key in json) 
    console.log( key, json[key].area, json[key].name )
  }
//   for
for(var i=0; i<json.length;i++){
    console.log(i, json[i].area, json[i].name)

}
// forEach
json.forEach(function(key) { console.log( key.area,key.name) });
json.forEach((v) =>  console.log(v.name,v.name))
