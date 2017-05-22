import React from 'react';

const NewsList = (props) => {
	return (
		<ul>
			{props.articles.map((article, i) => <li key={i}>{article.title} | {article.publishedAt}</li>)}
		</ul>
	)
};


export default NewsList;