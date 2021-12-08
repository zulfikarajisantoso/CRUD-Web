import React, { Component, useState } from 'react'
import { Table,Button } from 'react-bootstrap'
import  {Link} from 'react-router-dom'
import axios  from "axios"  

export default class Home extends Component {
    constructor(props){  
        super(props);  
        this.state = {  
           mahasiswa:[],  
           response: {}  
              
        }  
    }  
  
    componentDidMount(){  
        const url = 'http://localhost:3004/mahasiswa/'
        axios.get(url)
        .then(response => {
            this.setState({
                mahasiswa: response.data
            })
        })
     }  
   
    hapus(id){
        
        const url = 'http://localhost:3004/mahasiswa/'
        axios.delete(`http://localhost:3004/mahasiswa/${id}`)
        .then((res) => {
            axios.get(url)
            .then(res => {
                this.setState({
                    mahasiswa: res.data
                })
            })
        })
    }
    render() {
       
        return (
            <div> 
        
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Asal</th>
                        <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.mahasiswa.map( (maha, index) => (

                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{maha.nama}</td>
                        <td>{maha.asal}</td>
                       
                        <td className="d-flex justify-content-center">
                            <Link to={`/edit/${maha.id}`} className="btn btn-warning mx-2">Edit</Link>
                            <Button onClick={() => this.hapus(maha.id)}  className="btn btn-danger">Delete</Button>
                        </td>

                        </tr>
                        ))}
                        
                    </tbody>
                    </Table>
            </div>
        )
    }
}
