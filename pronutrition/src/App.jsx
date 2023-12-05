import { Component } from 'react'
import './App.css'
import FoodBox from './components/FoodBox'
import FoodData from './components/FoodData'
import Search from './components/Search';

class App extends Component {
  constructor(){
    super();
    this.state = {
      search:"",
      count:0
    }
  }

  handleSearch = (info) => {
    this.setState({search:info})
  }

  //to manage count of food items
  // handleCount = (value) =>{
  //   this.setState({count:value})
  // }

  render() {

    return (
      <>
      <div>
        <Search handleSearch={this.handleSearch} />

        {/* <div id="search">
          <h3>Search</h3>
        <input type="text" placeholder='Enter Something' 
        onChange={(e) => this.setState({search:e.target.value})}/>
        </div> */}

        {FoodData.filter((el)=>{

            if(this.state.search==""){
              return el
            }
            else if(el.name.toLowerCase().includes(this.state.search.toLowerCase())){
              return el
            }
          }).map((el)=>{
         return <div key={el.id}>
             <FoodBox food={el} count={this.state.count} handleSearch={this.handleSearch}/>
          </div>
        })}
      </div>
      </>
    )
  }
}



export default App

