import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const { userId } = useParams();
    return (
        <div>
            <h2>User ID: {userId}</h2>
        </div>
    )
}
export default User;