import React from 'react'
import SingleBook from "./SingleBook";
import {Col, Row, Container} from 'react-bootstrap'

class BookList extends React.Component{
    

    state = {
        searchQuery:""

    }
    render(){
        return(
            <Container>
            <Row />
                <Col>
                <Form>
                    <Form.Group  controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        type="text"
                        placeholder="Search here"
                        value={this.state.searchQuery}
                        onChange ={e =>this.setState({searchQuery:e.target.value})} />
                    </Form.Group>
                    </Form>
                </Col>    
            <Row>
            {
                this.props.books.filter(b=>b.title.toLowerCase().includes(this.state.searchQuery).map(b => (
                    <Col xs= {3}>
                    <SingleBook book = {b}/> 
                    </Col>
                ))

            }
            </Row>
            </Container>
        )
            }
        }

export default BookList;