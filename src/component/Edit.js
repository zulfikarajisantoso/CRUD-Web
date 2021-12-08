
import axios from 'axios';
import React, { Component } from 'react'
import { Form, Button} from 'react-bootstrap'


export default class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            mahasiswa: [],
           id: '',
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
    componentDidMount(id){  
        // const url = 
        axios.get(`http://localhost:3004/mahasiswa/${id}` )
        .then(response => {
            console.log(response)
        })
    }
    editdata(id, e){
        e.preventDefault();
        const formmahasis = {
            nama: this.state.nama,
            asal: this.state.asal
        }
        axios.put( `http://localhost:3004/mahasiswa/${id}` , formmahasis)
        this.props.history.push("/"); 
      

    }


    render() {
        return (
            <div className="container">
                 <Form onSubmit={ (e) => this.editdata (e)}
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
