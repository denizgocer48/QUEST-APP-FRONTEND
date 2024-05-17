import React, { useState, useEffect } from "react"; // Correct import statement
import Post from "../Post/Post";

function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]); // Follow camelCase convention

    useEffect(() => {
        fetch("/posts")
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(
            (result) => {
                setIsLoaded(true);
                setPostList(result);
            })
        .catch(error => {
            setIsLoaded(true);
            setError(error);
        });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="container">
                {postList.map(post => (
                    <Post key={post.id} title={post.title} text={post.text} />
                ))}
            </div>
        );
    }
}

export default Home;
