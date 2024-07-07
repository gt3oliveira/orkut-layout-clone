import { Header } from './components/Header'
import { Body } from './components/Body'

export default function App() {
  return (
    <div className='bg-background w-full h-screen overflow-y-auto pb-4'>
      <Header />
      <Body />
    </div>
  )
}
