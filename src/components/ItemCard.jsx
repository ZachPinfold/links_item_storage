import React from "react";

function ItemCard(props) {
  return (
    <div>
      <ul className='item_card_list'>
        {props.data.map((item) => {
          return (
            <li key={item.name} className='item_card'>
              <h3>{item.name}</h3>
              <p>{item.type}</p>
              <img src={item.image} alt={item.name}/>
              <p>Number of items: {item.counter}</p>
              <button onClick={() => props.addCounter(item.name)} name={item.name}>
                  {' '}
                  Up counter
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ItemCard;
