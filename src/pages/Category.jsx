import React from 'react'

function CategoryName({ img, title, description }) {
    return (
        <div className='w-full h-[400px] bg-cover bg-center relative z-50' style={{
            backgroundImage: `url("${img}")`
        }}>
            <div className="w-[350px] md:w-full md:max-w-2xl absolute bottom-3 md:bottom-5 left-3 p-5 bg-[rgba(255,255,255,0.2)] text-white rounded-xl">
                <p className="pb-5 text-2xl md:text-3xl font-bold">{title}</p>
                <p className="leading-6 md:leading-7 text-sm md:text-base">{description}</p>
            </div>
        </div>
    )
}

export default function Category() {
  return (
    <>
        <CategoryName
            img={`https://www.brookings.edu/wp-content/uploads/2021/01/shutterstock_1558058690_small.jpg`}
            title={`Space & Stars`}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id doloremque dolore ad ipsam quam facere deleniti eos. Aut ad officiis hic labore fugit autem doloremque molestias? Omnis, iste at.`}
        />
    </>
  )
}
