import Product from './components/Product';
import './components/Product.css';
import Card from './components/Card';
function App() {
	return (
		<Card>
			<Product
				title='iPhone 13 Pro'
				description='Best smartphone ever'
				price={1099.0}
			/>
			<Product
				title='Macbook Pro M1'
				description='Smartest laptop ever'
				price={1499.99}
			/>
		</Card>
	);
}

export default App;
