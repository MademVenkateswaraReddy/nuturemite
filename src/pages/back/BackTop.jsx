import React, { useEffect, useState } from 'react'

function BackTop() {
    const [backTop, setBackTop] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY >100){
                setBackTop(true)
            }else{
                setBackTop(false)
            }
        })
    }, [])

    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
    return (
        <div>
            {
                backTop && (
                    <button onClick={scrollUp} 
                    style={{border: '1px solid #fff',
                    fontSize: '30px',
                    backgroundColor: '#fff',
                    position: 'fixed',
                    bottom: '50px',
                    right: '50px',
                    width: '50px',
                    height: '50px'
                    }}
                    >
                        ^
                    </button>
                )
            }
        </div>
    )
}

export default BackTop
