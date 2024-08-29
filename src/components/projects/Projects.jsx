import Alert from "../Alert";
import Cards from "./Cards";
import '../assets/Projects.css'

export default function Projects(arrayOfProps){
    console.log(arrayOfProps);

    return(
        <div className="portfolioWrapper">
            <div className="portfolioText">
                    <h1>Current Projects</h1>
            </div>

            {

            arrayOfProps.length != 0 ? 
            <div className="portfolioGrid">
            {
            arrayOfProps.map((element) => {
                return <Cards {...element} />
                })
            }
            </div> 
            :  
            <Alert alertType="construction">
                I'm currently working on new projects to add 
                to this porfolio soon!
            </Alert>
    
            }

        </div>
    );

}