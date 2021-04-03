import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
	return (
		<div className='cards'>
			<h1>Check out these EPIC Destinations!</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							//Link of image to be added
							src='/images/img-1.jpg'
							text="Explore superfast wash services at your doorstep!"
							label='Superfast'
							path='/services'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							//Link of image to be added
							src='/images/img-1.jpg'
							text="Get a deep clean wash for your car"
							label='Deep Clean'
							path='/services'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							//Link of image to be added
							src='/images/img-1.jpg'
							text="Get the dust out of interior and feather covers of seats"
							label='Vaccume clean'
							path='/services'
						/>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Cards
