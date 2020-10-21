import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styled';

const Phrase = ({phrase}) => {

  const { author, quote } = phrase;
  return (
    <Container>
      <h1>{quote}</h1>
      <p>- {author}</p>
    </Container>
  )
}

Phrase.propTypes = {
  phrase: PropTypes.object.isRequired,
}

export default Phrase
