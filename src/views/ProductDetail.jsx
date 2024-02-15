import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Product from '../components/Product/Product';

export const ProductDetail = ({ data }) => {
	const { product_id } = useParams();
	const ProductSelected = data.find((product) => product.id == product_id);

	return (
		<>
			<Product
				id={ProductSelected.id}
				title={ProductSelected.title}
				price={ProductSelected.price}
				description={ProductSelected.description}
				image={ProductSelected.image}
			/>
		</>
	);
};

ProductDetail.propTypes = {};

export default ProductDetail;
