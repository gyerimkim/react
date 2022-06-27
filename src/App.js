import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 const[title, setTitle] = useState(
   ["판교 맛집 추천",
  "홍대 카페거리",
"강남 옷수선 잘하는 곳"]
 )

 const [postingDay, setPostingDay] =useState([
   "21년 10월 22일",
   "22년 04월 19일",
   "22년 06월 07일",
 ]);

 let [like, setLike] = useState(0);

 return(
   <div className='App'>
     <div className='black-nav'>
       <h4>겔미의 블로그</h4>
     </div>
     <button onClick={()=>
     {
       const sortTitle = [...title].sort();
       setTitle(sortTitle);
     }}>
     가나다순 정렬</button>
     <div className='list'>
       <h4>
         {title[0]}
         <span onClick={()=>{
           setLike(like++);
         }}>👍</span>
         {like}
         {/* onClick안에는 함수 이름만 넣어야함 */}
       </h4>
       <p>{postingDay[0]}</p>
     </div>
     <div className='list'>
       <h4>
         {title[1]}
         <span onClick={()=>{
           const changeTitle = [...title];
           changeTitle[1]='마곡 카페거리';
           setTitle(changeTitle);
         }}>⏩</span>
       </h4>
         <p>{postingDay[1]}</p>
     </div>
         <div className='list'>
           <h4>{title[2]}</h4>
           <p>{postingDay}</p>
         </div>
         <Modal />
   </div>
 )

}


// 컴포넌트 만드는 법
// 1.function 만들고
// 2.return()안에 html 담기
// 3.<함수명></함수명>


function Modal(){
  return(
    <>
    <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
    </div>
    <div></div>
    </>
  )
}

export default App;
