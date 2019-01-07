import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state={
      subject : 'welcome to Colorest',
      showClor: "white",
      redColor: (0,0,255),
      blueColor :(0,255,0),
      greenColor : (255,0,0)
      
    }


  }

 
  changbg(){
return{
  backgroundColor: `rgb(${this.state.redColor}, ${this.state.blueColor},${this.state.greenColor} )`
}
  }



subject(){

  return {
     margin : '0 auto'
  }
}
  showClor(){
    return {
      width : "400px",
      height : '500px'
    
  }
}

hendleRed(event){
  const newcolor = event.target.value;
  this.setState({redColor : newcolor})
}
hendleblue(event){
  const newcolor = event.target.value;
  this.setState({blueColor : newcolor})
}
hendleGreen(event){
  const newcolor = event.target.value;
  this.setState({greenColor : newcolor})
}

  render() {
    return (
      <div className='contener'>
      <h1 className='subject'>{this.state.subject}</h1>
      <div className='showClor' style={this.changbg()}>

      </div>
      <div className="inputs">
      <input type="range" max="255" value={this.state.redColor} onChange={this.hendleRed.bind(this)}/>
      <input type="range" max="255" value={this.state.greenColor} onChange={this.hendleGreen.bind(this)}/>
      <input type="range" max="255" value={this.state.blueColor} onChange={this.hendleblue.bind(this)}/>
      
      </div>
  


      
      
      
      
      </div>
    )
  }
}

export default App;
