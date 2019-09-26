import React, { PureComponent } from 'react';

class Product extends PureComponent {
  render() {
    return (
      <>
        { this.props.children }
      </>
    )
  }

}

export default Product
