import {useState, useEffect} from 'react';

function UseLocalStorageState(key, defaultVal){
    //make piece id state, based off us value in local storage

    const [state, setState] = useState(() =>{
        let val;
        try{
           val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal)
            );
        }
        catch(e){
            val = defaultVal;
        }
        return val;
    });

    //use useEffect to update locl stoarge
     useEffect(()=>{
         window.localStorage.setItem(key, JSON.stringify(state));
     }, [state]);
     return [state, setState];
}
export default UseLocalStorageState;