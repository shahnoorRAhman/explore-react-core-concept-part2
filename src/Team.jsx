import { useState } from "react"

export default function Team() {
    const [count, setCount] = useState(11)
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {count}</h3>
            <button onClick={handleAdd}>add players</button>
            <button onClick={handleReduce}>reduce players</button>
        </div>
    )
}