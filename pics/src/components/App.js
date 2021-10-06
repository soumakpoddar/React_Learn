import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
    state={images:[]};

    //getting the data from child and fetch data from API...
    async onSearchSubmit(term){
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{query: term},
            headers:{
                Authorization: 'Client-ID 45CSR48f06BI1zaaoKoHs0ZxDCkSgy-Toy99jNvXNaM'
            }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found {this.state.images.length} images
            </div>
        )
    }
}

export default App;