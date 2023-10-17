export const addCart =(product) => {
    return{
        type:"ADDITEM",
        payload:product
        
    }
}

export const delCart =(product) => {
    return{
        type:"DELALLITEM",
        payload:product
        
    }
}

export const delItem =(product) => {
    return{
        type:"DELITEM",
        payload:product,
        
    }
}
export const totalBill =(product) => {
    return{
        type:"TOTALBILL",
        payload:product,
        
    }
}
export const getAllProduct =(product) => {
    return{
        type:"GET_ALL_PRODUCT",
        payload:product
        
    }
}

export const counterProducts =() => {
    return{
        type:"GET_NUMBER_CART",
     
    }
}