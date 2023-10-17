import * as request from "~/utils/request";

export const search = async (name_like) => {
    try {
    const res =await request.get('/address',{
        params: {
            name_like,
        },
    });
    return res; //ko .data
    // .then(res => res.json())
    
    
}catch(error) {
    console.log(error);
    };
    
};
