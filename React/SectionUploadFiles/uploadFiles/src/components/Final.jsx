// import { App } from './App.jsx'
import { App } from './App.jsx'
import '../assets/css/final.css'

// const Yuvan = {
//     username:'YuvioFicina', 
//     desc:'@YuvioFicina',
//     url:'https://unavatar.io/instagram',
//     initialIsFollowing:true
// }

const users = [
    {
        id:1,
        username:"Juan",
        desc:'@YuvioFicina',
        url:'https://unavatar.io/instagram',
        initialIsFollowing:true
    },
    {
        id:2,
        username:"Kevin",
        desc:'@KevinOficial',
        url:'https://unavatar.io/github',
        initialIsFollowing:false
    },
    {
        id:3,
        username:"Nicole",
        desc:'@NicoFicial',
        url:'https://unavatar.io/reddit.com',
        initialIsFollowing:false
    },
    {
        id:4,
        username:"Nicole",
        desc:'@NicoFicial',
        url:'https://unavatar.io/reddit.com',
        initialIsFollowing:false
    }
]

export function Final(){
    return(
        // Second Form to Do It
        <article className='recomenda'>
            <header>Recomendaciones para Ti</header>
            {/* Form #2 More Crazy */}

            {
                users.map(({id, useraname, desc, url, initialIsFollowing }) => (
                    <App 
                        key={id} 
                        username={useraname} 
                        desc={desc}
                        url={url} 
                        initialIsFollowing={initialIsFollowing}
                    />
                ))
            }

            {/* Form #1 More ChildOut */}
            {/* {
            users.map(user=>{
                const {useraname, desc, url, initialIsFollowing} = user
                return(
                    <App {...user}/>
                )
            }) */}
        </article>




        // First Form to Do It
        // <article className='recomenda'>
        //     <header>Recomendaciones para Ti</header>
        //     <App username="Juan" desc="@YuvioFicial" url="https://unavatar.io/dribbble" initialIsFollowing/>
        //     {/* <App username="Kevin" desc="@KevinOficial" url="https://unavatar.io/github" isFollowing/> */}
        //     <App username="Kevin" desc="@KevinOficial" url="https://unavatar.io/github" initialIsFollowing={false}/>
        //     <App username="Nicole" desc="@NicoFicial" url="https://unavatar.io/reddit.com" initialIsFollowing/>
        //     {/* RestOperator */}
        //     <App {...Yuvan}/>
        // </article>
    )
}