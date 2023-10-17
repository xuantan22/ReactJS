import * as request from "~/utils/request";
import { prototype } from "react-modal";

export const search = async (title_like) => {
    try {
    const res =await request.get('/products',{
        params: {
            title_like,
        },
    });
    return res; //ko .data
    // .then(res => res.json())
    
    
}catch(error) {
    console.log(error);
    };
    
};

