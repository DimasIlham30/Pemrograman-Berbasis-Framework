import React, { Component } from "react";
import './BlogPost.css';
import Post from "./Post";

class BlogPost extends Component {

    state = {
        datasepedamotor: [],
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/motor')
            .then(Response => Response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    datasepedamotor: jsonHasilAmbilDariAPI
                })
            })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = { ...this.state.insertArtikel };
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        })
    }

    handleTombolSimpan = () => {
        fetch(`http://localhost:3001/motor`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
            .then((response) => {
                this.ambilDataDariServerAPI();
            });
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/motor/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    render() {
        return (
            <div className="post-artikel">

                <h2>Daftar Sepeda Motor</h2>
                {
                    this.state.datasepedamotor.reverse().map(motor => {
                        return <Post key={motor.id} harga={motor.harga} img={motor.img} nama={motor.namamotor} merek={motor.merek}  idMotor={motor.id} hapusArtikel={this.handleHapusArtikel} />
                    })
                }
            </div>
        )
    }

}

export default BlogPost;