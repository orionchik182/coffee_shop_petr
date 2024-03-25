import './filter.scss';
import { useState} from 'react';

const Filter = (props) => {

		const [input, setInput] = useState('');			
	

	const handleInputChange =  (event) => {
		setInput(input => event.target.value)
			
	}

	const handleButtonClick = (event) => {
		const filterValue = event.target.innerText === "All" ? "" : event.target.innerText;		
		props.addFilterCountry(filterValue)
	}

	props.addFilterInput(input)		


	return (
		<div className='filter'>
			<label htmlFor="name">Looking for</label>
			<input 
				className='filter__input'				
				onChange={handleInputChange} 
				type="text" id='name' 
				placeholder='start typing here..'/>
			<p>Or filter</p>
			<ul className='filter__buttons'>				
				<li><button onClick={handleButtonClick} className='button button-filter'>Brazil</button></li>
				<li><button onClick={handleButtonClick} className='button button-filter'>Kenya</button></li>
				<li><button onClick={handleButtonClick} className='button button-filter'>Columbia</button></li>
				<li><button onClick={handleButtonClick} className='button button-filter'>All</button></li>
			</ul>
		</div>
	)
}

export default Filter