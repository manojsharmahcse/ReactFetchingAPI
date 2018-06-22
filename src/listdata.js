import React from 'react';
import { Table, Row , Col, Grid } from 'react-bootstrap';

const SeriesList = (props) => {
	    var divStyle = {
		  background: "#eee",
		  padding: "20px",
		  margin: "20px"
		};
		return(
			<div>
				<Grid>
					{props.list.map(series => (	
					    <Row style={divStyle} className="show-grid">				
							<Col md={1} xs={1}>
					   	 		<h3>{series.id}</h3>
					   		</Col>  
					   		<Col xs={4} md={4}>
					   	 		<h5>{series.title}</h5>
					   		</Col> 
					   		<Col xs={3} md={3}>
					   	 		<img src={series.thumbnailUrl} width="200" height="100" />
					   		</Col>
					   		<Col xs={4} md={4}>
					   	 		<img src={series.url} width="300" height="100" />
					   		</Col>
					   		
				   	    </Row>    			   
					))} 					
				</Grid>	
			</div>
			)
		}
export default SeriesList;