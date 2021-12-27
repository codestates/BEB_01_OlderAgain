import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const SignUp = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const onClickBtn = async (e) => {
		await axios
			.post('http://localhost:8888/app/signup', {
				"username": userName,
				"password": password,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<div className='userName'>
				아이디
				<input
					type='text'
					value={userName}
					onChange={(e) => {
						setUserName(e.target.value);
					}}
					className='userName'></input>
			</div>
			<div>
				<div className='password'>
					비밀번호
					<input
						type='text'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='password'
					/>
				</div>
			</div>
			<div>
                <Link to='/'>
                <input
					type='button'
					value='Sign Up'
					className='signup'
					onClick={onClickBtn}></input>
                </Link>
				
			</div>
		</>
	);
};

export default SignUp;
