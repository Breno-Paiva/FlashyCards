import React from 'react';
import Header from './header/header_container'

class App extends React.Component {

headerType(){
  if ( this.props.location.pathname.toString().includes("/study") ){

  }else{
    return <Header />
  }
}

  render(){
    return(
      <div>
        { this.headerType() }
        { this.props.children }
      </div>
    )
  }
};

export default App;
