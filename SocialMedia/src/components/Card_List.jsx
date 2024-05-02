import Card from "./Card"
import { useContext } from "react"
import { PostItems } from "../store/social-media-post-logic"



export default function Card_List(){

    const {post} =useContext(PostItems);
    return (
        <>
        <div className="card-box">
        {post.map((items)=> <Card key={items.id} postdata={items}></Card>)}
        </div>
        </>
    )
}