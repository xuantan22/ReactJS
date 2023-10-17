import * as request from "~/utils/request";
export const display= async (url,type, id,src) => {
    try {
    const res =await request.get(url,{
        params: {
            type,
            id,
            src,
          
        },
    });
    return res; //ko .data
    // .then(res => res.json())
    
    
}catch(error) {
    console.log(error);
    };
    
};
