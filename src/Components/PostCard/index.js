import {
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap'

function PostCard( props ){
    let { postTitle, postContent, postCategory, createDate } = props.postData
    return(
        <Col xs="12" md="6">
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h5">{postTitle}</CardTitle>
                    <CardText>{postContent}</CardText>
                    <p className="text-right text-muted mb-0">{postCategory}</p>
                    {
                        createDate && <p className="text-right text-muted mb-0">{createDate}</p>
                    }
                    
                </CardBody>
            </Card>
        </Col>
    )
}

export default PostCard