import React from 'react';
import 'tachyons'

const Card = ({id, name, email}) => {
	return (
		<div title={`Robot Card ${id}`} className='bg-light-green dib br5 pa3 ma2 grow bw2 shadow-5'>
			<img alt='{id}' src={`https://robohash.org/${id}`} />
			<a href='https://www.apple.com/' target='_blank'><h2>{name}</h2></a>
			<p>{email}</p>
		</div>	
	);
}

export default Card;