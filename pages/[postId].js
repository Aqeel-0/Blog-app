
import axios from 'axios'

import Header from '../components/Header'
export default function Post({data}) {
  // const router = useRouter()
  // const {postId} = router.query
  return (
    <>
      <Header/>
      <div className="mt-6 mx-auto w-3/4 flex flex-col">
        <div className='w-full h-40 '>
          <img className='w-full h-full object-cover' src='/mr.jpg' />
        </div>
        <div className=' sm:w-3/4 sm:mx-auto'>
          <h1 className='text-3xl'>{data.title}</h1>
          <div className= 'w-full h-[1px] bg-zinc-300 mt-2 mb-5'></div>
          <div>
            {data.body}
          </div>
        </div>
      </div>
    </>
  )
}

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

