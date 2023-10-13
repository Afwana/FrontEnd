import { BASE_URL } from './baseURL'
import { commonAPI } from './commonAPI'

// uploading video 
export const uploadVideo = async (video)=>{
    //http post request to http://localhost:4000/videos for adding videos in json server and return response to Add component
    return await commonAPI("POST",`${BASE_URL}/videos`,video)
}

// get all videos from json server
export const getAllVideos = async ()=>{
    //http get request to http://localhost:4000/videos for getting videos from json server and return response to View component
    return await commonAPI("GET",`${BASE_URL}/videos`,"")
}

// get a single vido from json server
export const getAVideo = async (id)=>{
    //http get request to http://localhost:4000/videos/id for getting video from json server and return response to VideoCard component
    return await commonAPI("GET",`${BASE_URL}/videos/${id}`,"")
}

// delete a single vido from json server
export const deletAVideo = async (id)=>{
    //http delete request to http://localhost:4000/videos/id for deleting video from json server and return response to VideoCard component
    return await commonAPI("DELETE",`${BASE_URL}/videos/${id}`,{})
}

// insert video in watch history to json server
export const addToHistory = async (videoHistory)=>{
    // http post request to http://localhost:4000/history for adding video histroy to json server and return response to VideoCard
    return await commonAPI("POST",`${BASE_URL}/history`,videoHistory)
}

// get video watch history from json server
export const getHistory = async ()=>{
    // http get request to http://localhost:4000/history to get video history from json server and return response to watchHistory
    return await commonAPI("GET",`${BASE_URL}/history`,"")
}

// delete video from watch history from json server
export const deleteHistory = async (id)=>{
    // http delete request to http://localhost:4000/history/id to delete video from history from json server and return response to watchHistory
    return await commonAPI("DELETE",`${BASE_URL}/history/${id}`,{})
}

// adding category 
export const addCategory = async (body)=>{
    //http post request to http://localhost:4000/categories for adding category in json server and return response to category component
    return await commonAPI("POST",`${BASE_URL}/categories`,body)
}

// get all categories
export const getAllCategory = async ()=>{
    //http get request to http://localhost:4000/categories for getting categories in json server and return response to Category component
    return await commonAPI("GET",`${BASE_URL}/categories`,"")
}

// remove category
export const deleteCategory = async (id) =>{
    //http delete request to http://localhost:4000/categories/id for deleting categories in json server and return response to Category component
    return await commonAPI("DELETE",`${BASE_URL}/categories/${id}`,{})
}

// update category from json server
export const updateCategory = async (id,updatedCategoryBody)=>{
    //http put request to http://localhost:4000/categories/id for updating existing category from json server and return response to Category component
    return await commonAPI("PUT",`${BASE_URL}/categories/${id}`,updatedCategoryBody)
}