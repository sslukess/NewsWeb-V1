import { slide as Menu } from 'react-burger-menu';

const Sidebar = (props) => {
    return (

        <Menu {...props} right >
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={() => alert('Coming Soon!')} className="menu-item--small" href="">Settings</a>
        </Menu>

    );
};

export default Sidebar;