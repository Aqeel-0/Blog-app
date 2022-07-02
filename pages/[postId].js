
import axios from 'axios'
import Header from '../components/Header'
import { IoIosAddCircle } from 'react-icons/io'
import { useState } from 'react'
import Cookies from "universal-cookie";
import styled from 'styled-components';



export default function Post({data}) {
  const [input, setInput] = useState('')
  const [comments, setComments] = useState(data.comment)
  const [comment, setComment] = useState([])
  const cookie = new Cookies()
  const handleSubmit = async (e) =>{
    
    e.preventDefault()
    try {
      const result = await axios({
        method: 'patch',
        url:`http://localhost:5000/post/${data._id}`,
        headers: { "auto-token": cookie.get("jwt") || "" },
        data: {
          input
        }
      })
      setComments(result.data.result.comment)
    } catch (error) {
        console.log(error)
    }
    setInput('')
  }
  
  let commetnArr = [] 
  for(const key in comments){
    const arr = comments[key].map((comm,index) =>{
      return(
        <div key={key+Number(index)}>
            <div className='w-[80%] grid grid-cols-[20%_80%] sm:grid-cols-[15%_85%] md:grid-cols-[10%_90%]'>
              <div className='w-14 p-2'>
                <img className = 'rounded-[50%] object-fit' src='https://www.w3schools.com/howto/img_avatar.png'/>
              </div>
              <h2 className='text-[#cdcdcd] self-center'>{comm}</h2>
            </div>
            <div className='w-full h-[0.2px] bg-white mb-3'></div>
        </div>
      )
    })
    commetnArr = [...commetnArr, ...arr]
  }

  return (
    <div>
      <Header/>
      <div className="mt-6 mx-auto w-3/4 flex flex-col">
        <div className='w-full h-40 '>
          <img className='w-full h-full object-contain' src={data.image} />
        </div>
        <div className=' sm:w-3/4 sm:mx-auto'>
          <h1 className='text-3xl text-[#cdcdcd]'>{data.title}</h1>
          <div className= 'w-full h-[1px] bg-zinc-300 mt-2 mb-5'></div>
          <div className='text-[#cdcdcd]'>
            {data.body}
          </div>
        </div>
        <div className='w-full h-[1px] bg-slate-100 mt-10 mb-5'></div>
      </div>
      <div className='mx-auto w-3/4 mb-48'>
        <h1 className= 'text-white text-lg text-center mb-4'>Comment section</h1>
        <form method='post' onSubmit = {handleSubmit} className='flex justify-center'>
          <input onChange = {e => setInput(e.target.value)} className='outline-none px-3 py-1 border-[1px] shadow-sm shadow-white ' placeholder='add comment...' value={input} required/>
          <button type = 'submit' className='flex justify-center items-center bg-gray-700  shadow-sm shadow-white '>
            <IoIosAddCircle className='text-white w-10 h-5'/>
          </button>
        </form>

        <div className='flex flex-column justify-start mt-4 w-full'>
          <ul className='w-full content-center'>
            {commetnArr}
          </ul>
        </div>
      </div>

    </div>
  )
}

const List = styled.li`
  width: 80%; 
  display: grid;
  grid-template-columns: 20% 80%;
  padding: 2px;
  margin-bottom: 3px;
  
`

export async function getServerSideProps({req, res, query}){
    const {postId} = query

    const result = await axios({
      method:'get',
      url:'http://localhost:5000/post',
      data: { id: postId}
    
    })
    return{
      props:{
        data: result.data
      }
    }   
}

