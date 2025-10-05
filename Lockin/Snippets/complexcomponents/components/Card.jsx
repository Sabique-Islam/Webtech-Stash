import "./Card.css"

const Card = (props) => {
  return (
    <div className="cards">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
