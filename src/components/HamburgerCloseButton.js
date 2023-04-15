import HamburgerCloseIcon from "./HamburgerCloseIcon";

function HamburgerCloseButton({ onClick }) {

    return (<span href="/" onClick={() => {onClick()}} style={{cursor: "pointer"}}>
        <HamburgerCloseIcon />
    </span>)

}

export default HamburgerCloseButton;