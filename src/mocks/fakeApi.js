export const products = [
    {id:1, price:9990, name:"random 1", stock:10, description:"loremse ipsum dolor sit amet", img:"https://picsum.photos/300/300?random=1" },
    {id:2, price:5990, name:"random 2", stock:7, description:"loremcipo ipsum dolor sit amet", img:"https://picsum.photos/300/300?random=2" },
    {id:3, price:12990, name:"random 3", stock:4, description:"loremasdwe ipsum dolor sit amet", img:"https://picsum.photos/300/300?random=3" },
    {id:4, price:2990, name:"random 4", stock:4, description:"loremasdwe ipsum dolor sit amet", img:"https://picsum.photos/300/300?random=4" },
    {id:5, price:15490, name:"random 5", stock:8, description:"lorsdfemasdwe ipsum dolor sit amet", img:"https://picsum.photos/300/300?random=5" },
    {id:6, price:19090, name:"random 6", stock:22, description:"loremasdfgere ipsum dolor sit amet", img:"https://picsum.photos/300/300?random=6" },
    {id:7, price:29990, name:"random 7", stock:30, description:"loremasdwe ipsumerret dolor sit amet", img:"https://picsum.photos/300/300?random=7" }
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

export const getProds = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = products.filter(
            (prod) => prod.category === categoryId
        );
        setTimeout(() => {
            categoryId ? resolve(productosFiltrados) : resolve(products);
        }, 3000);
    });
};

export const getProd = (id) => {
    return new Promise((resolve, reject) => {
        const productoEncontrado = products.find(
            (prod) => prod.id === Number(id)
        );
        setTimeout(() => {
            resolve(productoEncontrado);
        }, 3000);
    });
};

