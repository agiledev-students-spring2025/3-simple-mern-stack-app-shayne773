import { useState, useEffect, use } from 'react'
import axios from 'axios'


const AboutUs = props => {

    const [aboutContent, setAboutContent] = useState([])
    const [imageURL, setImageURL] = useState([])
    const [error, setError] = useState([])

    const fetchContent = () => {
        axios
        .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about-us`)
        .then(response => {
            const messages = response.data.content
            const url = response.data.url
            setAboutContent(messages)
            setImageURL(url)
        })
        .catch(err => {
            const errMsg = JSON.stringify(err, null, 2)
            setError(errMsg)
            console.log(error)
        })
    }

    useEffect(fetchContent, [])
    return (<>
        <p>
            {aboutContent}
        </p>
        <img src={imageURL} alt="My Photo" width="200" height="250"/>
    </>)
}

export default AboutUs