import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function Menu({ height, width, menuStyle, onClick }) {

    return (
        <a href="#" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="white" class="bi bi-list" viewBox="0 0 16 16" style={{minWidth: '100%', transform: "translateX(-30%)", ...menuStyle}}>
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>        
        </a>
    );

};

export default Menu;