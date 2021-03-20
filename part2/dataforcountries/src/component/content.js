import React from 'react'
const Content = ({countries}) => {

    if (countries.length > 10 ) {
        return <p>Too many matches</p>
    }

    if (countries.length <= 10 && countries.length >1) {
        return (
            <div>
                {countries.map(c => <p key={c.name}>{c.name}</p>)}
            </div>
        )
    }

    if (countries.length === 1) {
        const co = countries[0]
        console.log(co.flag)
        return (
            <div>
                <h2>{co.name}</h2>
                <h3>{co.capitol}</h3>
                <h4>Languages</h4>
                {co.languages.map(l => <p key={l.name}>{l.name}</p>)}
                <img src={co.flag} alt="flag" />
            </div>
        )
    }

}


export default Content