import iconCompleted from '../../assets/icon-complete.svg'

const Completed = ({
  setCardNumber,
  setName,
  setSubmitted,
  setMonth,
  setYear,
  setCvc
}) => {
  const handleClick = () => {
    setCardNumber('0000 0000 0000 0000')
    setName('RAUL ARIAS')
    setSubmitted(false)
    setMonth('')
    setYear('')
    setCvc('')
  }

  return (
    <div className='flex flex-col gap-5 w-full max-w-[381px] justify-center items-center fade-in-fwd'>
      <img
        className='w-[85px] h-[82px]'
        src={iconCompleted}
        alt='Icono de formulario enviado'
      />
      <h1 className='text-[28px] font-semibold tracking-widest'>THANK YOU!</h1>
      <p className='text-[18px] text-grayishViolet'>
        We&apos;ve added your card details
      </p>

      <div className='w-full'>
        <button
          className='w-full h-[53px] bg-darkViolet text-white rounded-lg'
          type='button'
          onClick={handleClick}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default Completed
