
import React from "react"

export default function Header() {



    const [windowSize, setWindowSize] = React.useState(window.innerWidth)
    function watchWidth() {
        console.log("resize")
        setWindowSize(prev => this.window.innerWidth)
    }

    React.useEffect(() => {
        console.log("adding listener")
        window.addEventListener("resize", watchWidth)
        return function () {
            console.log("removing")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return (
        <div>
            header
            <br></br>
            <div>window showing {window.innerWidth}</div>

        </div>
    )
}