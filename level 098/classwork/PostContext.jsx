import { createContext, useState } from "react";
import { getData, setData } from "../utils/storage";
import { toast } from "react-toastify";


export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState(getData("posts") || []);
    const [like,setLike] = useState(() => {
        const saved = getData('likes')
        return saved ? saved : 0
    });
    const [comment,setComment] = useState(false)
    const [comments, setComments] = useState(() => {
    return getData('comments') || []
})
    
    const addPost = (post) => {
        setPosts((prev) => {
            const updatedPosts = [post, ...prev];
            setData("posts", updatedPosts);
            return updatedPosts;
        });

        toast.success("Post added succesfully!");
    };
    const handleLike = () => {
        setLike(prev => {
            const newLike = prev + 1;
            setData('likes',newLike);
            return newLike
        })
        
    }
   const addComment = (e) => {
    e.preventDefault();

    const newComment = {
        content: e.target.content.value
    };

    setComments(prev => {
        const updated = [...prev, newComment];
        setData('comments', updated);
        return updated;
    });

    e.target.reset();
}
    const deletePost = (postId) => {
        setPosts((prev) => {
            const updatedPosts = prev.filter((post) => post.id !== postId);
            setData("posts", updatedPosts);
            return updatedPosts;
        });

        toast.success("Post deleted succesfully!");
    };

    const getUserPosts = (user) => {
        return posts.filter((post) => post.userId === user?.id);
    };


    return (
        <PostContext.Provider value={{ posts, addPost, deletePost, getUserPosts,handleLike,like,addComment,comment,comments,setComment}}>
            {children}
        </PostContext.Provider>
    );
};