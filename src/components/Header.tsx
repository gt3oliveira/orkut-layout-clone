import { FaSearch } from 'react-icons/fa'
import logo from '../assets/logo.png'

export function Header() {
  return (
    <div className='flex text-white items-center justify-between px-[15vw] bg-gradient-to-b from-[#517FC5] from-[10%] to-[rgba(81,127,197,0.75)] to-[90%] h-[36px] shadow-md shadow-[#517FC5]'>
      <div className='flex items-center gap-4'>
        <div className='bg-white h-[36px] flex items-center w-fit px-2'>
          <img src={logo} alt="logo orkut" />
        </div>
        <nav className='flex gap-4 text-sm'>
          <a href="#">Inicio</a>
          <a href="#">Página de recados</a>
          <a href="#">Amigos</a>
          <a href="#">Comunidades</a>
        </nav>
      </div>

      <div className='flex items-center gap-4 text-sm'>
        <span className='text-email-text font-semibold'>gustavo@vite.com</span>
        <a href="#">Sair</a>
        <div className='bg-[#5F7FA7] flex items-center gap-2 py-1 px-3 rounded-lg'>
          <input type="text" className='text-[#5F7FA7] outline-none px-1' />
          <FaSearch />
        </div>
      </div>
    </div>
  )
}
