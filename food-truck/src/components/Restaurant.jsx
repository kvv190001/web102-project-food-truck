const Restaurant = (props) => {
  return(
      <div className={"Restaurant " + props.name}>
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <h3>{props.cuisine}</h3>
      </div>
  )
}

export default Restaurant;