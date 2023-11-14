import { useState } from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';

import Card from '../../components/Card';

const FAQ = ({ fqa }) => {
  const [showAnswer, setshowAnswer] = useState(false);
  return (
    <Card className="faq light">
      <div>
        <h5 className="faq__question">{fqa.question}</h5>
        <button
          className="faq__icon"
          onClick={() => setshowAnswer((prev) => !prev)}
        >
          {showAnswer ? <BiMinus /> : <BiPlus />}
        </button>
      </div>
      {showAnswer && <p className="faq__ans">{fqa.answer}</p>}
    </Card>
  );
};

export default FAQ;
