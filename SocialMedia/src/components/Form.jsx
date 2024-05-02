import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { useContext } from "react";
import { PostItems } from "../store/social-media-post-logic";


export default function Form(){
    let {addPost}=useContext(PostItems);
    const [tag, setTag] =useState("");
    

    let [getData, setGetData]=useState({
        id:uuidv4(),
        userID:"",
        title:"",
        description:"",
        img:"",
        tag:[]
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setGetData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleTags = (e) => {
        setTag(e.target.value);
    };

    const handleTagAdd = () => {
        if (tag.trim() !== "") {
            setGetData(prev => ({
                ...prev,
                tag: [...prev.tag, tag]
            }));
            setTag("");
        }
    };

    

    // let handleOnChange =(event)=>{ 
    //     setGetData((prev)=>{
    //         return {...prev,
    //                 [event.target.name]:event.target.value,
    //             }
    //     })
    // }


    // let handleOnChange =(event)=>{
    //     setGetData((prev)=>{
    //         return {...prev, [event.target.name]:event.target.value}
    //     })
    // }

    let handleOnSubmit = (event)=>{
        console.log(getData)
        console.log(event);
        event.preventDefault();
        addPost(getData, tag);
        setGetData({
            id:uuidv4(),
            userID:"",
            title:"",
            description:"",
            img:"",
            tag:[]
        })
    }


    return (
        <div className="form-container">
            <h3 className="row col-6 offset-3 mt-2">Create Post</h3>
            <form action="/" className="row col-6 offset-3 mt-3" onSubmit={handleOnSubmit} >
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name="userID" value={getData.userID} onChange={handleOnChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={getData.title} onChange={handleOnChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea name="description" id="description" className="form-control" cols="20" rows="3" value={getData.description} onChange={handleOnChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="url" className="form-label">Img Url</label>
                    <input type="text" className="form-control" id="url" name="img" value={getData.img} onChange={handleOnChange}/>
                </div>
                <div className="mb-3 row align-items-center">
                    <label htmlFor="tags" className="form-label ">Tags</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="tags" name="tag" value={tag} onChange={handleTags}/>
                    </div>
                    <div className="col-md-2">
                        <button type="button" className="btn btn-primary tagBtn" onClick={handleTagAdd}>Add Tag</button>
                    </div>
                </div>
                <button className="btn btn-primary submit_btn col-2 offset-5 ">Post</button>
            </form>
        </div>
    )
}