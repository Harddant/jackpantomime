import React from 'react'

export const VideoCard = ({ youtubeLink, key }) => {
  return (
    <div key={key} className='flex justify-center mt-6 mb-6 mx-5 aspect-w-16 aspect-h-9'>
        <iframe className='rounded-3xl' src={youtubeLink.url} frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>
        {/* <p className='flex'>{youtubeLink.name}</p> */}
    </div>
    
  )
}
