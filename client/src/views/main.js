import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Main = () => {
	const [contents, setContents] = useState('all');
	const [userName, setUserName] = useState('');
	const [inputData, setInputData] = useState([
		{
			id: '',
			content: '',
			userName: '',
			address: '',
			write_date: '',
		},
	]);
	const [lastIdx, setLastIdx] = useState(0);

	// useEffect(async () => {
	// 	axios.get('');
	// });

	const onClickBtn = async (e) => {
		console.log('aa');
		// await axios
		// 	.post('http://localhost:8000/write', {
		// 		// userName:
		// 	})
		// 	.then((res) => {
		// 		console.log(res);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	};

	useEffect(async () => {
		try {
			const res = await axios.get('http://localhost:8000/contents');
			const _inputData = await res.data.map(
				(rowData) => (
					// rowData 의 갯수만큼 증가
					setLastIdx(lastIdx + 1),
					{
						id: rowData.id,
						content: rowData.content,
						userName: rowData.userName,
						write_date: rowData.write_date,
					}
				)
			);
			setInputData(inputData.concat(_inputData));
		} catch (e) {
			console.error(e.message);
		}
	}, []);

	return (
		<div>
			<h2>글 리스트</h2>
			<table className='listTable'>
				<tbody>
					<tr>
						<td className='listTableIndex th'>index</td>
						<td className='listTableTitle th'>title</td>
					</tr>
					// rowData 가 없으면 '작성된 글이 없습니다'를 나타냄
					{lastIdx !== 0 ? (
						inputData.map(
							(rowData) =>
								// 최초 선언한 기본값은 나타내지 않음
								rowData.idx !== '' && (
									<tr>
										<td className='listTableIndex'>
											// router 로 이동 시 idx값을 param
											으로 전달
											{/* <Link
												to={`/BoardContent/${rowData.idx}`}>
												{rowData.idx}
											</Link> */}
										</td>
										<td className='listTableTitle'>
											{/* <Link
												to={`/BoardContent/${rowData.idx}`}>
												{rowData.title}
											</Link> */}
										</td>
									</tr>
								)
						)
					) : (
						<tr>
							<td className='listTableIndex'></td>
							<td className='listTableTitle noData'>
								작성된 글이 없습니다.
							</td>
						</tr>
					)}
				</tbody>
			</table>
			<body>
				<div className='content'>
					글 내용
					<input
						type='text'
						value={contents}
						onChange={(e) => {
							setContents(e.target.value);
						}}
						className='content'></input>
				</div>
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
					글작성
					<input
						type='button'
						value='write'
						className='write'
						onClick={onClickBtn}></input>
				</div>
			</body>
		</div>
	);
};

export default Main;
