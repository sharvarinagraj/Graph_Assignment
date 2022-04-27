import React from 'react';
import { BarChart, Bar } from "recharts";
import './App.css';


import styled from "styled-components";


var initialList = [
  {
    id: 'A',
    value: 1,
    isComplete: false,
  },
  {
    id: 'B',
    value: 5,
    isComplete: false,
  },
  {
    id: 'C',
    value: 8,
    isComplete: false,
  },
];


const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  background-color: transparent;
  border: 0;
  font-size: 3rem;
  padding: 0;
  height: 40px;
`;
const listReducer = (state, action) => {
  
  switch (action.type) {
    case 'UPDATE_ITEM': {
      const newList = state.list.map((item) => {
        if (item.id === action.id) {
          const updatedItem = {
            item,
      
          };

          return updatedItem;
        }

        return item;
      });

      return { ...state, list: newList };
    }
    default:
      throw new Error();
  }
};
const List = ({ list, onToggleComplete }) => (
  <ul>
    
    {list.map((item) => (
      <li key={item.id}>
        <h2>{ item.id}</h2>
        { item.value}
        <span
          style={{
            textDecoration: item.isComplete ? 'line-through' : 'none',
          }}
        >
 
          </span>
        <button
          type="button"
          onClick={() => onToggleComplete(item.value++ ,initialList=list )}
        >

          {item.isComplete ? '+' : ' +'}
        </button>
<div>    
             </div>

      
      </li>

    ))}
      
  </ul>
  
);


const App = () => {
  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: initialList,
    isShowList: true,
  });

  function handleToggleComplete(id) {
    dispatchListData({ type: 'UPDATE_ITEM', id });
  }

  if (!listData.isShowList) {
    return null;
  }

  return (
    <div className='App'>
       <List
      list={listData.list}
      onToggleComplete={handleToggleComplete}
    />
    <BarChart width={150} height={500} data={initialList}>
           <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
    
    </div>
   
    
  );
  
};


export default App;
