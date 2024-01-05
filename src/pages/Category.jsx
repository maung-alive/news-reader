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

function CategoryItem({ img, title, description, author, date }) {
    return (
        <div className="cursor-pointer w-full h-[10rem] md:h-[30rem] bg-slate-100 flex flex-row md:flex-col gap-x-2 overflow-hidden duration-200 md:hover:scale-95 hover:shadow-lg">
            <img src={img} alt={title} className='w-36 md:w-full h-full md:h-[15rem] object-cover' />
            <div className='p-2'>
                <p className="text-xl font-medium hover:text-blue-600 active:text-red-600">{title}</p>
                <p className="text-xs py-2">
                    <span className="text-red-600">{author}</span> - <span className="text-gray-900">{new Date().toDateString()}</span>
                </p>
                <p className="text-sm">{description}</p>
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

        <div className="w-full md:px-10 mx-auto mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <CategoryItem
                img="https://www.brookings.edu/wp-content/uploads/2021/01/shutterstock_1558058690_small.jpg"
                title={`Fuckin Stars!!!`}
                description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id doloremque dolore ad ipsam quam facere deleniti eos. Aut ad officiis hic labore fugit autem doloremque molestias?`}
                author={`Maung`}
                date={new Date()}
            />
            <CategoryItem
                img="https://www.brookings.edu/wp-content/uploads/2021/01/shutterstock_1558058690_small.jpg"
                title={`Fuckin Stars!!!`}
                description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id doloremque dolore ad ipsam quam facere deleniti eos. Aut ad officiis hic labore fugit autem doloremque molestias?`}
                author={`Maung`}
                date={new Date()}
            />
            <CategoryItem
                img="https://www.brookings.edu/wp-content/uploads/2021/01/shutterstock_1558058690_small.jpg"
                title={`Fuckin Stars!!!`}
                description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id doloremque dolore ad ipsam quam facere deleniti eos. Aut ad officiis hic labore fugit autem doloremque molestias?`}
                author={`Maung`}
                date={new Date()}
            />
            <CategoryItem
                img="https://www.brookings.edu/wp-content/uploads/2021/01/shutterstock_1558058690_small.jpg"
                title={`Fuckin Stars!!!`}
                description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id doloremque dolore ad ipsam quam facere deleniti eos. Aut ad officiis hic labore fugit autem doloremque molestias?`}
                author={`Maung`}
                date={new Date()}
            />
            <CategoryItem
                img="https://www.brookings.edu/wp-content/uploads/2021/01/shutterstock_1558058690_small.jpg"
                title={`Fuckin Stars!!!`}
                description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id doloremque dolore ad ipsam quam facere deleniti eos. Aut ad officiis hic labore fugit autem doloremque molestias?`}
                author={`Maung`}
                date={new Date()}
            />
            <CategoryItem
                img="https://www.brookings.edu/wp-content/uploads/2021/01/shutterstock_1558058690_small.jpg"
                title={`Fuckin Stars!!!`}
                description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id doloremque dolore ad ipsam quam facere deleniti eos. Aut ad officiis hic labore fugit autem doloremque molestias?`}
                author={`Maung`}
                date={new Date()}
            />
        </div>

    </>
  )
}
