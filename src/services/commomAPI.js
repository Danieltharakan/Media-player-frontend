import axios from "axios"

export const commonAPI =async(httpmethod,url,reqBody)=>{
    let reqconfig={

        method: httpmethod,
        url ,
        data:reqBody,
        Headers:{
            "Content-Type": "application/json"
        }

    }
    return await axios(reqconfig).then((result)=>
    {
        return result
    }).catch((err)=>{
        return err
    })
}