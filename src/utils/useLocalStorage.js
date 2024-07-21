import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) {
	// getting stored value
	const saved = localStorage.getItem(key);
	const initial = JSON.parse(saved);
	return initial || defaultValue; //возвращает распарсенное значение local storage или дефолтное значение, если там undefined
}

//кастомный хук useLocalStorage - возвращает значение, записанное в local storage либо default значение, если в local storage indefined
export const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	//useEffect сработает при запуске компонента и изменении key или value
	useEffect(() => {
		// storing input name
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
