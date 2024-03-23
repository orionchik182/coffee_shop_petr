import './filter.scss';

const Filter = () => {
	return (
		<div className='filter'>
			<label htmlFor="name">Looking for</label>
			<input className='filter__input' type="text" id='name' placeholder='start typing here..'/>
			<p>Or filter</p>
			<ul className='filter__buttons'>				
				<li><button className='button button-filter'>Brazil</button></li>
				<li><button className='button button-filter'>Kenya</button></li>
				<li><button className='button button-filter'>Columbia</button></li>
			</ul>
		</div>
	)
}

export default Filter