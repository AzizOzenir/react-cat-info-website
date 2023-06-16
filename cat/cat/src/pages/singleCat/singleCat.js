import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import LevelIndicator from '../../components/levelIndicator.js';

function SingleCat() {
    const [cat, setCat] = useState({});
    const { name } = useParams();


    useEffect(() => {
        const fetchDataOfCat = async () => {
            try {
                const res = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${name}`);
                const data = await res.json();

console.log(data[0])

                setCat(data[0]);
            } catch (error) {
                console.log("error", error);
            }

        }

        fetchDataOfCat();

        console.log(cat);



    }, [])

    return (
        <>
            <div className='grid gap-6 p-6 grid-cols-1 xl:grid-cols-2 m-4  h-screen'>

                <img className="m-2 max-w-2xl w-full max-w-screen-1/2 rounded" src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`} alt={cat.id} />

                <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                
                    <LevelIndicator characteristic={"Affection Level"} level={cat.affection_level}/>
                    <LevelIndicator characteristic={"Adaptability Level"} level={cat.adaptability}/>
                    <LevelIndicator characteristic={"Child Friendly"} level={cat.child_friendly}/>
                    <LevelIndicator characteristic={"Dog Friendly"} level={cat.dog_friendly}/>
                    <LevelIndicator characteristic={"Health Issues"} level={cat.health_issues}/>
                    <LevelIndicator characteristic={"Intelligence"} level={cat.intelligence}/>
                    <LevelIndicator characteristic={"Shedding Level"} level={cat.shedding_level}/>
                    <LevelIndicator characteristic={"Social Needs"} level={cat.social_needs}/>
                    <LevelIndicator characteristic={"Stranger Friendly"} level={cat.stranger_friendly}/>
                    <LevelIndicator characteristic={"Vocalisation"} level={cat.vocalisation}/>
                </ul>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Origin: {cat.origin}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Life Expectancy: {cat.life_span + " years"}</span>
                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> {cat.description}</span>






                <Link to="/">
                    <button type="button" class="py-2.5 w-40 h-12  px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" >Go Back</button>
                </Link>
            </div>
        </>
    )
}

export default SingleCat