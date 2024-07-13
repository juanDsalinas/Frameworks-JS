import '../assets/css/app.css'
import { useState } from 'react'

export function App ({username,desc, url, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const follow = isFollowing ? 'User-card-btn-is' : 'User-card-btn'
    const text = isFollowing ? 'Following':'Follow'

    // Manejador de Estado
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <div className='User-card'>
            <div className='User-card-Info'>
                <img src={url} alt="Logo de Reddit"/>
                <div className="User-card-desc">
                    <strong>{username}</strong>
                    <p>{desc}</p>
                </div>
            </div>
            {/* <a className={follow} href="https://www.youtube.com">{text}</a> */}
            <a className={follow} href="#" onClick={handleClick}>{text}</a>
        </div>
    )
}