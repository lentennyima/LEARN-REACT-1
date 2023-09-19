import {React, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { click } from '@testing-library/user-event/dist/click';

const studentList = [
  {
    firstName: "Misty",
    lastName: "Knight",
    sId: "234",
    school: "Queens College",
    major: "Law",
  },
  {
    firstName: "Jessica",
    lastName: "Jones",
    sId: "434",
    school: "Brooklyn College",
    major: "CS",
  },
  {
    firstName: "Colleen",
    lastName: "Wing",
    sId: "233",
    school: "Queens College",
    major: "CS",
  },
  {
    firstName: "Dare",
    lastName: "Devil",
    sId: "876",
    school: "CCNY",
    major: "Law",
  },
  {
    firstName: "Luke",
    lastName: "Cage",
    sId: "323",
    school: "CCNY",
    major: "Math",
  },
];
function StudentInfo(props) {
  return (
    <div>
      <div className="red-text">
        {props.lastName}, {props.firstName}
      </div>
      <ul>
        <li>
          <strong>ID:</strong> {props.sid}
        </li>
        <li>
          <strong>School:</strong> Queens College
        </li>
        <li>
          <strong>Major:</strong> Computer Science
        </li>
      </ul>
    </div>
  );
}

function CountApp(){
  const [numClicks, setNumClicks] = useState(0);
  
  function clickHandler(event) {
    setNumClicks(numClicks + 1);;
  }

  return(
    <div>
      <p>The button has been clicked {numClicks} times</p>
      <button onClick={clickHandler}>CLick the BUtton</button>

    </div>
  )
}

function ClassList(){


  return(<div>
    <h1 className='red-text'>Welcome to CTP</h1>
    <p>List of students</p>
    {
      studentList.map((student) => {
        <StudentInfo {...student} key={student.sId} />
      })
    }
  </div>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<CountApp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
