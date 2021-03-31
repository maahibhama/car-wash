import React, { Component, useState } from 'react'
function Login() {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitForm = (e) => {
		e.preventDefault();

	}

	return (
		<div>
			<form onSubmit={submitForm}>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" autoComplete="off"
					value="" onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" autoComplete="off"
					value="" onChange={(e) => setPassword(e.target.value)}
				/>
				<button>Login</button>
			</form>
		</div>
	)

}
export default Login;
