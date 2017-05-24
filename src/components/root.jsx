import React from 'react';
import text from '../titles';
import '../styles/base/reset';
import '../styles/layout/grid';
import '../styles/components/buttons';

const Root = () =>{
	return(
		<div className="grid-holder">
			<button className="box column-6">{text.hello}</button>
			<button className="box column-6">{text.goodbye}</button>
			<button className="box column-12">{text.nope.stuff.onetype[0].name}</button>
		</div>
	)
}

export default Root;