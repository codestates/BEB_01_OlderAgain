import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		username:"",
		password:"",
		reEnterPassword: ""
	})

	const handleChange = e => {
		const {name, value} = e.target
		setUser({
			...user,
			[name]:value
		})
	}

	const register = async () => {
		const {username, password, reEnterPassword} = user
		if (username && password && (password === reEnterPassword)){
			await axios.post("http://localhost:8888/app/signup", user)
			.then(res => {
				alert(res.data.message)
				navigate("/")
			})
		} else {
			alert("passwords don't match")
		}
	}
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
			<div className='userName'>
				아이디
				<input
					type='text'
					name = "username"
					value={user.username}
					onChange={handleChange}
					className='username'></input>
			</div>
			<div>
				<div className='password'>
					비밀번호
					<input
						type='password'
						name = "password"
						value={user.password}
						onChange={handleChange}
						className='password'
					/>
				</div>
				<div className='reEnterPassword'>
					비밀번호 확인
					<input 
					type='password'
					name='reEnterPassword'
					value={user.reEnterPassword}
					onChange={handleChange}
					className='reEnterPassword'/>
				</div>
			</div>

			<div>
                <input
					type='button'
					value='Sign Up'
					className='signup'
					onClick={register}></input>
				
			</div>
		</>
	);
};

export default SignUp;
