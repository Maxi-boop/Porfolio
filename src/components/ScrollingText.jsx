import React from "react";
import './assets/ScrollingText.css'
export default function ScrollingText(props){
    
    console.log(Object.keys(props));
    console.log(Object.values(props))
    const backgroundStyle = props.backgroundStyle;
    const textStyle = props.textStyle;
    const ScrollingTextMappedChildren = () => <ul className="ulScrolling" style={backgroundStyle}>
        {
            React.Children.map(props.children, (child, index) => {
                return <li style={textStyle} className={`scrollingTextChildNo.${index}`}>{child}</li>
            })
        }
    </ul>
    const loopAmount = Array(10).fill(0)
    return(
        <div className="scrollingText">
            {
                loopAmount.map((_, index) => {
                    return(<ScrollingTextMappedChildren key={`numberOfChildNo.${index}`} />);
                })
            }
        </div>
    );
}