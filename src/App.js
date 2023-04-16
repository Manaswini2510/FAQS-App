import FaqItem from './components/FaqItem'

import React from 'react'

import './App.css'

const faqsList = [
  {
    id:1,
    questionText : "What is IRC",
    answerText : "IRC is an Industry Ready Certificate thatrepresents your readiness for a job with the necessary skills" 
  },
  {
    id:2,
    questionText : "What is Medium of INstruction",
    answerText : "IRC is an Industry Ready Certificate thatrepresents your readiness for a job with the necessary skills" 
  },
  {
    id:3,
    questionText : "Is there an EMI option to pay fee for CCBP tech 4.0 Intensive ?",
    answerText : "IRC is an Industry Ready Certificate thatrepresents your readiness for a job with the necessary skills" 
  },
  {
    id:4,
    questionText : "How will my doubts be cleared ? What is the Meachanism ?",
    answerText : "IRC is an Industry Ready Certificate thatrepresents your readiness for a job with the necessary skills" 
  }
]

const App = () => (
  <div className='bg'>
      <div className='card'>
          <h1 className='heading'>FAQs</h1>
          <ul>
            {faqsList.map(eachFaq=>(
                <FaqItem key={eachFaq.id} faqData={eachFaq}/>
            ))}
          </ul>
          
      </div>
  </div>
)
export default App;
