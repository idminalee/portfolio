import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
import Button from './Button'
import * as colour from './styles/constants/colours'
import * as font from './styles/constants/typography'
import { FormStyles } from './styles/FormStyles'

const ContactWrapper = styled.div`
  width: 100%;
  padding-bottom: 180px;
  background-color: ${(props) => props.theme.bgColour};
`

const ContactStyles = styled.section`
  max-width: 70%;
  height: 100%;
  padding-top: 200px;
  margin: 0 auto;

  h2 {
    margin-bottom: 28px;
    font-size: ${font.FONT_36};
    font-weight: 400;
    line-height: 1.35;
  }

  p {
    margin-bottom: 56px;
    font-size: ${font.FONT_16};
    font-weight: 400;
    line-height: 1.8;

    a {
      color: ${colour.BLUE};
      text-decoration: underline;
      transition: all 200ms ease-in-out;

      &:hover {
        color: #fff;
        background-color: ${colour.BLUE};
      }
    }
  }
`

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })

  const { name, email, message } = inputs

  const onChange = (e) => {
    const { value, name } = e.target

    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_32uddao',
        'template_qgowj1l',
        e.target,
        'user_3nH9cQjTauVitXufLWAeT'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <ContactWrapper>
      <ContactStyles data-aos="fade-up">
        <h2>Say hello!</h2>
        <p>
          If you prefer email,&nbsp;
          <a href="mailto:minaleedev@gmail.com">click here</a> to send me an
          email!
        </p>

        <FormStyles className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label htmlFor="name">Name</label>
          <input
            onChange={onChange}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            autoFocus
            required
          />
          <label htmlFor="email">Email Address</label>
          <input
            onChange={onChange}
            type="text"
            id="email"
            name="email"
            placeholder="your@email.com"
            value={email}
            pattern="^\w+((\.\w+)?)+@\w+.?\w+\.\w+$"
            required
            autoComplete="true"
          />
          <label htmlFor="message">Message</label>
          <textarea
            onChange={onChange}
            name="message"
            id="message"
            placeholder="Say hi 🙌"
            value={message}
            required
            minLength="2"
          ></textarea>
          <Button type="submit" fill="true" height="46px" fullWidth>
            SEND
          </Button>
        </FormStyles>
      </ContactStyles>
    </ContactWrapper>
  )
}

export default Contact
