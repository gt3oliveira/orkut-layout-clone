import { infos, social } from '../libs/helpers'
import { Card } from './Card'

export function Sobre() {
  return (
    <div className='flex-1'>
      <Card>
        <h1 className='text-text3 text-2xl'>Gustavo Tavares</h1>
        <hr className='border-gray-300 mt-2' />
        <div className='flex gap-4'>
          {infos.map((info) => (
            <div key={info.text} className='flex flex-col'>
              <span className='text-text3 text-sm'>{info.text}</span>
              <span>{info.icon} {info.number}</span>
            </div>
          ))}
        </div>
        <hr className='border-gray-300' />
        <div className='bg-gradient-to-b from-[#517FC5] from-[10%] to-[rgba(81,127,197,0.75)] to-[90%] w-fit px-2 text-white font-semibold text-lg rounded-t-lg ml-2'>
          <span>social</span>
        </div>
        <hr className='border-gray-300 border-2 -mt-2' />

        <div className='flex flex-col'>
          {social.map(({ question, reply }, index) => (
            <div key={index} className={`flex w-full ${index % 2 === 0 ? 'bg-one-about' : 'bg-two-about'}`}>
              <span className='text-text2 w-[30%] text-end'>{question}:</span>
              <span className='flex-1 mx-1'>{reply}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
