
var res=[
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      
    }]
    // for in
for (var key in res) {
  console.log(res[key].id, res[key].title)
// }  1 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
// 2 'qui est esse'
// 3 'ea molestias quasi exercitationem repellat qui ipsa sit aut'
// 4 'eum et est occaecati'
 // for
for (var i = 0; i < res.length; i++) {
  console.log(res[i].id, res[i].title)
}
// 1 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
// 2 'qui est esse'
// 3 'ea molestias quasi exercitationem repellat qui ipsa sit aut'
// 4 'eum et est occaecati'
// forEach
res.forEach(function (key) { console.log(key.id, key.title); });
// 1 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
// 2 'qui est esse'
// 3 'ea molestias quasi exercitationem repellat qui ipsa sit aut'
// 4 'eum et est occaecati'
res.forEach((v) => console.log(v.id, v.title))
// 1 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
// 2 'qui est esse'
// 3 'ea molestias quasi exercitationem repellat qui ipsa sit aut'
// 4 'eum et est occaecati'
// for ..of
let text = "";
for (let x of res[key].id) {
  text += x;
}
console.log(text);
}
