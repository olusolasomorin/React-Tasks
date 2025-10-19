function GreetingCard({ name, message, color = "blue" }) {
    return (
        <div style={{ backgroundColor: color}} className="container">
            <h1>{name}</h1>
            <p>{message}</p>
        </div>
    )
}

export default GreetingCard;