import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const items = [
{
  name:'forks',
  id: 123,
  purchased: false,

}
 

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      items: items
    }
  }

  toggleItem = (id) => {
    const newItems = this.state.items.map(item => {
      if(item.id === id){
        return({
          ...item,
          purchased:!item.purchased
        })
      }
      else{
        return item
      }
    });
   
    this.setState({
      items: newItems
    });
  }
  
  addItem = (itemName)=> {
    this.setState({
      items:[...this.state.items, {
        name:itemName,
        id: this.state.length,
        purchased: false
      }]
    });
  }

 clearPurchased = e => {
   this.setState({
     items: this.state.items.filter(item => {
      return ( item.purchased === false)
     })
   });
 }

  render() {
    return (
      <div>
       <div>
        <h1>Todo List</h1>
        <TodoForm addItem={this.addItem} clearPurchased={this.clearPurchased} />
      </div>
      <TodoList toggleItem={this.toggleItem} items={this.state.items} />
    </div>      
    );

  }
}

export default App;
