import React from 'react';
import walk from '../../assets/images/walk.jpeg';
import disk from '../../assets/images/disk.jpeg';
import './ImgSectionOne.css';

const ImgSectionOne = () => {
	return (
		<div class='ISO-container'>
			<div></div>
			<div class='yellow-box'>
				<img class='img-one' src={walk} />
				<img class='img-two' src={disk} />
			</div>
		</div>
	);
};

export default ImgSectionOne;
