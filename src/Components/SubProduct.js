import React, { PureComponent } from 'react';

class SubProduct extends PureComponent {
  render() {
    return (
      <> 
       { this.props.children }
      </>
    )
  }

}

export default SubProduct
