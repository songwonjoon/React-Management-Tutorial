import React from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id': 1,
    'image':'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '951101',
    'gender': '남자',
    'job': '취준생'
  },
  {
    'id': 2,
    'image':'https://placeimg.com/64/64/2',
    'name': '고길동',
    'birthday': '951101',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'image':'https://placeimg.com/64/64/3',
    'name': '둘리',
    'birthday': '951101',
    'gender': '남자',
    'job': '디자이너'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;
