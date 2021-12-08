
import axios from 'axios';
import React, { Component } from 'react'
import { Form, Button} from 'react-bootstrap'


export default class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            mahasiswa: [],
           id : '',
           nama: '',
           asal:''
        }
       
    }

    // changenama = (e) => {
    //     this.setState({
    //         nama:e.target.value
    //     })
    // }
    // changeasal = (e) => {
    //     this.setState({
    //         asal:e.target.value
    //     })
    // }

    postdata(e){
        e.preventDefault();
        const url ='http://localhost:3004/mahasiswa'
        const formmahasis = {
            nama: this.state.nama,
            asal: this.state.asal
        }
        axios.post( url , formmahasis)
        this.props.history.push("/"); 
      

    }


    render() {
        return (
            <div className="container">
                 <Form onSubmit={ (e) => this.postdata (e)}
                 >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control 
                    onChange={(e) => {this.setState({ nama: e.target.value})}}  
                    type="text" 
                    placeholder="Masukkan Nama..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Asal</Form.Label>
                    <Form.Control  onChange={(e) => {this.setState({ asal: e.target.value})}}  type="text" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}
