import React from 'react';
import { Image, Panel, Row, Col, Well, Carousel } from 'react-bootstrap';
import './NewsList.css'

const NewsList = (props) => {
	return (
			<Col md={6} mdPush={6} className='newsCarousel'>
			<h4>Top 10 CNN News</h4>
				<Carousel>
				{props.articles.map((article, i) =>
			    <Carousel.Item>
			      <img alt="900x500" src={article.urlToImage}/>
						<a href={article.url} target="_blank">
			      <Carousel.Caption>
 							<h3>{article.title}</h3>
			        <p>Published At: {article.publishedAt}</p>
			      </Carousel.Caption>
						</a>
			    </Carousel.Item>
				)}
				</Carousel>
			</Col>
	)
};

export default NewsList;
// <li key={i}>
// 	{article.title} {article.publishedAt}
// </li>

// <Row>
// 	<Col lg={4} className='newsWell'>
// 	<Well>
// 		{props.articles.map((article, i) =>
// 			<Panel header={article.title} bsStyle="info">
// 				{article.description}
// 			</Panel>
// 		)}
// 		</Well>
// 	</Col>
// </Row>
