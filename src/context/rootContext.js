import React,{Component} from 'react';
import {useDispatch} from 'react-redux';


const RootContext = React.createContext();

class RootContextProvider extends Component {
  constructor (props) {
    super(props);
    // this.dispatch = useDispatch();
  }

  onInputChange = (e) => {
    console.log("event", e);
  }
  
  render () {
    return (
      <RootContext.Provider value={{
        
        changeInputHandler : this.onInputChange,
        name: "shantnu"
      }}>
        {this.props.children}
      </RootContext.Provider>
    )

  }
}



export default RootContextProvider;