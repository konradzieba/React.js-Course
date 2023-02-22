import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
	const [usersList, setUsersList] = useState([]);

	const handleAddUser = (uName, uAge) => {
		setUsersList((prev) => [...prev, { name: uName, age: uAge, id: Math.random().toString() }]);
	};
	return (
		<div>
			<AddUser onAddUser={handleAddUser} />
			<UserList users={usersList} />
		</div>
	);
}

export default App;
