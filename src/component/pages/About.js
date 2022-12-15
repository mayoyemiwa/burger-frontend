import React, {useState} from 'react'
import '../../css/About.css'
import introduction from '../../images/introduction.png'

const About = () => {
    const [hide, setHide] = useState(false)
    return (
        <section className="mySection1">
        <div>
            <img src={introduction} alt="introduction"/>
        </div>
        <div style={{position:"relative"}} className="main-aside">
            <label>Natural</label>
            <h3><span>100% natural fresh<br/>ingredients</span></h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla accumsan, metus ultrices eleifend grav, nulla varius lectus.
            </p>
            <ul>
                <li>Nulla accumsan metus ultrices eleifend gravi nulla site.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit amet.</li>
                <li>Ornare vitae pulvinar hendrerit guis adipiscing</li>
            </ul>
            <span style={{cursor:"pointer"}} onMouseOver={()=>{setHide(true); console.log({hide})}} onMouseOut={()=>{setHide(false); console.log({hide})}} className="aboutUs">About Us</span>
            {hide && <span style={{color:"white", padding:"2px", backgroundColor:"grey", fontSize:'12px'}} >Just for development purpose</span>}
        </div>
    </section>
    )
}

export default About


import React, {useState} from 'react'

function Movieform({addList}) {
  const inputs = {name:'', ratings:'', duration:''}
  const [list, setList] = useState(inputs)
  const inputErr = {Name:'', ratings:'', duration:''}
  const [err, setErr] = useState(inputErr)
  const handleChange = (e) => {
    const {name, value} = e.target
    setList({...list, [name]:value})
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log('yeeeee')
    if(list.name.type !== 'String') setErr({...err, name:"name should be string"})
    else if(list.ratings.type !== 'Number') setErr({...err, ratings:"ratings should be string"})
    else if(list.duration.endsWith('m') || list.duration.endsWith('h')) setErr({...err, duration:"duration should include m or h"})
    else addList(list)
  }
  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={ handleSubmit }>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              name='name'
              value={list.name}
              onChange={handleChange}
              placeholder='Enter Movie Name'
              data-testid='nameInput'
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              name='ratings'
              value={list.ratings}
              onChange={handleChange}
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text'
              id='duration'
              name='duration'
              value={list.duration}
              onChange={handleChange}
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
            />
          </div>
          {/* Use this div when time format is invalid */}
          {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className='layout-row justify-content-end'>
            <button
              type='submit'
              className='mx-0'
              data-testid='addButton'
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform

import React from 'react'

function Movieslist({lists}) {
  console.log("me", lists )
  return (
    <section>
      {lists.map((list, i)=><ul key={i} 
        className='styled w-100 pl-0' 
        data-testid='moviesList'
      >
      <li 
        className='flex slide-up-fade-in justify-content-between'
        style={{borderBottom: '2px solid var(--primary-color)'}}
      >
        <div className='layout-column w-40'>
          {/* use this header for movie name */}
          <h3 className='my-3'>{list.name}</h3>
          {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
          <p className='my-0'>{list.ratings}</p>
        </div>
        <div className='layout-row my-auto mr-20'>
          {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
          <p className='justify-content-end'>{list.duration}</p>
        </div>
      </li>
      </ul>)}
      
    </section>
  )
}

export default Movieslist;

import React, {useState} from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

function App() {
  const [lists, setLists] = useState([]);
  const [searchLists, setSearchLists] = useState([]);

  const addList = (addlist) =>{
    console.log('you', addlist)
    const newList = [...lists, addlist];
    setLists(newList)
}
const addSearch = (lists) =>{
  console.log(lists)
}
  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform addList={addList}/>
        </div>
        <div className='layout-column w-30'>
          <Search lists={lists}addSearch={addSearch} />
          <Movieslist lists={lists}/> 
          <div data-testid='noResult'>
            <h3 className='text-center'>No Results Found</h3>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default App;

import React, {useState} from 'react'

function Search({lists, addSearch}) {
  const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    setSearch(e.target.value)
    addSearch(lists)
  }

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        name='search'
        value={search}
        conChange={handleSearch}
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        data-testid='search'
      />
    </section>
  )
}

export default Search

