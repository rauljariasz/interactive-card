import card from '../../assets/bg-card-back.png'

const BackCard = ({ cvc }) => {
  return (
    <div className='w-[286px] h-[157px] lg:w-[447px] lg:h-[245px] relative'>
      <img
        src={card}
        className='w-full h-full'
        alt='Parte trasera de la tarjeta'
      />
      <p className='absolute text-white text-[11px] right-8 top-[69px] tracking-[1.5px] lg:text-[16px] lg:top-[110px] lg:right-[50px]'>
        {cvc}
      </p>
    </div>
  )
}

export default BackCard
