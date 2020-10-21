import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled';

const Container =styled.div`
  padding: 3rem;
  border-radius: .5rem;
  background-color: #fff;
  max-width: 800px;
  margin-top: 10rem;
`;

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
