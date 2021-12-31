// import axios from 'axios';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Write = ({ user, setLoginUser }) => {
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [userName, setUserName] = useState('');
	const [address, setAddress] = useState('');
	const [recipient, setRecipient] = useState('');
	const [amount, setAmount] = useState(0);

	const onClickBtn = async (e) => {
		await axios
			.post('http://localhost:8888/app/write', {
				title: title,
				username: user.username,
				address: address,
				content: content,
			})
			.then((res) => {
				alert('1 OAT 지급완료!');
				navigate('/main');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const onClickBtnTransferToken = async (e) => {
		await axios
			.post('http://localhost:8888/app/transferToken', {
				address: address,
				recipient: recipient,
				amount: amount,
			})
			.then((res) => {
				alert(res.data.message);
				navigate('/main');
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

			<div>
				<div className='userName'>작성자: {user.username}</div>
			</div>

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
			<div>
				OAT 전송
				<div>위 작성자 지갑 주소를 작성해주세요</div>
				<div className='recipient'>
					토큰 받을 유저
					<input
						type='text'
						value={recipient}
						onChange={(e) => setRecipient(e.target.value)}
						className='recipientInput'
					/>
					전송 할 토큰 양
					<input
						type='number'
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						className='amount'
					/>
				</div>
				<input
					type='button'
					value='transferToken'
					className='transferToken'
					onClick={onClickBtnTransferToken}></input>
			</div>
		</div>
	);
};

export default Write;
