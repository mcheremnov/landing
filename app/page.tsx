import { Hero } from './components/Hero'
import { Services } from './components/Services'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#333446]">
      <Hero />
      <Services />
    </div>
  )
}
