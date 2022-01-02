import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { Button, Container, Row, Col, Form } from 'react-bootstrap';

const Login = ({ setLoginUser }) => {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		username: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const login = () => {
		axios.post('http://localhost:8888/app/login', user).then((res) => {
			alert(res.data.message);
			setLoginUser(res.data.user);
			navigate('/main');
		});
	};

	return (
		<>
			<div className='container'>
				<h2> Login </h2>
				<div className='row'>
					{/* <form className='col s12'> */}
					<div className='row'>
						<div className='input-field col s12'>
							{/* 아이디 */}
							<input
								type='text'
								name='username'
								value={user.username}
								onChange={handleChange}
								className='userName'></input>
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
						<div className='col 12'>
							<input
								type='button'
								value='login'
								className='btn waves-effect blue lighten-2'
								onClick={login}></input>
						</div>
						<div className='row'>
							<div className='col 12'>
								<input
									type='button'
									value='Go To SignUp'
									className='btn waves-effect red lighten-2'
									onClick={() => navigate('/signup')}></input>
							</div>
						</div>
					</div>
					{/* </form> */}
				</div>
			</div>
		</>
	);
};

export default Login;
