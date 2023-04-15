import BackButtonIcon from "./BackButtonIcon";

function BackButton() {

    return <a href="javascript:history.back()" style={{textDecoration: "none", color: "inherit"}}><BackButtonIcon width={48} height={48}/></a>

}

export default BackButton;