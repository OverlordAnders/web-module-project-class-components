// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Item from "./Todo";


const TodoList = props => {
    return(
        <div className="shopping-list">
            {props.items.map(item => (
                <Item toggleItem={props.toggleItem} key={item.id} item={item} />
            ))}

        </div>
    )
}

export default TodoList;