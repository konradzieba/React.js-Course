import { useState, useRef } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
	const inputUsernameRef = useRef();
	const inputAgeRef = useRef();

	const [error, setError] = useState();

	const handleAddUser = (e) => {
		e.preventDefault();
		if (
			inputUsernameRef.current.value.trim().length === 0 ||
			inputAgeRef.current.value.trim().length === 0
		) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).',
			});
			return;
		}
		if (+inputAgeRef.current.value < 0) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age > 0',
			});
			return;
		}
		props.onAddUser(inputUsernameRef.current.value, inputAgeRef.current.value);
		inputUsernameRef.current.value = '';
		inputAgeRef.current.value = '';
	};

	const handleCloseModal = () => {
		setError();
	};

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					handleCloseModal={handleCloseModal}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={handleAddUser}>
					<label htmlFor='username'>Username</label>
					<input id='username' type='text' ref={inputUsernameRef} />
					<label htmlFor='age'>Age (Years)</label>
					<input type='number' id='age' ref={inputAgeRef} />
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
