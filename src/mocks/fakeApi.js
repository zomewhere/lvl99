const products = [
    {id:"01", name:"random1", stock:10, description:"lorem ipsum dolor sit amet", img:"https://picsum.photos/200" },
    {id:"02", name:"random2", stock:10, description:"lorem ipsum dolor sit amet", img:"https://picsum.photos/200" },
    {id:"03", name:"random3", stock:10, description:"lorem ipsum dolor sit amet", img:"https://picsum.photos/200" }
]

export const getData = new Promise ((resolve, reject) =>{
    let condition = true
    setTimeout(()=>{
        if(condition){
            resolve(products)
        }else{
            reject("no cargó")
        }
    },3000)
})