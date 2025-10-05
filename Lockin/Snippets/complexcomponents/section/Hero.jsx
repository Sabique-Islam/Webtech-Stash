import Card from "../components/Card";
import "./Hero.css"

const Hero = () => {
    return(
        <div className="cards">
            <Card title="Nsync" description="Bye Bye Bye"/>
            <Card title="Gang" description="Sup"/>
            <Card title="BSB" description="TELL ME WHYYYY"/>
        </div>
    )
}

export default Hero;