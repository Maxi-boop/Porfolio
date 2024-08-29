import './assets/SvgAnimation.css'
export default function SvgAnimation(props){
   /* 
   animationType: bounce
   styles: {}
   children: ''
   alt: ''
   svgDimensions: []
   */
  console.log(props.children)
    return(
        <div className={`svg-${props.animationType} ${props.animationType}`} style={props.styles}>
            {props.children}
        </div>
    );
    
}