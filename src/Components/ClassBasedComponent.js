import React from "react";

class ClassBasedComponent extends React.Component {
  //Lifecycle Methods
  constructor(props) {
    super(props);

    this.state = {
      userInfo: null,
    };
  }

  async componentDidMount(){ //Calling sequence =>  constructor -> Render -> componentDidMount
    const data = await fetch("https://api.github.com/users/lakshyakumar90");
    const response = await data.json();
    this.setState({ userInfo: response });
  }

  render() {
    if(this.state.userInfo === null){
      return <h1>Loading...</h1>
    }

    const {name, location } = this.state.userInfo;

    return (
      <div style={{ padding: "2rem", marginTop: "5vw" }}>
        <h1>{name}</h1>
        <h2>{location}</h2>
      </div>
    );
  }

  // NOTE: LEARN REACT LIFECYCLE METHOD DIAGRAM
  // First constructor and then render is called then react loads the DOM and then componentDidMount is called 

  /*
  - Parent constructor
  - Parent render
    - Child constructor
    - Child render
    - Child componentDidMount
  - Parent componentDidMount
  */

  /*
  IN CASE OF 2 CHILD COMPONENTS

  THIS IS WRONGGGGGGG

  - Parent constructor
  - Parent render

    - Child1 constructor
    - Child1 render
    - Child1 componentDidMount    

    - Child2 constructor
    - Child2 render
    - Child2 componentDidMount

  - Parent componentDidMount

  THIS IS RIGHTTTTTTT

  - Parent constructor
  - Parent render

    - Child1 constructor  => this is render phase
    - Child1 render
      
    - Child2 constructor  => this is render phase
    - Child2 render

    DOM UPDATED IN A SINGLE BATCH
    THATS WHY componentDidMount is the best place to make an api call
    - Child1 componentDidMount  => This is Commit Phase
    - Child2 componentDidMount

  - Parent componentDidMount
  */
}

export default ClassBasedComponent;
