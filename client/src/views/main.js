// import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = ({user, setLoginUser}) => {
	const navigate = useNavigate();

	const [lastIdx, setLastIdx] = useState(0);
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

	useEffect(async () => {
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
	}, []);

	console.log(inputData);

	// const onClickBtn = async (e) => {
	// 	console.log('aa');
	// 	await axios
	// 		.post('http://localhost:8000/write', {
	// 			// userName:
	// 		})
	// 		.then((res) => {
	// 			console.log(res);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	return (
		<div>
			<h2>메인 화면</h2>
			<table className='listTable'>
				<tbody>
					{/* <div>글 리스트</div> */}
					<tr>
						<td className='listTableIndex th'>index</td>
						<td className='listTableTitle th'>title</td>
						<td className='listTableTitle th'>contents</td>
					</tr>
				</tbody>
			</table>
			<div>글 리스트</div>
			{inputData.map((rowData) => (
				<tr>
					<td>{rowData.username}</td>
					<td>{rowData.title}</td>
					<td>{rowData.address}</td>
					<td>{rowData.write_date}</td>
					<td>{rowData.content}</td>
				</tr>
			))}
			<div>
				글 작성하기
					<input
						type='button'
						value='Write content'
						className='write'
						onClick= {() => navigate("/write")}
						></input>
			</div>
			<input type='button' value='Logout' onClick ={()=> setLoginUser({})}></input>
		</div>
	);
};

export default Main;
