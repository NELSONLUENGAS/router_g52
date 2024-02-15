import React from 'react';
import PropTypes from 'prop-types';
import { Products } from '../components/Products/Products';

export const ProductsView = ({ products }) => {
	return (
		<>
			<Products products={products} />
		</>
	);
};

Products.propTypes = {};
