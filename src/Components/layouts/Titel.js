import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14" style={{marginLeft:40}}>
      <h3 className="text-sm uppercase font-light text-blue-700 tracking-wide">
       {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-gray-900 font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title