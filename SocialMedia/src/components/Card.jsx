import { MdOutlineDelete } from "react-icons/md";
import { useContext } from "react";
import { PostItems } from "../store/social-media-post-logic";

export default function Card({postdata}){
    let {deletePost} =useContext(PostItems);
    return (
        <>
        <div className="card card-container" style={{width: "18rem"}}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete_post" style={{fontSize:"1rem"}} onClick={()=> deletePost(postdata.id)}>
        <MdOutlineDelete />
        </span>
            <img src={`${postdata.img}`} className="card-img-top cardImg" alt="Okay">
            </img>
            <div className="card-body" key={postdata.id}>
                <p style={{fontWeight:"bolder"}}>@{postdata.userID}</p>
                <h5 className="card-title">{postdata.title}
                </h5>
                <p className="card-text">{postdata.description}</p>
                <hr />
                
                {postdata.tag.map((ele,idx)=> <a href="#" style={{textDecoration:"none"}} className="tags" key={idx}>{ele} &nbsp;</a> )}
            </div>
        </div>
        </>
    )
}