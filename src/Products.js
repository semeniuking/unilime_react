import React, {useEffect, useState} from 'react';
import './App.css';
import PropTypes from "prop-types";
import Login from "./Login";


const Products = ({getToken}) => {
	const [posts, setPosts] = useState([]);
	// const [postData, setPostData] = useState([]);
	const [currentPage, setCurrentPage] = useState("http://dummy-api.d0.acom.cloud/api/products?page=1");
	const [pagination, setPagination] = useState([]);
	const [showResult, setShowResult] = useState(false);
	const bearer_token = getToken;

	useEffect(() => {
		setShowResult(false);
		const fetchData = async () => {
			try {
				const result = await fetch(currentPage, {
					method: 'GET',
					headers: new Headers({
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${bearer_token}`,
					}),
				})
				const body = await result.json();
				const posts = await body.data;
				const links = await body.links;
				setShowResult(true);
				setPosts(posts)
				setPagination(links)
				// setPostData(body)
			} catch (err) {
				console.log(err)
			}

		}
		// call the async fetchData function
		fetchData(bearer_token)
		
	}, [bearer_token, currentPage])

	if (!showResult) {
		return <h1>loading</h1>;
	}

	return (
		<div className="products container">
			<ul className="product_list">
				{posts.map(post =>
					<li key={post.id}>
						<img src={post.thumbnail} alt="thumbnail"/>
						<p>{post.title}</p>
						<p>{post.price}</p>
					</li>
				)}
			</ul>
			<div className="pagination">
				{pagination.map((btn, i) =>
					<button
						onClick={() => setCurrentPage(btn.url)}
						key={i}
						disabled={btn.active}>
						<span>
							{btn.label}
						</span>
					</button>
				)}
			</div>
		</div>
	);
};

Products.propTypes = {
	getToken: PropTypes.string.isRequired
}

export default Products;