const counterReducer = ( state = 0, action ) => {

    switch(action.type) {
        case 'INCREMENT' : 
          //alert('increment invoked');
          return state + 1;
  
        case 'DECREMENT' :
          //alert('increment invoked');
          return state - 1;
        
        default: 
          return state;
    }
  }

export default counterReducer;