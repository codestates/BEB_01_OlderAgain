// import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = ({ user, setLoginUser}) => {
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
		<div>
			<h2>메인 화면 </h2>

			
			<div>글 리스트</div>
			<table className='listTable'>
				<tbody>
					{/* <div>글 리스트</div> */}
					<tr>
						<td className='listTableIndex th'>user</td>
						<td className='listTableTitle th'>title</td>
						<td className='listTableTitle th'>address</td>
						<td className='listTableTitle th'>date</td>
						<td className='listTableTitle th'>contents</td>
					</tr>
				</tbody>
			</table>
			
			<table>
				<tbody>
					{inputData.map((rowData) => (
						<tr>
							<td>{rowData.username}</td>
							<td>{rowData.title}</td>
							<td>{rowData.address}</td>
							<td>{rowData.write_date}</td>
							<td>{rowData.content}</td>
						</tr>
					))}
				</tbody>
			</table>

			<div>
				글 작성하기
				<input
					type='button'
					value='Write content'
					className='write'
					onClick={() => navigate('/write')}></input>
			</div>
			<input
				type='button'
				value='Logout'
				onClick={() => setLoginUser({})}></input>
		</div>
	);
};

export default Main;
