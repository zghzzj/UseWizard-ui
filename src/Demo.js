import React, { Component } from 'react';
import {Icon,ListGroup,ListGroupItem} from 'wizard-ui'
class Demo extends Component {
    state = {  }
    render() { 
        return ( <div >
            <Icon  type="object-storage" />
            <ListGroup>
                <ListGroupItem>Item 1</ListGroupItem>
                <ListGroupItem>Item 2</ListGroupItem>
                <ListGroupItem>...</ListGroupItem>
            </ListGroup>
            </div> );
    }
}
 
export default Demo;