//dispatch functions

export const increase = (quantity)=>{
    return {
            type:"increase",    
            payload:quantity  
        
    }
}
export const decrease =(quantity)=>{
    return  {
        type:"decrease",    
        payload:quantity  
    
}
}
export const withdraw = (amount)=>{
    return {
        type:"withdraw",
        payload: amount
    }
}
export const deposite = (amount)=>{
    return {
        type:"deposite",
        payload: amount
    }
}

