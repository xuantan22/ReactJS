/* eslint-disable no-unreachable */

  

        const  cart = [];
 
const  handleCart = (state = cart,action) => {
    switch(action.type){
       
        case "ADDITEM":
            return [
                ...state,
                action.payload
           ]
            break;
           
        
        case "DELITEM":
            return state = state.filter((x) => x[0].id !== action.payload);
            break;

        case "DELALLITEM":
            return cart;
            break;
        default:
            return state;
    }
}
export default handleCart;
