// import axios from 'axios';
import React, { useState } from 'react';
import axios from 'axios';

const Write = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [userName, setUserName] = useState('');
	const [address, setAddress] = useState('');

	const onClickBtn = async (e) => {
		await axios
			.post('http://localhost:8888/app/write', {
				title: title,
				username: userName,
				address: address,
				content: content,
			})
			.then((res) => {
				window.location.href = 'http://localhost:3000/main';
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<h2>글 작성</h2>
			<table className='listTable'>
				<tbody>
					<tr>
						<td className='listTableIndex th'>index</td>
						<td className='listTableTitle th'>title</td>
					</tr>
				</tbody>
			</table>
			<div>글 작성</div>
			<div className='title'>
				제목
				<input
					type='text'
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					className='title'></input>
			</div>
			<div>
				<div className='userName'>
					작성자
					<input
						type='text'
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						className='userNameInput'
					/>
				</div>
			</div>
			<div>
				<div className='address'>
					지갑 주소
					<input
						type='text'
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						className='addressInput'
					/>
				</div>
			</div>
			<div>
				<div className='content'>
					글내용
					<input
						type='text'
						value={content}
						onChange={(e) => setContent(e.target.value)}
						className='contentInput'
					/>
				</div>
			</div>
			<div>
				<input
					type='button'
					value='writeContent'
					className='writeContent'
					onClick={onClickBtn}></input>
			</div>
		</div>
	);
};

export default Write;
