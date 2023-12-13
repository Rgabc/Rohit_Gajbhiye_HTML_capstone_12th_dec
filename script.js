//  function imag(){
//    // console.log(url)
//     const event = new CustomEvent('dataEvent', { detail: { data:"hello" } });
//    document.dispatchEvent(event);
// }
// imag()
//document.getElementById('new').innerHTML=`hello`
// const addToMyFavourite=document.querySelector(".image")
// addToMyFavourite.addEventListener('click',()=>{
//    console.log(addToMyFavourite.src)
 
// })



// function pic(){
//     let pics=document.querySelectorAll('.image')
//     // pics.forEach((row)=>{
//     //     console.log(row.src)
        
//     //     // pic.addEventListener('click',()=>{
//     //     //     console.log(row.src)
    
//     //         // console.log(addToMyFavourite.src)
//     //         // console.log(row.parentNode.querySelector('.image'))
          
//     //      })
      
    
//  //   })
//    // console.log(pics)


// }
// let flag=0;
const fav=document.querySelectorAll('[data-action="add_to_favourite"]')

console.log(fav)
const items=[]
fav.forEach((row,i)=>{
    console.log(i)
    row.addEventListener('click',()=>{
        
        const item=row.parentNode
    console.log(item.querySelector('.image'))
    const src=item.querySelector('.image').getAttribute('src')
    console.log(src)
    // const event = new CustomEvent('dataEvent', { detail: { data:src } });
    //  document.dispatchEvent(event);
    
    const favItem={
        id:Math.round(Math.random()*1000),
        image:src,
    }
    items.push(favItem)
   // let arrayItem=[favItem,...items]



   row.classList.add('red')
// console.log(flag)
// if(flag==0){
    
//     flag=1
  
// }
// else{
//     items.pop()
//     row.classList.remove('red')
//     flag=0
   
    
// }


storeTo(items)
// price(items)


    })
    
   

})
async function storeTo(items){
 await   localStorage.setItem('fav', JSON.stringify(items));

 const fav1 = JSON.parse(localStorage.getItem('fav'));
// console.log(f[].image)
console.log(fav1.length)
document.getElementById('item_lent').innerHTML=`My Favourite (${fav1.length})`

}
const cartItem=[]
// function price(value){
//     console.log(value)
    const cart=document.querySelectorAll('[data-action="add_to_cart"]')
console.log(cart)

cart.forEach((row)=>{
    row.addEventListener('click',async ()=>{
        console.log(row.parentNode)
        const item=row.parentNode
        const src=item.querySelector('.image').getAttribute('src')
        const v=item.querySelector('.value').getAttribute('value')
        console.log(v)
        const price=Number(v);
        console.log(price)
        const favItem={
            id:Math.round(Math.random()*1000),
            image:src,
             value:price,
             quantity:1
    
        }
        console.log(favItem)
      await  cartItem.push(favItem)

      
        storeToCart(cartItem)

    })
  
})



// }
async function storeToCart(items){
    await localStorage.setItem('cart', JSON.stringify(items));
   
    const cartLength = JSON.parse(localStorage.getItem('cart'));
   // console.log(f[].image)
   console.log(cartLength.length)
  document.getElementById('cart_lnt').innerHTML=`My cart <sup>(${cartLength.length})</sup>`
   
   }


