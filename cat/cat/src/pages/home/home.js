import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "./home.css"


function Home() {
  const [cats, setCats] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isSearched, setisSearched] = useState(false);

  useEffect(() => {

   


    const fetchData = async () => {
      try {
        const res = await fetch("https://api.thecatapi.com/v1/breeds");
        const data = await res.json()
        setCats(data)


      } catch (e) {
      }
      setisSearched(false);
    }

    fetchData()


  }, [])

  const changeController =  (e)=>{
    setSearchValue(e.target.value)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    
   
      try {
        const res = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchValue}`);
        const data = await res.json()
        setCats(data)
        setisSearched(true);
        console.log(searchValue)
      } catch (e) {
  
      }
    
  }
  return (

    <>
      {!cats ? (<h1 id='title' className='flex items-center justify-center text-slate-900 text-center text-3xl px-5 py-5 h-screen font-semibold'>Loading..</h1>)
        : (
          <section className='p-8 max-w-6xl mx-auto'>
            <>
              <h1 id='title' className='flex items-center justify-center  text-center  text-3xl px-5 py-1 font-semibold' > Cat Info App </h1>
              <from onSubmit={ handleSubmit}  className="flex items-center justify-center py-2" >
                <input   value={searchValue}    onChange={changeController}   type="text" className=' bg-gray-300 py-2 px-16 rounded' name='Search ' placeholder='Search a Cat Breed...' />
                <button type='submit' onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r"
      >
        Submit
      </button>
              </from>
            </>
            <>
          

              <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {!isSearched ? cats.map((cat) => {

                  return <div>
                    <div className="max-w-sm rounded w-full m-4 object-fit bg-slate-700  overflow-hidden shadow-lg">
                      <Link to={`/${cat.name}`} key={cat.id}>
                        <img loading='lazy' className="duration-200 hover:opacity-80 w-full object-cover h-56" src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`} alt={cat.id} />
                      </Link>
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{cat.name}</div>

                      </div>
                      <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">from: {cat.origin}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">exp. life span: {cat.life_span}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ }</span>
                      </div>
                      <div className='duration-200 p-4 flex  justify-center text-gray-300 hover:text-blue-300'>Wikipedia : <a className='px-1' href={cat.wikipedia_url}>{cat.name}</a></div>
                    </div>

                  </div>
                }) : cats.map((cat) => {
                  return <>
                    <div className="max-w-sm rounded w-full m-4 object-fit bg-slate-100  overflow-hidden shadow-lg">
                      <Link to={`/${cat.name}`} key={cat.id}>
                        <img loading='lazy' className="duration-200 hover:opacity-80 w-full object-cover h-56" src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`} alt={cat.id} />
                      </Link>
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{cat.name}</div>

                      </div>
                      <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">From: {cat.origin}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Expected life span: {cat.life_span +" years"}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ }</span>
                      </div>
                      <div className='duration-200 p-4 flex  justify-center text-gray-300 hover:text-blue-300'>Wikipedia : <a className='px-1' href={cat.wikipedia_url}>{cat.name}</a></div>
                    </div>
                  </>
                })}

              </div>
            </>
          </section>
        )
      }
    </>
    
  )
  
}


export default Home
