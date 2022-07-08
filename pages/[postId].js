import axios from 'axios'
import Header from '../components/Header'
import { IoIosAddCircle } from 'react-icons/io'
import { useState } from 'react'
import Cookies from "universal-cookie";
import styled from 'styled-components';




export default function Post({data}) {
  const [input, setInput] = useState('')
  const [comments, setComments] = useState(data.comment.reverse())
  const [err, setErr] = useState("")
  const cookie = new Cookies()

  const handleSubmit = async (e) =>{
    
    e.preventDefault()
    try {
      const result = await axios({
        method: 'patch',
        url:`${process.env.NEXT_PUBLIC_BACKEND}/post/${data._id}`,
        headers: { "auto-token": cookie.get("jwt") || "" },
        data: {
          comment: input
        }
      })
      setComments(result.data.comment.reverse())
      //setComments(prevComment => prevComment.reverse())
    } catch (error) {
        setErr(error.response.data.err)
        console.log(error)
    }
    setTimeout(()=>{
      setErr('')
    },700)
    setInput('')
  }
  

  
  const commentArr = comments.map(comm =>{
    return(
      <div key={comm.time}>
          <Wrapper className='w-[80%] grid md:grid-cols-[7%_16%_60%]'>
            <div className='w-14 p-2 flex'>
              <img className = 'rounded-[50%] object-fit' src='./user.png'/>
            </div>
            <h1 className='user text-lg font-extrabold self-center text-white md:ml-10'>{comm.user.name}</h1>
            <h2 className='comment text-[#cdcdcd] md:self-center'>{comm.comment}</h2>
          </Wrapper>
          <div className='w-full h-[0.2px] bg-white mb-3'></div>
      </div>
    )
  })
  
  

  return (
    <div>
     
      <Header/>
    
      <div className="mt-6 mx-auto w-3/4 flex flex-col">
        <div className='w-3/4 mx-auto h-40 '>
          <img className='w-full h-full object-fit' src={data.image} />
        </div>
        <div className= 'sm:w-3/4 sm:mx-auto'>
          <h1 className= 'text-3xl text-[#cdcdcd]'>{data.title}</h1>
          <div className= 'w-full h-[1px] bg-zinc-300 mt-2 mb-5'></div>
          <div className='text-[#cdcdcd]'>
            {data.body}
          </div>
        </div>
        <div className='w-full h-[1px] bg-slate-100 mt-10 mb-5'></div>
      </div>
      <div className='mx-auto w-3/4 mb-48'>
        <h1 className= 'text-white text-lg text-center mb-4'>Comment section</h1>
        <h1 className='text-red-600 text-lg text-center mb-4'>{err}</h1>
        <form method='post' onSubmit = {handleSubmit} className='flex justify-center w-full'>
          <input onChange = {e => setInput(e.target.value)} className='w-full md:w-[40%] outline-none px-3 py-1 md:py-2 border-[1px ' placeholder='add comment...' value={input} required/>
          <button type = 'submit' className='flex justify-center items-center bg-gray-700'>
            <IoIosAddCircle className='text-white w-10 h-5'/>
          </button>
        </form>

        <div className='flex flex-column justify-start mt-4 w-full'>
          <ul className='w-full content-center'>
            {commentArr}
          </ul>
        </div>
      </div>
    </div>
  )
}

const Wrapper = styled.div`
  width: 80%;
  display: grid;
  grid-auto-rows: minmax(10px, auto);
  margin-bottom: 4px;
  .user{
    grid-column: 2/4;
  }
  .comment{
    grid-column-start: 1;
    grid-column-end:4;
    
  }
  @media (min-width: 768px) {
    .user {margin-left: 0;}
  }
  
`



export async function getStaticPaths (){
  const {data} = await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_BACKEND}`,
  })

  const prePage = data.map(item => (
    { params: {postId: item._id}}
  ))
  return {
    paths: prePage,
    fallback: false,
  }
}

export async function getStaticProps({params}){
  
  const {postId} = params
  const result = await axios({
    method:'get',
    url:`${process.env.NEXT_PUBLIC_BACKEND}/post`,
    data: { id: postId}
  
  })
  return{
    props:{
      data: result.data
    }
  }   
}


// export async function getServerSideProps({req, res, query}){
//     const {postId} = query
//     const result = await axios({
//       method:'get',
//       url:'http://localhost:5000/post',
//       data: { id: postId}
    
//     })
//     return{
//       props:{
//         data: result.data
//       }
//     }   
// }

