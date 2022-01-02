// import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = ({ user, setLoginUser }) => {
	const navigate = useNavigate();

	const [web3, setWeb3] = useState();
	//const [lastIdx, setLastIdx] = useState(0);
	const [wallet, setWallet] = useState();
	const [inputData, setInputData] = useState([
		{
			// idx: '',
			title: '',
			username: '',
			address: '',
			write_date: '',
			content: '',
		},
	]);

	/* 	useEffect(() => {
		const walletData = window.localStorage.getItem('wallet');
		setWallet(JSON.parse(walletData));
	  }, []);
	
	useEffect(()=>{
		window.localStorage.setItem('wallet', wallet);
	}); */

	useEffect(() => {
		async function getTables() {
			try {
				const res = await axios.get(
					'http://localhost:8888/app/contentList'
				);
				const _inputData = await res.data.map((rowData) => ({
					// idx: rowData.idx,
					title: rowData.title,
					username: rowData.username,
					address: rowData.address,
					write_date: rowData.date,
					content: rowData.content,
				}));
				setInputData(inputData.concat(_inputData));
			} catch (err) {
				console.log(err);
			}
		}
		getTables();
	}, []);

	return (
		<div className='container'>
			<h2> Main </h2>
			<table className='highlight'>
				<thead>
					{/* <div>글 리스트</div> */}
					<tr>
						<th className='listTableIndex th'>user</th>
						<th className='listTableTitle th'>title</th>
						<th className='listTableTitle th'>address</th>
						<th className='listTableTitle th'>date</th>
						<th className='listTableTitle th'>contents</th>
					</tr>
				</thead>

				<tbody>
					{inputData.map((rowData) => (
						<tr>
							<td>{rowData.username}</td>
							<td>{rowData.title}</td>
							<td>{rowData.address.substring(0, 6) + '...'}</td>
							<td>{rowData.write_date.substring(0, 10)}</td>
							<td>{rowData.content}</td>
						</tr>
					))}
				</tbody>
			</table>

			<div className='row'>
				<h5>Write Content</h5>
				<div className='col 12'>
					<input
						type='button'
						value='Write content'
						className='btn waves-effect lighten-2'
						onClick={() => navigate('/write')}></input>
				</div>
				<div className='col 12'>
					<input
						type='button'
						value='Logout'
						className='btn waves-effect blue lighten-2'
						onClick={() => setLoginUser({})}></input>
				</div>
			</div>
		</div>
	);
};

export default Main;
