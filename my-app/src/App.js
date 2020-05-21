import React,{Component} from 'react';
import Ninjas from'./ninjas';
import AddNinja from './AddNinja';
class App extends Component {
 state ={
  ninjas:[
    {name:'RYU',age:30,belt:'black',id:1},
    {name:'Yoshi',age:45,belt:'green',id:2},
    { name:'Crystal',age:34,belt:'pink',id:3}
  ]
}
   render(){
  return (
    <div className="App">
      <h1>My first React App!</h1>
      <p>Welcome xD</p>
      <Ninjas ninjas={this.state.ninjas}/>
      <AddNinja/>
   
    </div>
  );
  }

}
export default App;
