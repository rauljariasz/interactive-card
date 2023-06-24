import { useState, useEffect } from 'react'
import { agregarCaracter } from '../../Logic'

const Form = ({
  setCardNumber,
  setName,
  setSubmitted,
  month,
  setMonth,
  year,
  setYear,
  cvc,
  setCvc
}) => {
  const [characters, setCharacters] = useState(false)
  const [nameError, setNameError] = useState(null)
  const [numberError, setNumberError] = useState(null)
  const [monthError, setMonthError] = useState(null)
  const [yearError, setYearError] = useState(null)
  const [dateError, setDateError] = useState(null)
  const [cvcError, setCvcError] = useState(null)

  let errorOcurred

  useEffect(() => {
    if (!monthError && !yearError) {
      setDateError(null)
    }
  }, [monthError, yearError])

  /* Errores */
  const nameErrors = {
    1: `Can't be blank`,
    2: 'Enter at least 3 characters'
  }

  const numberErrors = {
    1: `Can't be blank`,
    2: 'Wrong format, 16 characters required'
  }

  const dateErrors = {
    1: `Can't be blank`,
    2: '2 characters required'
  }

  const cvcErrors = {
    1: `Can't be blank`,
    2: '3 characters required'
  }

  /* Cambios */
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

  const handleMonthChange = (e) => {
    const newValue = e.target.value
    if (monthError && newValue.length === 2) setMonthError(null)
    if (newValue.length > 2) {
      return
    }
    setMonth(newValue)
  }

  const handleYearChange = (e) => {
    const newValue = e.target.value
    if (yearError && newValue.length === 2) setYearError(null)
    if (newValue.length > 2) {
      return
    }
    setYear(newValue)
  }

  const handleCvcChange = (e) => {
    const newValue = e.target.value
    if (cvcError && newValue.length === 3) setCvcError(null)
    if (newValue.length > 3) {
      return
    }
    setCvc(newValue)
  }

  /* Validaciones */
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new window.FormData(e.target))
    const { name, number, month, year, cvc } = data

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

    /* Validar mes para pintarlo si hay error */
    if (month.length < 2) {
      setMonthError(true)
    }

    /* Validar año para pintarlo si hay error */
    if (year.length < 2) {
      setYearError(true)
    }

    /* Validar que ambas fechas esten correctas */
    if (month.length === 0 && year.length === 0) {
      setDateError(dateErrors[1])
      errorOcurred = true
    } else if (month.length > 0 && year.length < 2) {
      setDateError(dateErrors[2])
      errorOcurred = true
    } else if (month.length < 2 && year.length > 0) {
      setDateError(dateErrors[2])
      errorOcurred = true
    } else if (month.length === 1 && year.length === 1) {
      setDateError(dateErrors[2])
      errorOcurred = true
    }

    /* Validar CVC */
    if (cvc.length === 0) {
      setCvcError(cvcErrors[1])
      errorOcurred = true
    } else if (cvc.length > 0 && cvc.length < 3) {
      setCvcError(cvcErrors[2])
      errorOcurred = true
    }

    /* validar si hubo errores para poder setear el estado submit y cambiar la vista */
    if (errorOcurred || characters) {
      return
    } else {
      setSubmitted(true)
    }
  }

  const styleInputError = 'border-error outline-error'
  const styleInput = 'border-lightGrayish outline-violet-900'

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-5 w-full max-w-[381px] fade-in-fwd'
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
          className={`w-full h-[45px] px-4 border placeholder:text-lightGrayish rounded-lg  text-darkViolet ${
            nameError ? styleInputError : styleInput
          }`}
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
          className={`w-full h-[45px] px-4 border placeholder:text-lightGrayish rounded-lg text-darkViolet ${
            numberError || characters ? styleInputError : styleInput
          }`}
        />
        <p className='hidden'>Can&apos;t be blank</p>
        <p className={`text-errors ${characters ? 'block' : 'hidden'}`}>
          Only 16 characters
        </p>
        {numberError ? (
          <p className='text-error text-[12px]'>{numberError}</p>
        ) : null}
      </div>

      {/* EXP DATE & CVC */}
      <div className='flex gap-4'>
        {/* EXP DATE */}
        <div className='flex flex-col gap-2 w-1/2'>
          <h1 className='text-darkViolet tracking-[2px] text-[12px] font-semibold'>
            EXP. DATE (MM/YY)
          </h1>
          <div className='flex w-full gap-2'>
            {/* MM */}
            <input
              onChange={(e) => handleMonthChange(e)}
              type='number'
              id='month'
              name='month'
              placeholder='MM'
              value={month}
              className={`w-1/2 h-[45px] px-4 border placeholder:text-lightGrayish rounded-lg  text-darkViolet ${
                monthError ? styleInputError : styleInput
              }`}
            />
            {/* YY */}
            <input
              onChange={(e) => handleYearChange(e)}
              type='number'
              id='year'
              name='year'
              placeholder='YY'
              value={year}
              className={`w-1/2 h-[45px] px-4 border placeholder:text-lightGrayish rounded-lg  text-darkViolet ${
                yearError ? styleInputError : styleInput
              }`}
            />
          </div>
          {dateError ? (
            <p className='text-error text-[12px]'>{dateError}</p>
          ) : null}
        </div>

        {/* CVC */}
        <div className='flex flex-col gap-2 w-1/2'>
          <label
            htmlFor='cvc'
            className='text-darkViolet tracking-[2px] text-[12px] font-semibold'
          >
            CVC
          </label>
          <input
            onChange={(e) => handleCvcChange(e)}
            type='number'
            id='cvc'
            name='cvc'
            placeholder='e.g. 123'
            value={cvc}
            className={`flex-1 min-h-[45px] max-h-[45px] px-4 border placeholder:text-lightGrayish rounded-lg  text-darkViolet ${
              cvcError ? styleInputError : styleInput
            }`}
          />
          {cvcError ? (
            <p className='text-error text-[12px]'>{cvcError}</p>
          ) : null}
        </div>
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
