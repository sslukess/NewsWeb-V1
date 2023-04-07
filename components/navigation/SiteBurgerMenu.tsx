import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

const HamburgerMenu = ({ children }) => {

    return (
        <Menu right>
            {children}
        </Menu>
    ) 
}

export default HamburgerMenu