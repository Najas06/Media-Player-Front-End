import {server} from "./serverURL";
import { commonAPI } from "./commonApi";
import Category from "../components/Category";

// 1) upload Video 

export const uploadVideo = async(reqBody)=>{
    console.log("=======details======");
    console.log(reqBody);
    return await commonAPI('POST',`${server}/videos`,reqBody)
}
// 2) get all Videos 
export const getAllVideos = async()=>{
    return await commonAPI ('GET',`${server}/Videos`,"")
}
// 3) delete video 
export const deleteVideo = async(id)=>{
    return await commonAPI('DELETE',`${server}/videos/${id}`,{})
}

// 4) Add to Watch History 
export const addToHistory = async(videoDetails)=>{
    return await commonAPI('POST',`${server}/history`,videoDetails)
}

// 5) get all watchhistory 
export const getAllWatchHistory = async()=>{
    return await commonAPI('GET',`${server}/history`,"")
}

// 6) delete watch history 
export const deleteWatchHistory = async(id)=>{
    return await commonAPI('DELETE',`${server}/history/${id}`,{}) 
}

// 7) add Category
export const addCategory = async(reqBody)=>{
    return await commonAPI('POST',`${server}/category`,reqBody)
}

// 8) Get all Categories
export const getAllCategories = async()=>{
    return await commonAPI('GET',`${server}/category`,"")
}

// 9) Delete Category 
export const deleteCategory = async(id)=>{
    return await commonAPI('DELETE',`${server}/category/${id}`,{})
}