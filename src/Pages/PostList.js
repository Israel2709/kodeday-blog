import React, { useState, useEffect } from 'react'
import PostCard from '../Components/PostCard'

import firebase from '../lib/firebase'

import {
    Container,
    Row
} from 'reactstrap'

function PostList() {
    const [ postCollection, setPostCollection ] = useState({})

    useEffect( () => {
        const database = firebase.database()
        const postsRef = database.ref("/posts")
        postsRef.on("value", snapshot => {
            console.log( snapshot.val() )
            setPostCollection( snapshot.val() )
        })
    },[])
    return (
        <Container className="mt-3">
            <Row>
                {   
                    Object.keys( postCollection ).map( key => {
                            let post = postCollection[key] /*representa la información del post*/
                            return (
                                <PostCard 
                                    key={key}
                                    postData = { post }
                                    postKey = { key }
                                />
                            )
                        } 
                        
                    )
                }
            </Row>
        </Container>
    )
}

export default PostList