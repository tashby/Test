import React from 'react';

class ContactsList extends React.Component {
    render() {
        return ( 
            <ul>
                 <li>{this.props.contacts.name} {this.props.contacts.phone}</li>
            </ul>

            <div></div>
            <h1>
            <h2> [this.props.contacts.name]
            )
    }
}

export default ContactsList;