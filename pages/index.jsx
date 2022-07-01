import React from 'react'

const index = ({ images }) => {
  console.log(images)
  return (
    <div className="w-screen min-h-screen bg-slate-900">
      <h4 className="text-slate-600 select-none text-4xl font-extrabold text-center pt-16">
        NextJS image-gallery
      </h4>
      <div className="mx-auto flex items-start justify-center flex-wrap w-max-[900px]  rounded-md w-[90%] p-6 mt-4 border-slate-600">
        {images.map((obj , i) => (
          <div  key={i} className="w-52 h-52 rounded-sm m-4 bg-gray-900 shadow-lg"></div>
        ))}
      </div>
    </div>
  )
}

export default index

export async function getStaticProps() {
  return {
    props: {
      images: [{}, {}, {}, {}, {}, {}, {}, {}],
    },
  }
}
