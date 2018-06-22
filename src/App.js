import React, { Component } from 'react';
import './App.css';
import SeriesList from './listdata';
import { Grid, Row, Col, FormControl } from 'react-bootstrap';

class App extends Component {

     state = {
        series: []
     }

     onSeriesInputChange = e => {
        fetch('https://jsonplaceholder.typicode.com/photos?=${e.target.value}')
        .then(response => response.json())
        .then(json => this.setState({ series: json }));   
      }

  render() {
    return (
      <div className="App">        
         <Grid>
             <Row className="show-grid">
                 <Col xs={12} md={12}>
                    Number of Record: {this.state.series.length}
                  </Col>
                  <Col xs={12} md={12}>
                      <FormControl onChange={this.onSeriesInputChange} type="text" placeholder="Enter the text" />
                  </Col>
                  <Col xs={12} md={12}>
                    <SeriesList list={this.state.series} />
                  </Col> 
            </Row>
       </Grid>
     </div>
    );
  }
}

export default App;
