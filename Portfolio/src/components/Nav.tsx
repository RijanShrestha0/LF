import { Dock } from './ui/dock'
import { DockIcon } from './ui/dock'
import { Home, Contact, Book, Linkedin, Github } from 'lucide-react'
import { Separator } from "./ui/separator"
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <Dock className='Dock'>
        <DockIcon>
            <NavLink to='/' className='DockLink' aria-label='Home'>
                <Home size={24} />
                <span className='DockLabel'>Home</span>
            </NavLink>
        </DockIcon>
        <DockIcon>
            <NavLink to='/Contact' className='DockLink' aria-label='Contact'>
                <Contact size={24} />
                <span className='DockLabel'>Contact</span>
            </NavLink>
        </DockIcon>
        <DockIcon>
            <NavLink to='/My-Works' className='DockLink' aria-label='My Work'>
                <Book size={24} />
                <span className='DockLabel'>My Works</span>
            </NavLink>
        </DockIcon>
        <Separator orientation='vertical'/>
        <DockIcon>
            <NavLink to='https://github.com/RijanShrestha0' className='DockLink' aria-label='GitHub'>
                <Github size={24} />
                <span className='DockLabel'>GitHub</span>
            </NavLink>
        </DockIcon>
        <DockIcon>
            <NavLink to='https://www.linkedin.com/in/rijan-stha/' className='DockLink' aria-label='LinkedIn'>
                <Linkedin size={24} />
                <span className='DockLabel'>LinkedIn</span>
            </NavLink>
        </DockIcon>
      </Dock>
    )
}

export default Nav