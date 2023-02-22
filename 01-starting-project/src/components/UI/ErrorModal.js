import ReactDOM from 'react-dom';

import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.handleCloseModal} />;
};

const ModalOverlay = (props) => {
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={classes.content}>
				<p>{props.message}</p>
			</div>
			<footer className={classes.actions}>
				<Button onClick={props.handleCloseModal}>Okay</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop handleCloseModal={props.handleCloseModal} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					handleCloseModal={props.handleCloseModal}
				/>,
				document.getElementById('overlay-root')
			)}
		</>
	);
};

export default ErrorModal;
