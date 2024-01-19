import React, { useState } from 'react';
import arrowDown from '../assets/arrowdown.svg'
import arrowUp from '../assets/arrowUp.svg'
import '../../src/index.css'

const dataCollection = [
  {
    question: 'What makes blockchain trustworthy?',
    answer: 'It comes with a timestamp which indicates when the information was written on the blockchain and it is always. '
  }, {
    question: 'Why Do You Want to Work at This Company?',
    answer: 'Integer vel massa vulputate, varius nunc nec, malesuada arcu. '
  }, {
    question: 'What Are Your Greatest Strengths?',
    answer: 'Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. '
  }, {
    question: 'Can You Explain Why You Changed Career Paths?',
    answer: ' Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. '
  }
];

function Accordion() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return
    }
    setActiveAccordion(index);
  };

  return (
    <>
    <div className="mainContainer">
      <div className="container">
        <div className='heading-name'>
          <h1>FAQ</h1>
        </div>
        <div className="accordion__faq">
          { dataCollection.map((item, index) =>
              <div key={index} onClick={() => toggleAccordion(index)}>
                <div className="accordion__faq-heading">
                  <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                  <div>
                    {accordion === index ?
                    <img src={arrowDown}/> : <img src={arrowUp}/> }
                  </div>
                </div>
                <div><p className={accordion === index ? "active" : "inactive"} >{item.answer}</p></div>
              </div>
            )
          }
        </div>
      </div>
      </div>
    </>
  );
}

export default Accordion;