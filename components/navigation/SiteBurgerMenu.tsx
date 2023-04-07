import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
const HamburgerMenu = ({children}) => (<div className='relative p-2'>
    <Menu right>
        {children}
    </Menu>
</div>)

export const Links = () => (<>
    <Link legacyBehavior href="/"><a className='font-bold p-4'>Home</a></Link>
    <Link legacyBehavior href="/about"><a className='font-bold p-4'>About</a></Link>
</>)

export default HamburgerMenu