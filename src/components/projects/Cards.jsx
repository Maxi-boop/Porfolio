import '../assets/Cards.css'

export default function Cards(props){
    return(
        <div className="card">
            <section>
                <div className="card-image"><img src={props.img} alt="card" /></div>
            </section>
            <section>
                <div className="card-header">{props.header}</div>
                <div className="card-text">{props.text}</div>
                <a href={props.buttonURL}><button>{props.button}</button></a>
            </section>
        </div>
    );
}