//api to upload vedio 

import {commonAPI} from "./commomAPI"
import { serverURL } from "./serverURL"

//api to upload video

export const  uploadAllvideo=async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/videos`,reqBody )
}

//api to get all video

export  const getAllVideos = async()=>{
  return await commonAPI('GET',`${serverURL}/videos`,"")
 }
 // API to delete video from player
 export const deleteVideos=async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
 }
// Add watch history
export const addToHistory=async(videoDetails)=>{
  return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

//to get data from history

export const getAllHistory=async()=>{
  return await commonAPI('GET',`${serverURL}/history`,"")
}

//to add data to category

export const addToCategory=async()=>{
  return await commonAPI('POST',`${serverURL}/Category`)
}
//api  to ddlete history
export const deleteHistory =async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}
//api to add category
export const addTooCategory = async(body)=>{
  return await commonAPI('POST',`${serverURL}/category`,body)
  }
  //api to get all category
  export const getAllCategory =async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")
  }
// api to delete category
  export const deleteCategory=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
  }
  //api to get a video 
  export const getaVideo=async(id)=>{
    return await commonAPI('GET',`${serverURL}/videos/${id}`,{})
  }

  //api call to upadate the category 
  export const updateCategory=async(id , body)=>{
    return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
  }