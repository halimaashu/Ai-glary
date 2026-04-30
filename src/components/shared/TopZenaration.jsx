import React from 'react'
import PhotoCard from './PhotoCard';

export default async function TopZenaration() {
    const res =await fetch ("https://ai-glary.vercel.app/data.json");
    const data= await res.json();
    console.log(data,"from all photos section");
    const topQuality=data.slice(0,8);
    console.log(topQuality)

  return (
    <div className=' py-20'>
      <h1 className='text-2xl font-bold '>Top Generation Photo</h1>
      <div className="grid grid-cols-4 gap-10">
        {
            topQuality.map(photo=><PhotoCard key={photo.id} photo={photo} ></PhotoCard> )
        }
      </div>
    </div>
  )
}
