import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';


export const PostItems = createContext(
    {
    post:[],
    addPost:()=>{},
    deletePost:()=>{},
    }
);

let postUpdatedFunction = (currPost, action) => {
    let newPost;
    if (action.type === "add_Post") {
        newPost = [...currPost, action.payload.getData];
    } else if (action.type === "delete_Post") {
        newPost = currPost.filter((post) => post.id !== action.payload);
    } else {
        newPost = currPost;
    }
    return newPost;
};

// let postUpdatedFunction = (currPost, action) => {
//     let newPost=currPost;
//     if(action.type=="add_Post"){
//         console.log(action.payload);
//         newPost=[...currPost, action.payload];

//     }else if(action.type=="delete_Post"){
//         newPost=currPost.filter((ele)=> ele.id!==action.payload)
//     }
//     return newPost;
// }

export default function PostList({children}){
    let[post, dispatchPost]=useReducer(postUpdatedFunction, [
        {
            id:uuidv4(),
            userID:"sunny_09",
            title:"Travel to Mumbai",
            description:"I am trvelling to mumbai for Vacation",
            img:"https://www.shutterstock.com/image-photo/highway-traffic-sunset-road-metal-260nw-1158115840.jpg",
            tag:["#Mumbai", "#Travellers", "#Enjoying"],
        }
    ]);

    let addPost = (getData)=>{
        let newPost = {
            type:"add_Post",
            payload:{
                getData,
            }
        }
        dispatchPost(newPost);
    }

    let deletePost = (id)=>{
        let removePost={
            type:"delete_Post",
            payload:id
        }
        dispatchPost(removePost);
    }

    return (
        <>
        <PostItems.Provider value={{
            post,
            addPost,
            deletePost,
        }}>
            {children}
        </PostItems.Provider>
        </>
    )
}