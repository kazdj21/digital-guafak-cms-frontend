import { useState, useEffect, useRef } from "react";
import HamburgerMenu from "./HamburgerMenu";
import HamburgerMenuOverlay from "./HamburgerMenuOverlay";

function Hamburger({ open=false, children }) {
    
    const [isOpen, setIsOpen] = useState(open);
    const isFirstRender = useRef(true);

    useEffect(() => {

        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        setIsOpen((prev) => (!prev));
        console.log("use effect is ran")

    }, [open])

    function toggleMenuHandler() {  

        setIsOpen((prev) => (!prev));
        console.log(isOpen);

    }

    return (
        <>
            { isOpen ? <HamburgerMenu isHidden={false} toggleSignal={toggleMenuHandler} >{children}</HamburgerMenu> : <HamburgerMenu isHidden={true} toggleSignal={toggleMenuHandler} >{children}</HamburgerMenu>}
            { isOpen ? <HamburgerMenuOverlay /> : null}
        </>
    );

}

export default Hamburger;
