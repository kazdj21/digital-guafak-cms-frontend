import { useState } from "react"

function HamburgerItem({ children, navigateTo, linkStyle }) {

    const [ opacity, setOpacity ] = useState(0.7)

    function onMouseOverHandler() {

        setOpacity(() => (1))

    }

    function onMouseOutHandler() {

        setOpacity(() => (0.7))

    }

    return <a href={navigateTo} style={{textDecoration: "none", color: "inherit", opacity: opacity, ...linkStyle}} onMouseOverCapture={onMouseOverHandler} onMouseOutCapture={onMouseOutHandler}>
        <p>
            {children}
        </p>
    </a>
}

export default HamburgerItem;