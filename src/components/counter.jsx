import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 5
  };
 
  render() {
    return (
      <React.Fragment>
        <span  className={this.classNameProducer()}>
          {this.formatCount()}
        </span>
        <ul className='list-group'>{this.lister()}</ul>
        <button onClick={this.increment} className="btn btn-success">Incriment</button>
      </React.Fragment>
    );
  }
   increment=()=>{
    console.log(this.state.count)
    this.setState({count:this.state.count+1})
    console.log(this.state.count)
  }
  lister = ()=> {
    const list=['one','two','three','four','five','six','seven','eight','nine','ten'];
    if(this.state.count === 0){
      return <h3>NO tags</h3>
    }
    let listc=[];
    for(let i=0;i<this.state.count;i++){
      listc.push(list[i]);
    }

    return  listc.map(item => <li className='list-group-item' key={item}>{item}</li>)

  }
  classNameProducer(){
    let clasName="badge badge-";
    return this.state.count === 0 ? clasName+'warning' : clasName+'secondary';
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>zero</h1> : count;
  }
}

export default Counter;
