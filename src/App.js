import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let menu = '강남 우동 맛집';
  let [글제목,글제목변경] = useState(['남자 코드 추천','강남 우동 맛집','파이썬 독학']);
  let [따봉,따봉변경] = useState([0,1,2]);
  let [like1,likeAdd1] = useState(0);
  let [like2,likeAdd2] = useState(0);
  let [modal,setModal] = useState(false);
  let [title,setTitle] =useState(0);
  let [입력값,입력값변경] = useState('');

  
  return (
    <div className="App">
      <div>
        <h3 className="black-tit">블로그1 </h3>
        <button onClick={ () => {
          let copy_title = [...글제목];
          copy_title[0] = "여자 코트 추천";
         // copy_title.sort();
         글제목변경(copy_title);
          } }>수정버튼</button>
      </div>
      
      {/* <div className='list'>
        <h4>{title[0]} <span onClick={ () => { likeAdd(like + 1) }}>👍</span> {like}</h4>
        <p>7월 8일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>7월 8일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => {
          setModal(!modal);
          //modal == true ? setModal(false) : setModal(true)    
          }}>{title[2]}</h4>
        <p>7월 8일 발행</p>
      </div> */}

      {
        글제목.map(function(a,i){
          return(
            <div className='list' key={i}>
              <h4> 
                <span onClick={() => {setModal(!modal); setTitle(i)}}>{글제목[i]}</span> 
                <span onClick={(e) => {e.stopPropagation(); 따봉변경(따봉[i] + 1,따봉[i] + 1) }}>👍 {따봉[i]}</span>
              </h4>
              <p>7월 8일 발행</p>
              <button onClick={
                () => {
                  let copy = [...글제목];
                  copy.splice(i,1);
                  글제목변경(copy);
                  }}>삭제</button>
            </div>
            
          )
        })
      }

      <input onChange={
        (e)=>{
          입력값변경(e.target.value);
        }
      }></input>
      <button onClick={
        ()=> {
          console.log(입력값);
          let copy = [...글제목];
         copy.unshift(입력값);
         글제목변경(copy);
        }}>발행</button>
      
      {
        (modal == true) ? <Modal title={title} 글제목={글제목} 글제목변경={글제목변경}></Modal> : null
      }
      
    </div>   
  );
}

function Modal(props){
  return(
    <div className="modal">
      <h4>{ props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      
      <button onClick={ () => {
        let copy_title = [...props.글제목];
        copy_title[0] = "여자 코트 추천";
        // copy_title.sort();
        props.글제목변경(copy_title);
        } }>수정버튼</button>
    </div>
  )
}

export default App;
