import { useEffect, useRef } from 'react';
import { useLocalStorage } from './../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';
import './style.css';

import sun from "./sun.svg";
import moon from "./moon.svg";

const BtnDarkMode = () => {

	//React состояние, при своем изменении перезаписывает local storage
	const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

	//добавляем ref к кнопке переключения dark mode 
	const btnRef = useRef(null)

	//добавляем класс dark, если значение darkMode = 'dark' и убираем, если не равно 'dark' (равно 'light')
	useEffect(() => {
		if (darkMode === 'dark') {
			document.body.classList.add('dark'); //добавляем класс 'dark' тегу body
			btnRef.current.classList.add('dark-mode-btn--active'); //добавляем класс 'dark-mode-btn--active' тегу кнопке переключения dark mode
		} else {
			document.body.classList.remove('dark');//удаляем класс 'dark' у тега body
			btnRef.current.classList.remove('dark-mode-btn--active');//удаляем класс 'dark-mode-btn--active' у кнопки переключения dark mode
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode((currentValue) => {
			return currentValue === 'light' ? 'dark' : 'light';
		});
	}

	return ( 
		//вешаем ref на кнопку
		<button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
			<img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
			<img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
		</button>
	 );
}
 
export default BtnDarkMode;