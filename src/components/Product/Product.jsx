import React from 'react';
import './Product.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({
	id,
	title,
	price,
	description,
	category,
	image,
	rating,
}) => {
	return (
		<>
			<div className="card product-card">
				<img
					src={image}
					className="card-img-top image-card"
					alt="image"
				/>
				<div className="card-body">
					<Link to={`/products/${id}`}>
						<h5 className="card-title">{title}</h5>
					</Link>
					<p className="card-text">{description}</p>
				</div>
			</div>
		</>
	);
};

Product.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	price: PropTypes.number,
	description: PropTypes.string,
	category: PropTypes.string,
	image: PropTypes.string,
	rating: PropTypes.object,
};

Product.defaultProps = {
	id: 1,
	title: 'Título por default',
	price: 23.4,
	description: 'Description por default',
	category: 'Shoes',
	image: 'url',
	rating: {},
};

export default Product;
