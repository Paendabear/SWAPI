import React, { Component } from 'react';
import './App.css';
import Search from './Search/Search';
import Cards from './Card/Card';
import SearchContext from './SearchContext';
import API from './API';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: [],
      error:null,
      oop: false,
      loading: false,
      qType: 'people',
      search: '',     
    
  }
}

static contextType = SearchContext;
  handleFormChange = (e) => {
  
    const {name, value} = e.target;

    if(value === " " && this.state[name] ===""){
      this.setState({error: 'Cannot begin with spaces'});
      return 
    }  else {
    this.setState({
      [name]: value,
      error: '',
    })
  }
}

  handleSearch = (e, data) =>{
    e.preventDefault()
    this.setState({loading:true})

    API.apiGet(data.qType,data.search)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(datum => {
      


        const cards = API.formatResults(data.qType,datum);
        this.setState({
          cards:cards,
          loading:false
      })
      if(this.state.cards.length === 0) {
        this.setState({oop: true});
      }else{
        this.setState({oop: false})
      }
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }



  render() {

    const contextValue = {
      search: this.state.search,
      qType: this.state.qType,
      handleSearch : this.handleSearch,
      handleFormChange: this.handleFormChange,
      error: this.state.error,
      loadState:this.state.loading,
      cards:this.state.cards
    }

    const errorMessage = this.state.error ? <div>{this.state.error}</div> : false
    const loadMessage = this.state.loading ? <div>loading</div> : false 
    const oops = (this.state.oop) ? <div>OOPs please try another</div> : false;
    return (


    <SearchContext.Provider value={contextValue}>
      <div className="App">
        <header>
          <h1>Star Wars Search</h1>
        </header> 
        <Search />
          {errorMessage}
          {loadMessage}
          {oops}
        <ul className="books-list">
          <Cards />
        </ul>
  
      </div>
    </SearchContext.Provider>
      
    );
  }
}

export default App;
