import FrontCard from './Components/FrontCard'
import BackCard from './Components/BackCard'

function App() {
  return (
    <>
      <header className='h-[240px] bg-[url(./assets/bg-main-mobile.png)] relative lg:hidden'>
        <div className='absolute left-[16px] bottom-[-41px] z-10 sm:left-[200px]'>
          <FrontCard />
        </div>
        <div className='absolute right-[16px] top-[35px] sm:right-[200px]'>
          <BackCard />
        </div>
      </header>

      <main className='flex w-full lg:h-screen'>
        {/* Aside Desktop */}
        <section className='hidden lg:block h-full w-[483px] bg-[url(./assets/bg-main-desktop.png)] bg-cover relative'>
          <div className='absolute 2xl:right-[-105px] right-[-25px] top-[calc(50%-265px)]'>
            <FrontCard />
          </div>
          <div className='absolute 2xl:right-[-225px] right-[-75px] bottom-[calc(50%-265px)]'>
            <BackCard />
          </div>
        </section>

        {/* Form */}
        <section className='flex justify-center items-center flex-1'></section>
      </main>
    </>
  )
}

export default App
