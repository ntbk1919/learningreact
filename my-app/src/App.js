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
addNinja=(ninja)=>{
ninja.id=Math.random();
let ninjas=[...this.state.ninjas,ninja];
this.setState({
  ninjas:ninjas
})
}
deleteNinja=(id)=>{
console.log(id)
let ninjas=this.state.ninjas.filter(ninja=>{
  return ninja.id!==id
});
this.setState({
  ninjas:ninjas
})
}

   render(){
  return (
    <div className="App">
      <h1>My first React App!</h1>
      <p>Welcome xD</p>
 
      <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
      <AddNinja addNinja={this.addNinja}/>
   
    </div>
  );
  }

}
export default App;
