import React, { Component } from 'react'
import SwiftSlider from 'react-swift-slider'

const data = [
	{ 'id': '1', 'src': 'images/slider-bg-1.jpg' },
	{ 'id': '2', 'src': 'images/slider-bg-2.jpg' },
	{ 'id': '3', 'src': 'images/slider-bg-3.jpg' },
];
export default class Slider extends Component {
	render() {
		return (
			<div className="slider-container">
				<SwiftSlider data={data} height={400} />
			</div>
		)
	}
}
