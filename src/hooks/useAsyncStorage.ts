import {useState, useEffect} from "react";
import {AsyncStorage} from 'react-native';


const useAsyncStorage = (key: string, initialValue?: any) => {
    const [storedValue, setStoredValue] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem(key)
            .then(value => {
                if (value === null) return initialValue;
                return JSON.parse(value);
            })
            .then(res => {
                setStoredValue(res);
                setIsLoading(false);
            })
    }, [key, initialValue]);

    const setValue = (value: any) => {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        AsyncStorage.setItem(key, JSON.stringify(valueToStore)).then();
    };

    return [storedValue, setValue, isLoading];
};

export default useAsyncStorage;
