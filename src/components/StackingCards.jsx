import React from "react";
import './assets/StackingCards.css';

export default function StackingCards({children}){
    const MappedStackedCards = () => React.Children.map(children, (child,index)=>{
        console.log(child)
        return (
        <li className="stackingCard" style={{"--index": index + 1}}>
            <div className="cardContent">
                {child}
            </div>
        </li>
        );
    })
    return(
        <div className="stackedCards" >
            <ul>
                <MappedStackedCards />
            </ul>
        </div>
    );
}