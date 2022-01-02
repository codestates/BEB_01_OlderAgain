import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		username: '',
		password: '',
		reEnterPassword: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const register = async () => {
		const { username, password, reEnterPassword } = user;
		if (username && password && password === reEnterPassword) {
			await axios
				.post('http://localhost:8888/app/signup', user)
				.then((res) => {
					alert(res.data.message);
					navigate('/');
				});
		} else {
			alert("passwords don't match");
		}
	};
	/* 	const onClickBtn = async (e) => {
		await axios
			.post('http://localhost:8888/app/signup', {
				"username": user.username,
				"password": user.password,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}; */

	return (
		<>
			<div className='container'>
				<h2> Sign Up </h2>
				<div className='row'>
					<div className='row'>
						<div className='input-field col s12'>
							{/* 아이디 */}
							<input
								type='text'
								name='username'
								value={user.username}
								onChange={handleChange}
								className='username'></input>
							<label htmlFor='아이디'>아이디</label>
							<span
								className='helper-text'
								data-error='Type a right type id'
								data-success='right'
							/>
						</div>
					</div>
					<div className='row'>
						<div className='input-field col s12'>
							{/* 비밀번호 */}
							<input
								type='password'
								name='password'
								value={user.password}
								onChange={handleChange}
								className='password'
							/>
							<label htmlFor='비밀번호'>비밀번호</label>
							<span
								className='helper-text'
								data-error='wrong'
								data-success='right'
							/>
						</div>
					</div>
					<div className='row'>
						<div className='input-field col s12'>
							{/* 비밀번호 확인 */}
							<input
								type='password'
								name='reEnterPassword'
								value={user.reEnterPassword}
								onChange={handleChange}
								className='reEnterPassword'
							/>
							<label htmlFor='비밀번호 확인'>비밀번호 확인</label>
							<span
								className='helper-text'
								data-error='wrong'
								data-success='right'
							/>
						</div>
					</div>

					<div className='row'>
						<div className='col 12'>
							<input
								type='button'
								value='Sign Up'
								className='btn waves-effect red lighten-2'
								onClick={register}></input>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;
