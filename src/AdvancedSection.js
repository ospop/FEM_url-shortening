import React from 'react'
import styled from 'styled-components'
import sprite from './sprite.svg'

const StyledAdvancedSection = styled.section`
  background-color: hsl(0, 0%, 95%);
  padding: 10em 0;
  display: flex;
  flex-direction: column;
`

const StyledTopSection = styled.div`
  width: 100%;
  h1 {
    color: hsl(257, 27%, 26%);
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    margin: 1em auto;
  }
  p {
    color: hsl(257, 7%, 63%);
    text-align: center;
    font-weight: 500;
  }
`
const StyledBottomSection = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .card {
    padding: 0 0 1em 0;
    position: relative;
    border-radius: 0.4em;
    background-color: white;
    width: 90%auto;
    margin: 5em auto 0 auto;
    h1 {
      color: hsl(257, 27%, 26%);
      text-align: center;
      font-size: 1.3rem;
      font-weight: 700;
      margin: 0 auto 1em auto;
    }
    p {
      padding: 0 1em 1em 1em;
      color: hsl(257, 7%, 63%);
      text-align: center;
      font-weight: 500;
    }
    .card__icon--frame {
      position: relative;
      top: -2.5em;
      height: 5em;
      width: 5em;
      margin: 0 auto;
      border-radius: 50%;
      background-color: hsl(257, 27%, 26%);
    }
    .card__icon {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      width: 50%;
    }
  }
`
const StyledBackgroundLine = styled.div`
  position: absolute;
  top: 10em;
  height: 80%;
  width: 10px;
  background-color: hsl(180, 66%, 49%);
`

const AdvancedSection = () => {
  return (
    <StyledAdvancedSection>
      <StyledTopSection>
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </StyledTopSection>
      <StyledBottomSection>
        <StyledBackgroundLine />
        <div className='background-line'></div>
        <div className='card'>
          <div className='card__icon--frame'>
            <svg className='card__icon'>
              <use href={sprite + '#icon-brand-recognition'} />
            </svg>
          </div>
          <h1>Brand Recognition</h1>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className='card'>
          <div className='card__icon--frame'>
            <svg className='card__icon'>
              <use href={sprite + '#icon-detailed-records'} />
            </svg>
          </div>
          <h1>Detailed Records</h1>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className='card'>
          <div className='card__icon--frame'>
            <svg className='card__icon'>
              <use href={sprite + '#icon-fully-customizable'} />
            </svg>
          </div>
          <h1>Fully Customizable</h1>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </StyledBottomSection>
    </StyledAdvancedSection>
  )
}

export default AdvancedSection