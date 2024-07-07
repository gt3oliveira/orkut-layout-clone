import { Info } from './Info'
import { Sobre } from './Sobre'
import { Social } from './Social'

export function Body() {
  return (
    <div className="flex gap-3 w-[70vw] mt-4 m-auto">
      <Info />
      <Sobre />
      <Social />
    </div>
  )
}
