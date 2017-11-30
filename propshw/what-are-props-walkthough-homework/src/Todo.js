import React from 'react';



class Todo extends React.Component{

render(){
  debugger
  return(
    <div>
      <button onClick={(event) => this.props.alert(event)}>
        Alert Me
      </button>
    </div>
  )
}

}

export default Todo