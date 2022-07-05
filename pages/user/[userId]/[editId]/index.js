import { Button } from "@material-tailwind/react";
import { FiMail } from 'react-icons/fi'
import { FcLike } from 'react-icons/fc'
import { FaGraduationCap } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import Link from 'next/link'
import { useRouter } from 'next/router'

function UserId() {

    const router = useRouter()
    console.log(router.query)
  return (
    <div className="text-white">{router.query.editId}</div>
  )
}

export default UserId