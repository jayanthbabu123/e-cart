import React, { Component } from 'react';
import { apiroutes } from '../config';
import { Header } from '../boilerplate/header';
class Dashboard extends Component {
    state = {
        mobiles: []
    }
    componentDidMount() {
        fetch(apiroutes.mobiles)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({ mobiles: json })
            })
    }
    render() {
        const data = this.state.mobiles.length && this.state.mobiles.map((value, index) => {
            console.log(`../images/${value.url}`)
            return (
                <div class="col-sm-3"><div class="card" >
                    <img class="card-img-top" height={300} width={300} src={require(`../images/${value.url}.jpeg`)} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">{value.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div></div>)
        })
        return (
            <React.Fragment>
                <Header></Header>
                <div class="container-fluid">
                    <div class="row">
                        {data}
                    </div>

                </div>
            </React.Fragment>

        )
    }
}

export default Dashboard;