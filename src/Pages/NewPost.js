import React, { useState, useEffect } from 'react'

import firebase from '../lib/firebase'

import {
    Container,
    Row,
    Col,
    Label,
    Input,
    Form,
    FormGroup,
    Button
} from 'reactstrap'

function NewPost(){
    const [postTitle, setPostTitle] = useState("Mi primer post")
    const [postContent, setPostContent ] = useState("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dignissimos dolor? Commodi quibusdam repellendus deleniti pariatur reiciendis laboriosam ab corrupti!")
    const [postCategory, setPostCategory] = useState("Música")

    const [postCollection, setPostCollection] = useState({})

    const handleTitle = event => {
        let title = event.target.value
        console.log( title )
        setPostTitle( title )
    }

    const handleContent = event => {
        let content = event.target.value
        console.log( content )
        setPostContent( content )
    }

    const handleCategory = event => {
        let category = event.target.value
        console.log( category )
        setPostCategory( category )
    }

    const savePost = () => {
        const database = firebase.database()
        const postsRef = database.ref("/posts")

        let postObject = { postTitle, postContent, postCategory }
        console.log( postObject )

        postsRef.push( postObject )
    }

    useEffect( () => {
        console.log("componente montado")
        const database = firebase.database()
        const postsRef = database.ref("/posts")
        postsRef.on("value", snapshot => {
            console.log( snapshot.val() )
            setPostCollection( snapshot.val() )
        })

    },[])

    return(
        
        <Container>
            <Row>
                <Col xs="12">
                    <h1>Crear Nuevo Post</h1>
                    <Form className="bg-dark text-white p-3 mt-3 border rounded">
                        <FormGroup>
                            <Label>Título</Label>
                            <Input onChange={ handleTitle }/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Contenido</Label>
                            <Input type="textarea" onChange={ handleContent }/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Categoría</Label>
                            <Input type="select" onChange={ handleCategory }>
                                <option>Arte</option>
                                <option>Música</option>
                                <option>Tecnología</option>
                            </Input>
                        </FormGroup>
                        <Button color="primary" type="button" onClick={ savePost }>Guardar Post</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default NewPost