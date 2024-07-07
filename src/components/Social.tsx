import { Card } from './Card'
import { amigos, comunidades } from '../libs/helpers'

export function Social() {
  return (
    <div className='w-[269px] flex flex-col gap-3'>
      <Card>
        <h1 className='text-lg font-bold'>
          amigos <span className='text-text1 tracking-widest'>(5)</span>
        </h1>
        <div className='grid grid-cols-3 gap-2'>
          {amigos.map((amigo) => (
            <div className='flex flex-col justify-between max-w-[80px] bg-white/80 p-1'>
              <div className='flex w-full h-[90px]'>
                <img src={amigo.imagem} className='object-cover' />
              </div>
              <a href="#" className='text-text1 text-sm text-center underline pt-2'>{amigo.nome} ({amigo.number})</a>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <h1 className='text-lg font-bold'>
          comunidades <span className='text-text1 tracking-widest'>(3)</span>
        </h1>
        <div className='grid grid-cols-3 gap-2'>
          {comunidades.map((comunidade) => (
            <div className='flex flex-col justify-between max-w-[80px] bg-white/80 p-1'>
              <div className='flex w-full h-[90px]'>
                <img src={comunidade.image} className='object-contain' />
              </div>
              <a href="#" className='text-text1 text-sm text-center underline pt-2'>{comunidade.nome} ({comunidade.number})</a>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
