import React, { useRef, useState } from 'react'
import { Form, Formik, FormikHelpers, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'
import candles from '../images/candles.jpg'
import classNames from 'classnames'
import ExclamationIcon from '../icons/Exclamation'
import CheckmarkIcon from '../icons/Checkmark'
import CloseIcon from '../icons/Close'

interface MyFormValues {
  'bot-field': string
  'form-name': string
  name: string
  email: string
  phone: string
  address: string
  zip: string
  city: string
  message: string
}

const REQUIRED_MESSAGE = 'Dit is een verplicht veld.'

const initialValues: MyFormValues = {
  'bot-field': '',
  'form-name': 'contact',
  name: '',
  email: '',
  phone: '',
  address: '',
  zip: '',
  city: '',
  message: '',
}

function SuccessDialogContent({ onClose }: { onClose: () => void }) {
  return (
    <>
      <CheckmarkIcon />
      <p className='title mb-3'>Verzending voltooid!</p>
      <p>Bedankt voor je bericht.</p>
      <p>Ik neem zo snel mogelijk contact met je op.</p>
      <div className='d-grid'>
        <button className='btn btn-inverted mt-4' onClick={onClose}>
          Ga verder
        </button>
      </div>
    </>
  )
}

function ErrorDialogContent({ onClose }: { onClose: () => void }) {
  return (
    <>
      <CloseIcon />
      <p className='title mb-3'>Verzending mislukt!</p>
      <p>Er is iets misgegaan.</p>
      <p>Probeer het later opnieuw.</p>
      <div className='d-grid'>
        <button className='btn btn-inverted mt-4' onClick={onClose}>
          Sluiten
        </button>
      </div>
    </>
  )
}

function CustomErrorMessageFor({ name }: { name: keyof MyFormValues }) {
  return (
    <ErrorMessage name={name}>
      {msg => (
        <div className='error'>
          <ExclamationIcon />
          {msg}
        </div>
      )}
    </ErrorMessage>
  )
}

function ContactForm() {
  const [transaction, setTransaction] = useState<'success' | 'error'>()
  const dialogRef = useRef<HTMLDialogElement>(null)

  async function handleFormSubmit(values: MyFormValues, { setSubmitting, resetForm }: FormikHelpers<MyFormValues>) {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(values as any).toString(),
      })

      if (response.ok) {
        setTransaction('success')
        resetForm()
      } else {
        setTransaction('error')
      }
    } catch (error) {
      setTransaction('error')
    } finally {
      dialogRef.current?.showModal()
      setSubmitting(false)
    }
  }

  function handleCloseDialog() {
    setTransaction(undefined)
    dialogRef.current?.close()
  }

  return (
    <div id='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='heading'>Contact</h2>
          </div>
        </div>
        <div className='row content'>
          <div className='col-12 col-md-7'>
            <Formik
              initialValues={initialValues}
              onSubmit={handleFormSubmit}
              validationSchema={Yup.object({
                name: Yup.string().required(REQUIRED_MESSAGE),
                email: Yup.string().email('Dit is geen geldig e-mailadres.').required(REQUIRED_MESSAGE),
                phone: Yup.string().required(REQUIRED_MESSAGE),
                address: Yup.string().optional(),
                zip: Yup.string().optional(),
                city: Yup.string().optional(),
                message: Yup.string().required(REQUIRED_MESSAGE),
              })}
            >
              {({ isSubmitting, handleChange, handleBlur, values, errors, touched }) => (
                <Form data-netlify='true' netlify-honeypot='bot-field' method='POST' noValidate>
                  <Field type='hidden' name='form-name' />
                  <div hidden aria-hidden='true'>
                    <Field type='hidden' name='bot-field' />
                  </div>
                  <div className={classNames('control', { 'has-error': errors.name && touched.name })}>
                    <label htmlFor='name'>
                      Naam <span className='marker'>(verplicht)</span>
                    </label>
                    <input
                      id='name'
                      type='text'
                      name='name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <CustomErrorMessageFor name='name' />
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className={classNames('control', { 'has-error': errors.email && touched.email })}>
                        <label htmlFor='email'>
                          Emailadres <span className='marker'>(verplicht)</span>
                        </label>
                        <input
                          id='email'
                          type='text'
                          name='email'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        <CustomErrorMessageFor name='email' />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className={classNames('control', { 'has-error': errors.phone && touched.phone })}>
                        <label htmlFor='phone'>
                          Telefoonnummer <span className='marker'>(verplicht)</span>
                        </label>
                        <input
                          id='phone'
                          type='text'
                          name='phone'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                        />
                        <CustomErrorMessageFor name='phone' />
                      </div>
                    </div>
                  </div>
                  <div className='control'>
                    <label htmlFor='address'>
                      Straat en huisnummer <span className='marker'>(optioneel)</span>
                    </label>
                    <input
                      id='address'
                      type='text'
                      name='address'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                    />
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='control'>
                        <label htmlFor='zip'>
                          Postcode <span className='marker'>(optioneel)</span>
                        </label>
                        <input
                          id='zip'
                          type='text'
                          name='zip'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.zip}
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='control'>
                        <label htmlFor='city'>
                          Gemeente <span className='marker'>(optioneel)</span>
                        </label>
                        <input
                          id='city'
                          type='text'
                          name='city'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.city}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={classNames('control', { 'has-error': errors.message && touched.message })}>
                    <label htmlFor='message'>
                      Bericht <span className='marker'>(verplicht)</span>
                    </label>
                    <textarea
                      id='message'
                      rows={7}
                      name='message'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                    />
                    <CustomErrorMessageFor name='message' />
                  </div>
                  <button type='submit' className='btn' disabled={isSubmitting}>
                    Verzenden
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className='col-12 col-md-5 col-xl-4 offset-xl-1 d-flex justify-content-center'>
            <img
              src={candles}
              alt='Een witte vaas met gedroogde roze bloemen en twee brandende blauwe kaarsen op een zwarte tafel.'
              className='candles'
              width={352}
              height={528}
            />
          </div>
        </div>
      </div>
      <dialog ref={dialogRef} className={classNames({ [`dialog--${transaction}`]: Boolean(transaction) })}>
        {transaction === 'success' && <SuccessDialogContent onClose={handleCloseDialog} />}
        {transaction === 'error' && <ErrorDialogContent onClose={handleCloseDialog} />}
      </dialog>
    </div>
  )
}

export default ContactForm
