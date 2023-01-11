import React from 'react'
import './SearchStyle.css'
import gold from '../../assest/gold.jpg'
const Searchs = () => {
  return (
    <div name="books" className='search'>
        <div className='Container'>
            <div className='left'>
                <h1> my favorite travel</h1>
                <p> I want to travel lalibel for every year because
                     lalibela is one if the oldest castel  and it is asprtual life take place 
                    in orthodx tewahdo in ethiopia so am an orthodox person so go lalibela
                    by the way ethiopia has many huge or many heritage and cherche around there ..so that by 
                    every thing is smart in ethiopia by nature but the people is affected by other part of the world
                    </p>
            <div className='search-col-2'>
            <div className='box'>
                <div>
                <img src={gold}alt='/' style={{marginRight:'1rem'}}/>
                </div>
                <div>
                    <h3>world leading</h3>
                    <p>All inclusive company for 20 years in in a row</p>
                </div>
            </div>
            <div className='box'>
                <div>
                    <h3> No one includes more</h3>  
                    <p>All-inclusive company for  20 years in a row</p>
                    <button className='bu'>view packages</button>
                </div>
            </div>

            </div>
            </div>
            
            
            <div className='right'>
                <div className='proms'>
                    <h4 className='save'> get an additional  7% offer </h4>
                    <p className='timer'>12 hours leffet</p>
                    <p className='offers'>View all current offers</p>
                </div>
                <form className='form'>
                    <div className='input-wrap'>
                        <label>destination</label>
                        <select>
                            <option value={1}>lalibela</option>
                            <option value={1}>lake tena</option>
                            <option value={1}>gonder</option>
                            <option value={1}>gshen mariam</option>
                            <option value={1}>zurababa</option>
                            <option value={1}>langano</option>
                        </select>
                    </div>
                    <div className='date'>
                        <div className='input-wrap'>
                            <label>check-input</label>
                            <input type='date'/>
                        </div>
                        <div className='input-wrap'>
                            <label>check-out</label>
                            <input type='date'/>
                        </div>
                    </div>
                    <button className='bu'>rates & availability</button>
                </form>
            </div>
            

            </div>
        </div>
      
    
  )
}

export default Searchs
