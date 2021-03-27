import React from 'react';

class GifSearch extends React.Component {

  state = {
    query: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleFetch(this.state.query)
  }

  render() {
    return <form onSubmit={this.handleSubmit}>

      <input
      type='text'
      className='searchValue'
      onChange={event => this.setState({query: event.target.value}) } value={this.state.query}
      /> Search Gifs
    </form>
  }

}

export default GifSearch;
