import React from 'react';
import logo from './logo.svg';
import './App.css';
import { comments } from './data/comments';

function App() {
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/stdimg.jpg"></img>
            <span className='font-semibold text-lg'>Naritsararat Tawiwuttirat 620612152</span>
          </div>

          {/* status message */}
          <p>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-500'>100 คน</p>
          </div>

        </div>

        {/* comments section */}
        <div className="">

          {/* normal comment */}
          <div className="flex p-2 items-start space-x-2">
            {comments.map(x => <img className="w-10 w-10 rounded-full" src=  {x.userImagePath} ></img>  )}
            {/* <img className="w-10 w-10 rounded-full" src="/profileImages/lisa.jpg"></img> */}
            <div className="bg-gray-200 rounded-lg p-2">
              {comments.map (x => <p className="font-semibold"> {x.username} </p>)}
              {/* <p className="font-semibold"> {comments.map (x => <p> {x.username} </p>)}</p> */}
              <p className="font-semibold">{comments.map(x => <p> {x.commentText} </p>)}</p>

              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-500'>{comments.map(x => <p> {x.likeNum} </p>)}</p>
              </div>
            </div>
          </div>

          {/* replies */}
          {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
          <div className="flex p-2 items-start space-x-2 pl-14">
            {comments.map( x => x.replies.map( e=> <img className="w-10 w-10 rounded-full" src={e.userImagePath}></img> ))}
            <div className="bg-gray-200 rounded-lg p-2">
              {comments.map( x => x.replies.map( e=><p className="font-semibold"> {e.username}</p>))}
              {comments.map( x => x.replies.map( e=><p> {e.commentText}</p>))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
