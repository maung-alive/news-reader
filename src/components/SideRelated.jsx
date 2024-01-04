import React from 'react'

export default function SideRelated() {
  return (
    <>    
        <p className="text-2xl font-medium pb-4">Related</p>

        <div className="w-full h-20 flex cursor-pointer">
            <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiviQL2b0_ZKJdSKQ8cyKPSKh7FLULEJBNgJliL_BrgvNK8TPDxTFSOU7VPfvQTJCu0Fl_PfYd1B0532LhK84369dh_7NO4OOFJLOVuBhGGrhTVla6tWioIeRfRf-Vp5pGBl7pzIvfh3SkgeXd87Up3lTtE0__Hdw15CuqHuZGDHgobWY4M1imVDuC88_E/w72-h72-p-k-no-nu/pentera.jpg"
                alt="Blah Blah"
                className='h-full w-auto rounded-md object-cover'
            />
            <p className="hover:text-blue-600 text-md font-bold pl-2">
                Why Defenders Should Embrace a Hacker Mindset
            </p>
        </div>
    </>
  )
}
