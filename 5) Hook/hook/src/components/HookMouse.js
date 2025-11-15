import React, { useEffect } from 'react'

function HookMouse() {

    const [x, setX] = React.useState(0)
    const [y, setY] = React.useState(0)

    useEffect( () => {
        // console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            // console.log('Component unmounting code');
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    const logMousePosition = e => {
        // console.log('Mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }
    
  return (
    <div>
      Hooks x - {x}  Y - {y}
    </div>
  )
}

export default HookMouse


