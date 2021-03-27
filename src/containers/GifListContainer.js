import React from 'react';
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'


class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  handleFetch = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=8ZAC3f9kIqv24WatSNXknfRiif7gI1Et&rating=g`)
    .then(resp => resp.json())
    .then(({data}) => {
      this.setState({gifs: data.map(gif => ({url: gif.images.original.url}) )} )
    })
    // .then(res => res.json())
    //   .then(({data}) => {
    //     this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
    //   })
  }


  render() {
    return (
      <div>
        <GifSearch handleFetch={this.handleFetch}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

  componentDidMount() {
    this.handleFetch()
  }

}

export default GifListContainer;
