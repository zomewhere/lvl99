const products = [
    {id:"01", price:9990, name:"random 1", stock:10, description:"loremse ipsum dolor sit amet", img:"https://picsum.photos/300/300?random=1" },
    {id:"02", price:5990, name:"random 2", stock:7, description:"loremcipo ipsum dolor sit amet", img:"https://picsum.photos/300/300?random=2" },
    {id:"04", price:12990, name:"random 3", stock:4, description:"loremasdwe ipsum dolor sit amet", img:"https://picsum.photos/300/300?random=3" },
    {id:"05", price:2990, name:"random 4", stock:4, description:"loremasdwe ipsum dolor sit amet", img:"https://picsum.photos/300/300?random=4" },
    {id:"06", price:15490, name:"random 5", stock:8, description:"lorsdfemasdwe ipsum dolor sit amet", img:"https://picsum.photos/300/300?random=5" },
    {id:"07", price:19090, name:"random 6", stock:22, description:"loremasdfgere ipsum dolor sit amet", img:"https://picsum.photos/300/300?random=6" },
    {id:"08", price:29990, name:"random 7", stock:30, description:"loremasdwe ipsumerret dolor sit amet", img:"https://picsum.photos/300/300?random=7" }
]

export const getData = new Promise ((resolve, reject) =>{
    let condition = true
    setTimeout(()=>{
      if(condition){
        resolve(products)
      }else{
        reject('salio mal :(')
      }
    },3000)
  })

