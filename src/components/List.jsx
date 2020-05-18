import React from "react";
import ItemCard from "./ItemCard";
import AddItemForm from "./AddItemForm";

class List extends React.Component {
//   state ={
//     items: {
//       "Sheika Slate": {
//         type: "Key Item",
//         image:
//           "https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/8/88/BotW_Sheikah_Slate_Icon.png/80px-BotW_Sheikah_Slate_Icon.png?version=fcd63bb57fd36e26cca9526d97c5919f",
//         date: "",
//         counter: 1,
//       }
//     }
//   }

  state = {
    list: [
      {
        name: "Sheika Slate",
        type: "Key Item",
        image:
          "https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/8/88/BotW_Sheikah_Slate_Icon.png/80px-BotW_Sheikah_Slate_Icon.png?version=fcd63bb57fd36e26cca9526d97c5919f",
        date: "",
        counter: 1,
      },
    ],
    sortedByType: false,
  };

  addItems = (item) => {
    this.setState((currentState) => {
    //   return {
    //     items: {
    //       ...currentState.items,
    //       [name]: item
    //     }
    //   }
      return {
        list: [...currentState.list, item],
      };
    });
  };

  addCounter = (itemName) => {
    this.setState((currentState) => {
      const updatedCounter = currentState.list.map((item) => {
        if (itemName === item.name) {
            console.log('hello')
          item.counter++;
        }
        return item;
      });
      return {
        list: updatedCounter,
      };
    });
  };


  handleSave = () => {
      localStorage.setItem('list', JSON.stringify(this.state.list))
  }

  retrieveList = () => {
      const list = localStorage.getItem('list')
      if (list) this.setState({list: JSON.parse(list)})
  }

  componentDidMount()   {
      console.log('mounted')
    this.retrieveList()
}

  render() {
    return (
      <div>
        <AddItemForm addItems={this.addItems} />
        <button onClick={this.handleSave}> Save list</button>
        {/* map through the item in the list */}
        <ItemCard data={this.state.list} addCounter={this.addCounter} />
      </div>
    );
  }
}

export default List;
