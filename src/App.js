/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
	const now = new Date();	// 현재 날짜 및 시간
	let month = now.getMonth();
	let date = now.getDate();

	let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
	let [따봉,따봉변경] = useState([0,0,0]);
	let [modal,setModal] = useState(false);
	let [title,setTitle] = useState(0);
	let [입력값,입력값변경] = useState('');
	let [날짜,날짜변경] = useState(['2월 17일','2월 17일','2월 17일']);

	return (
		<div className="App">
			<div className="black-nav">
				<h4>ReactBlog</h4>
			</div>
			<br></br>
			<button onClick={()=>{
				let copy =[...글제목];
				글제목변경(copy.sort());
			}}>가다나순정렬</button>

			<button onClick={()=>{ 
				let copy =[...글제목];
				copy[0] = '여자 코트 추천';
				글제목변경(copy);
			}}>글수정</button>

			{
				글제목.map(function(a,i){
					return (
						<div className="list" key={i}>
							<h4 onClick={()=>{setModal(!modal);	setTitle(i);}}>
								{ 글제목[i] } 
								<span onClick={(e) => {
									e.stopPropagation(); 
									let copy =[...따봉];
									copy[i] = copy[i]+1;
									따봉변경(copy) 
								}}>👍</span> 
								{따봉[i]}
							</h4>
							<p>{날짜[i]} 발행</p>
							<button onClick={()=>{
								 let copy = [...글제목];
								 copy.splice(i,1);
								 글제목변경(copy);
							}}>삭제</button>
						</div>
					)
				})
			}
			
			<input onChange={(e)=>{ 
				입력값변경(e.target.value)
			}} />
			<button onClick={()=>{
				입력값 != '' ? 실행() : '';
			}}>글발행</button>
			
			{
				modal == true ? <Modal 날짜={날짜} 글제목={글제목} 글제목변경={글제목변경} title={title} modal={modal} setModal={setModal}></Modal> : null
			}	
			
		</div>
	);

	function 실행(){
		let copy = [...글제목];
		let copy1 = [...따봉];
		let copy2 = [...날짜];
		copy.unshift(입력값);
		copy1.unshift(0);
		copy2.unshift(month+1 + '월 ' + date +'일');
		글제목변경(copy);
		따봉변경(copy1);
		날짜변경(copy2);
	}
}


// 컴포넌트
function Modal(props){
	return (
		<div className='modal-popup' onClick={()=>{
			let copy = props.modal;
			copy = false;
			props.setModal(copy);
			}}>
			<div className="modal">
				<h4>{props.글제목[props.title]}</h4>
				<p>{props.날짜[props.title]}</p>
				<p>상세내용</p>
				<button onClick={()=>{ 
					let copy =[...props.글제목];
					copy[0] = '여자 코트 추천';
					props.글제목변경(copy);
				}}>글수정</button>
			</div>
		</div>
	)
}
// const Modal = () => {
// }

export default App;

