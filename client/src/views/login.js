import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = ({setLoginUser}) => {
	const navigate = useNavigate()

	const [user, setUser] = useState({
		username:"",
		password:""
	})

	const handleChange = e => {
		const {name, value} = e.target
		setUser({
			...user,
			[name]: value
		})
	}

	const login = () => {
		axios.post("http://localhost:8888/app/login", user)
		.then(res => {
			alert(res.data.message)
			setLoginUser(res.data.user)
			navigate("/main")
		})
	}


	return (
		<>
			<div className='userName'>
				아이디
				<input
					type='text'
					name='username'
					value={user.username}
					onChange={handleChange}
					className='userName'></input>
			</div>
			<div>
				<div className='password'>
					비밀번호
					<input
						type='password'
						name='password'
						value={user.password}
						onChange={handleChange}
						className='password'
					/>
				</div>
			</div>
			<div>
				<input
					type='button'
					value='login'
					className='login'
					onClick={login}></input>
				
				<input
					type='button'
					value='Go To SignUp'
					className='signup'
					onClick={() => navigate("/signup")}>
				</input>
			</div>
		</>
	);
};

export default Login;
