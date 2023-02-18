const Product = ({ title, description, price }) => {
	return (
		<div className='product__container'>
			<h2 className='product__title'>{title}</h2>
			<p className='product__description'>{description}</p>
			<p className='product__price'>${price}</p>
		</div>
	);
};

export default Product;
