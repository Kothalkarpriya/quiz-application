import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Quiz() {
  const location = useLocation();
  const tag = location?.state?.tag ?? "HTML";
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`/question?tags=${tag}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [tag]);

  console.log(`/question?tags=${tag}`);
  return (
    <div>
      {/* {JSON.stringify(data)} */}

      {data?.questions.length>0  && data.questions.map((question) => (
        <li className="ques">
          {question.statement}
          <ol className="ques-option-list" type="A">
            <li className="ans-list">
              <input type="radio" />
              {question[0]}
            </li>
            <li className="ans-list">
              <input type="radio" />
              {question[1]}
            </li>
            <li className="ans-list">
              <input type="radio" />
              {question[2]}
            </li>
            <li className="ans-list">
              <input type="radio" />
              {question[3]}
            </li>
          </ol>
        </li>
      ))}
    </div>
  );
}
