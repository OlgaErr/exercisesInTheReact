import React from 'react';

function Header({user}) {
    return (
        <div>
            <h2>Welcome {user.name} {user.age}</h2>
        </div>
    );
};


export default Header;