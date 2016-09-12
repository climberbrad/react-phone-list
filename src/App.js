import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [{
	id: 1,
	name: 'brad',
	phone: '720-233-1969'
},
{
	id: 2,
	name: 'chica',
	phone: '720-233-1993'
},
{
	id: 3,
	name: 'eva',
	phone: '720-233-2009'
}]

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Contacts List</h1>
				<ContactsList contacts={this.props.contacts} />
			</div>
			)
	}
}

render(<App contacts={contacts}/>, document.getElementById('app'));