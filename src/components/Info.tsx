import { Card } from './Card'

export function Info() {
  return (
    <div className='w-[156px]'>
      <Card>
        <img src="https://avatars.githubusercontent.com/u/94011588?v=4" alt="gustavo" width={156} />
        <span className='text-text1 text-sm'>
          Gustavo Tavares
        </span>
        <p className='text-text2 text-xs'>
          solteiro(a) <br />
          rio de janeiro, Brasil
        </p>
        <hr className='border-gray-300' />
        <a href="#" className='text-text1 text-sm flex items-center gap-1'>
          🙋🏻‍♂️ + amigos mais
        </a>
        <hr className='border-gray-300' />
        <div className='bg-two-about'>
          <div className='border-gray-300 border px-1'>
            <a href="#" className='text-text3 text-sm'>
              🙍🏻‍♂️ perfil
            </a>
          </div>
          <div className='border-gray-300 border px-1'>
            <a href="#" className='text-text3 w-full text-sm'>
              📝 recados
            </a>
          </div>
          <div className='border-gray-300 border px-1'>
            <a href="#" className='text-text3 w-full text-sm'>
              📷 fotos
            </a>
          </div>
          <div className='border-gray-300 border px-1'>
            <a href="#" className='text-text3 w-full text-sm'>
              🎥 vídeos
            </a>
          </div>
          <div className='border-gray-300 border px-1'>
            <a href="#" className='text-text3 w-full text-sm'>
              📩 depoimentos
            </a>
          </div>
        </div>
      </Card>
    </div>
  )
}
