import card from '../../assets/bg-card-front.png'
import logo from '../../assets/card-logo.svg'

const FrontCard = () => {
  return (
    <div className='w-[286px] h-[157px] lg:w-[447px] lg:h-[245px] relative'>
      <img
        src={card}
        className='w-full h-full'
        alt='Parte trasera de la tarjeta'
      />
      <img
        src={logo}
        className='absolute w-[56px] h-[32px] top-4 left-5 lg:w-[84px] lg:h-[47px]'
        alt='Logo de la tarjeta'
      />
      {/* Numero de tarjeta */}
      <p className='text-white absolute left-5 top-[90px] tracking-[2px] lg:top-[130px] lg:text-3xl'>
        0000 0000 0000 0000
      </p>
      {/* Nombre */}
      <p className='text-white absolute left-5 bottom-4 text-[11px] lg:text-[18px]'>
        Raul Arias
      </p>
      {/* Caducidad */}
      <p className='text-white absolute right-5 bottom-4 text-[11px] lg:text-[18px]'>
        00/00
      </p>
    </div>
  )
}

export default FrontCard
