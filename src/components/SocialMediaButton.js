import 'bootstrap/dist/css/bootstrap.min.css';

import SocialMediaIcon from "./SocialMediaIcon";

function SocialMediaButton({ icon, link }) {

    return <a href={link} className="px-1" ><SocialMediaIcon icon={icon}/></a>

}

export default SocialMediaButton;