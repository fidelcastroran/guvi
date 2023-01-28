
// to find frequency and remove keys , values and entries
let a = userInput[0].split(' ')
   const s ={}
   a.map((x) =>{
       s[x] = s[x] + 1 || 1
   })
   let k =Object.keys(s)
   let v =Object.values(s)
   let e= Object.entries(s)
   let max = Math.max(...v)
   let i = v.findIndex((x) => {
       return x == max;
   })
   console.log(e[i].join(' '))


//    prime numebr
const arr= [1,2,3,4,5,6,7,8,9]

let b = arr.filter((item) => {

    for (let i = 2; i < item; i++) {
        if (item % i === 0)
            return false;
    }
    return item !== 1;

})

if(b==arr){
    console.log('yes')
}else{
    console.log('no')
}