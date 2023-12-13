

    const fav = JSON.parse(localStorage.getItem('cart'));
    function cart(){
    document.getElementById('item_lent').innerHTML=`My Favourite ${fav.length}`
    fav.map((row,i)=>{
        console.log(row)
        console.log(row.image)
        const src=row.image
        console.log(src)
        const price=row.value
        console.log(row.quantity)
        // const t=[]
        // t.push(fav[i].value)
        // console.log(t)
        // console.log(total)
       
    
       const favPic=document.querySelector('.new')
   
    favPic.insertAdjacentHTML("beforeend",`
    <div class=cartItem>
    <div class="cart_item"><img class="favPic" src="${src}"/>
    <h4 class="price">₹${price}</h4>
    <button class='increase' data-action="increase">+</button>
    <h4 class="quant">${row.quantity}</h4>
    <button class='decrease' data-action="decrease" )'>-</button>
    <button class="dlt" onclick='itemDlt(${row.id})' >Delete</button>
    </div> 
    </div>
    
     
          
    `)
    const cartItem=favPic.querySelectorAll('.cartItem')
    cartItem.forEach((item)=>{
      console.log(item.querySelector('.price').innerText==price)
      if( item.querySelector('.price').innerText==price

      ){
        // item
        // .querySelector('[data-action=increase]')
        // .addEventListener("click",()=>{
        //   fav.forEach((cartItm)=>{
        //     if( cartItm.value==price)
        //     {
        //       cartItem.querySelector(".quant").innerText=++cartItm.quantity

        //     }

        //   })
        // })


      }
      else{
        item
        .querySelector('[data-action=increase]')
        .addEventListener("click",()=>{
          fav.forEach((cartItm)=>{
            console.log(item)
            if( cartItm.value==price)
            {
           
             const inc=  item.querySelector(".quant").innerText=++row.quantity
           let total=0
           console.log(inc)
           console.log(price)
           total +=price*inc
           console.log(total)
           document.querySelector(".totalPrice").innerText=total
         
            

            }

          })
        });

        item
        .querySelector('[data-action=decrease]')
        .addEventListener("click",()=>{
          fav.forEach((cartItm)=>{
            console.log(item)
            if( cartItm.value==price)
            {
           
              const inc= item.querySelector(".quant").innerText=--row.quantity
              let total=0
               total +=price*inc
               console.log(total)
               document.querySelector(".totalPrice").innerText=total
            
  
            }
  
          })
        })
       

      }
      







    })


    // total()
    })
    }
    cart()
    function buy(){
     const url="../form/index.html"
     window.open(url,'_blank')
      
    }
     function itemDlt(id){
      
        console.log(fav)
        // localStorage.clear()

        
        alert(id)
      const del=fav.filter((row)=>{
          console.log(row)
           
          return row.id!==id
           
            

        })
        console.log(del)
        localStorage.setItem('cart', JSON.stringify(del));
        window.location.reload()
    
   
       }
      
      //  function add(id){
      //   alert(id)
      
      //   fav.forEach((row)=>{
      //     if(row.id===id){
      //       let quant=row.quantity++;
      //       total(quant,id)
      //       console.log(quant)
      //       const src=row.image
      //       const price=row.value
      //       const favItem={
      //         id:id,
      //         image:src,
      //          value:price,
      //          quantity:quant
      
      //     }
      //     const i=[...fav,favItem]
      //     localStorage.setItem('cart', JSON.stringify(i));
      //     window.location.reload()


      //     }

      //   })
        
      //  }
      //  function sub(id){
        
      //   fav.forEach((row)=>{
      //     if(row.id===id){
      //       let quant=row.quantity--
      //       total(quant,id)
      //       console.log(quant)
      //       const src=row.image
      //       const price=row.value
      //       const favItem={
      //         id:id,
      //         image:src,
      //          value:price,
      //          quantity:quant
      //     }
      //     const i=[...fav,favItem]
      //     localStorage.setItem('cart', JSON.stringify(i));
      //     window.location.reload()



            
            
      //       total(quant,id)
      //     }

      //   })
       
        
       
      //  }
      //  function total(quantity,id){
      //   console.log(quantity)
      //   let cartTotal=0
      //   fav.forEach((row)=>{
      //     // console.log(row)
      //     // console.log(row.image)
      //     // const src=row.image
      //     // console.log(src)
      //     const price=row.value
      //     console.log(price)
      //     cartTotal+=quantity*price
      //     console.log(cartTotal)
      //   //   if(row.id==id){
      //   //     console.log(quantity*price)
      //   //     const total=0;
      //   //     total +=quantity*price
      //   //     console.log(total)
      //   //    const itemPrice= document.querySelector('.totalPrice')
      //   //    itemPrice.innerHTML=`<h1>total Item cost:-<span>${total}</span></h1?`
      //   //   }

      //   })
      //   // console.log(fav)
      //  }
  
      
   
   


