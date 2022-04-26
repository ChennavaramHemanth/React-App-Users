import React, { Fragment, useEffect, useState } from "react";


function UserDetail({ user }) {
    const [isModified, setIsModified] = useState(false);
    const { id, name, discription, image} = user || {};

    console.log("image###", image);
    console.log("discription###", discription);
    useEffect(() => {
        setIsModified(status === "changed");

        return () => {
          console.log(`user name ${name} has been deleted########`);
        };
      }, [status]);

    return (
        <div>
            <h2>User Detail Page View</h2>
             <img src={image} alt=""/>
            <h1>{name}</h1>
            <p>{discription}</p>
        </div>
    )
}

export default UserDetail
