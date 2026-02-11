import { Particles } from './ui/particles'
import { useState, useEffect } from 'react'
 
function Background() {
    const [particleColor, setParticleColor] = useState('#000000')
    useEffect(() => {
        const updateColor = () => {
            const isDark = document.documentElement.classList.contains('dark')
            setParticleColor(isDark ? '#ffffff' : '#000000')
        }
        updateColor()
        const observer = new MutationObserver(updateColor)
        observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
        })

    return () => observer.disconnect()
}, 
[])
    return ( 
        <div className='Background'>
            <Particles color={particleColor} />
        </div>
    )
}
 
export default Background