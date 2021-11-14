import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';
import WarningSign from './components/WarningSign';
import scifiBooks from './scifiBooks.json'


function App() {
  return (
    <div className = "App"> 
      <header className =  "App-header">
        <WarningSign text = "WARNING"/>
        <MyBadge text= "NEW" color="info"></MyBadge>
        <SingleBook book ={scifiBooks[0]}/>
        <BookList books = {scifiBooks} />
      </header>
    </div>
  )
}

export default App;
