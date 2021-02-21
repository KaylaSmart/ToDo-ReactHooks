import{useState} from 'react';

function useToggleState(initialVal = false){

    const [state, setState] = useState(initialVal);
    const toggle = () =>{
        //not the current val of state
        setState(!state);
    };
    return [state, toggle];
}

export default useToggleState;
