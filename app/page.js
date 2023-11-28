
import { CarouselCustomNavigation } from '@/components/Carousel'
import Suggestion from '@/components/Suggestion'

export default async function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24">

      <div className='absolute top-0 left-0 z-10'>
        {/* <Suggestion /> */}
      </div>
      <div className='absolute top-0'>
        
        <CarouselCustomNavigation />

      </div>
    </main>
  )
}
