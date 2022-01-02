// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';

const Write = ({ user, setLoginUser }) => {
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [userName, setUserName] = useState('');
	const [address, setAddress] = useState('');
	const [recipient, setRecipient] = useState('');
	const [amount, setAmount] = useState(0);
	const [web3, setWeb3] = useState();
	const [wallet, setWallet] = useState();

	useEffect(() => {
		async function connectWeb3() {
			if (typeof window.ethereum !== 'undefined') {
				try {
					const web = new Web3(window.ethereum);
					setWeb3(web);
				} catch (err) {
					console.log(err);
				}
			}
		}
		connectWeb3();
	}, []);

	const connectWallet = async () => {
		var accounts = await window.ethereum.request({
			method: 'eth_requestAccounts',
		});

		setWallet(accounts[0]);
	};

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
	console.log(user.date);
	return (
		<div className='container'>
			<link
				href='https://fonts.googleapis.com/icon?family=Material+Icons'
				rel='stylesheet'></link>
			<div className='row'>
				<h2> Write </h2>
				<h6> * 토큰 발행은 10분마다 1번씩 가능합니다.</h6>
				{/* 			<table className='listTable'>
				<tbody>
					<tr>
						<td className='listTableIndex th'>index</td>
						<td className='listTableTitle th'>title</td>
					</tr>
				</tbody>
			</table> */}
				<h4>글 작성</h4>
				<div className='row'>
					<div className='col 12'>
						<a
							type='button'
							value='Connect Metamask'
							className='waves-effect waves-light btn'
							onClick={connectWallet}>
							<i className='material-icons right'>send</i>
							Connet Metamask
						</a>
						{/* <input
							type='button'
							value='Connect Metamask'
							className='waves-effect waves-light btn'
							onClick={connectWallet}></input> */}
					</div>
					<div className='wallet'>주소: {wallet}</div>
					<div className='userName'>작성자: {user.username}</div>
				</div>
				<div className='row'>
					<div className='input-field col s12'>
						{/* 제목 */}
						<input
							type='text'
							value={title}
							onChange={(e) => {
								setTitle(e.target.value);
							}}
							className='title'></input>
						<label htmlFor='제목'>제목</label>
					</div>
				</div>

				{/* 			<div>
				<div className='address'>
					지갑 주소
					<input
						type='text'
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						className='addressInput'
					/>
				</div>
			</div> */}
				<div className='row'>
					<div className='input-field col s12'>
						{/* 글내용 */}
						<input
							type='text'
							value={content}
							onChange={(e) => setContent(e.target.value)}
							className='contentInput'
						/>
						<label htmlFor='글 내용'>글 내용</label>
					</div>
				</div>

				<div className='row'>
					<div className='col 12'>
						<a
							type='button'
							value='Go Back'
							className='waves-effect red lighten-1 waves-light btn'
							onClick={() => navigate('/main')}>
							<i className='material-icons left'>arrow_back</i>go
							back
						</a>
					</div>
					<div className='col 12'>
						<a
							type='button'
							value='writeContent'
							className='waves-effect waves-light btn'
							onClick={onClickBtn}>
							<i className='material-icons right'>create</i>write
						</a>
					</div>
				</div>
				{/* <div>
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
			</div> */}
			</div>
		</div>
	);
};

export default Write;
