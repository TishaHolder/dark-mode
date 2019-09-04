import React from "react";
import {useState} from "react";

function useLocalStorage(key, initialValue) {
    
    // To retrieve an item from localStorage, call localStorage.getItem('itemName')
    // If that item doesn't exist, it will return undefined
    const [storedValue, setStoredValue] = useState(() => {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
     });

     const setValue = (value) => {
         setStoredValue (value);
         window.localStorage.setItem(key, JSON.stringify (value));
     }

     return [storedValue, setValue];

}

export default useLocalStorage;