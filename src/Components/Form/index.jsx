import { useState } from 'react'
import { agregarCaracter } from '../../Logic'

const Form = ({ setCardNumber, setName, submitted, setSubmitted }) => {
  const [characters, setCharacters] = useState(false)
  const [nameError, setNameError] = useState(null)
  const [numberError, setNumberError] = useState(null)

  let errorOcurred

  const nameErrors = {
    1: `Can't be blank`,
    2: 'Enter at least 3 characters'
  }

  const numberErrors = {
    1: `Can't be blank`,
    2: 'Wrong format, 16 characters required'
  }

  const handleNameChange = (e) => {
    const newValue = e.target.value
    if (nameError && newValue.length > 2) {
      setNameError(null)
    }
    setName(newValue.toUpperCase())
  }

  const handleNumberChange = (e) => {
    const newValue = e.target.value
    if (numberError && newValue.length === 16) setNumberError(null)
    if (newValue.length > 16) {
      setCharacters(true)
      return
    } else {
      setCharacters(false)
    }
    const value = agregarCaracter(newValue, ' ', 4)
    setCardNumber(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new window.FormData(e.target))
    const { name, number } = data

    /* Validar nombre */
    if (name.length === 0) {
      setNameError(nameErrors[1])
      errorOcurred = true
    } else if (name.length < 3) {
      setNameError(nameErrors[2])
      errorOcurred = true
    }

    /* Validar numeros de tarjeta */
    if (number.length === 0) {
      setNumberError(nameErrors[1])
      errorOcurred = true
    } else if (number.length < 16) {
      setNumberError(numberErrors[2])
      errorOcurred = true
    }

    /* validar errores para retornar */
    if (errorOcurred || characters) {
      console.log('hay un error', submitted)
      return
    } else {
      setSubmitted(true)
      console.log('todo bello', submitted)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-5 w-full max-w-[381px]'
    >
      {/* CARD HOLDER NAME */}
      <div className='flex flex-col gap-2'>
        <label
          htmlFor='name'
          className='text-darkViolet tracking-[2px] text-[12px] font-semibold'
        >
          CARD HOLDER NAME
        </label>
        <input
          onChange={(e) => handleNameChange(e)}
          type='text'
          id='name'
          name='name'
          placeholder='e.g. Raul Arias'
          className='w-full h-[45px] px-4 border border-lightGrayish placeholder:text-lightGrayish rounded-lg outline-violet-900 text-darkViolet'
        />
        {nameError ? (
          <p className='text-error text-[12px]'>{nameError}</p>
        ) : null}
      </div>

      {/* Card Number */}
      <div className='flex flex-col gap-2'>
        <label
          htmlFor='number'
          className='text-darkViolet tracking-[2px] text-[12px] font-semibold'
        >
          CARD NUMBER
        </label>
        <input
          onChange={(e) => handleNumberChange(e)}
          type='number'
          id='number'
          name='number'
          placeholder='e.g. 1234 5678 9123 0000'
          className='w-full h-[45px] px-4 border border-lightGrayish placeholder:text-lightGrayish rounded-lg outline-violet-900 text-darkViolet'
        />
        <p className='hidden'>Can&apos;t be blank</p>
        <p className={`text-errors ${characters ? 'block' : 'hidden'}`}>
          Only 16 characters
        </p>
        {numberError ? (
          <p className='text-error text-[12px]'>{numberError}</p>
        ) : null}
      </div>

      {/* Submit */}
      <div>
        <button
          className='w-full h-[53px] bg-darkViolet text-white rounded-lg'
          type='submit'
        >
          Confirm
        </button>
      </div>
    </form>
  )
}

export default Form
