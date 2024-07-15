import { useState, useEffect} from 'react'

function TimerComponent() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timeId = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        },500)
        return () => {
            clearInterval(timeId)
            console.log('Timer foi Limpo')
        }
    }, [])

    return <h1>{count}</h1>
}

export default TimerComponent