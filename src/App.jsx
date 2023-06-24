import FrontCard from './Components/FrontCard'
import BackCard from './Components/BackCard'
import Form from './Components/Form'
import { useState } from 'react'

function App() {
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000')
  const [name, setName] = useState('RAUL ARIAS')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvc, setCvc] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <header className='h-[240px] bg-[url(./assets/bg-main-mobile.png)] relative lg:hidden'>
        <div className='absolute left-[16px] bottom-[-41px] z-10 sm:left-[200px]'>
          <FrontCard
            cardNumber={cardNumber}
            name={name}
            month={month}
            year={year}
          />
        </div>
        <div className='absolute right-[16px] top-[35px] sm:right-[200px]'>
          <BackCard cvc={cvc} />
        </div>
      </header>

      <main className='flex w-full lg:h-screen'>
        {/* Aside Desktop */}
        <section className='hidden lg:block h-full w-[483px] bg-[url(./assets/bg-main-desktop.png)] bg-cover relative'>
          <div className='absolute 2xl:right-[-105px] right-[-25px] top-[calc(50%-265px)]'>
            <FrontCard
              cardNumber={cardNumber}
              name={name}
              month={month}
              year={year}
            />
          </div>
          <div className='absolute 2xl:right-[-225px] right-[-75px] bottom-[calc(50%-265px)]'>
            <BackCard cvc={cvc} />
          </div>
        </section>

        {/* Form */}
        <section className='flex justify-center items-center flex-1 mt-[80px] px-[25px]'>
          <Form
            setCardNumber={setCardNumber}
            setName={setName}
            submitted={submitted}
            setSubmitted={setSubmitted}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            cvc={cvc}
            setCvc={setCvc}
          />
          {/* {submitted ? null : (
            <Form
              setCardNumber={setCardNumber}
              setName={setName}
              submitted={submitted}
              setSubmitted={setSubmitted}
            />
          )} */}
        </section>
      </main>
    </>
  )
}

export default App
