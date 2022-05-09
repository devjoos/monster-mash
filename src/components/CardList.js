import React from 'react'
import Card from './Card';

const CardList = (props) => {
    // const roboArray = robots.map((robots, i) => {
    //     return <Card key={i} id={robots.id} name={robots.name} email={robots.email} />
    // })
    return (
        <div>
            {props.robots.map((user, i) => {
                return (
                    <Card
                        key={i}
                        id={user.id}
                        name={user.name}
                        email={user.email} />
                )
            })}
        </div>
    );
}

export default CardList;
