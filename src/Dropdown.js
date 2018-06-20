import React, {Component} from 'react';


class Dropdown extends Component{
  constructor(props){
    super(props);

    this.state={
      isOpened: false
    }
  }

  toggleState(){
    this.setState({
      isOpened: !this.state.isOpened
    })
  };


  render(){
    console.log(this.state.isOpened);
    let dropDownText;

    if(this.state.isOpened){
      dropDownText=<div>Dropdown content is shown</div>
    };
    return(
      <div onClick={this.toggleState.bind(this)}>
        this is dropdown
        {dropDownText}
      </div>
    )
  }
}


export default Dropdown;