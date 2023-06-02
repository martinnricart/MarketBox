import  {createContext, useState} from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {

        if(!isInCart(item.id)){
          setCart([...cart, {...item, quantity}])
                }else{
                    setCart(cart.map((prod)=>{
                      if(prod.id === item.id){
                          return {...prod, quantity:prod.quantity + quantity}
                      }else{
                          return prod
                      }
                  })) 
                  
                }
       
      }

    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const precioTotal = () => {
        return  cart.reduce(
        (acc, item) => acc + item.precio * item.quantity,
        0
    );
    }
    
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)
    

    return(
        <CartContext.Provider value={{ cart, precioTotal, totalQuantity, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    );
};
