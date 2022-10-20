import React from 'react'

export default function Header() {
    return (
        <div className=' tablet:p-3 md:p-5 lg:p-0'>
            <div className="uppercase pt-4 font-inter font-bold text-tahiti-100 tablet:text-4xl md:text-7xl lg:text-8xl  ">
                <div>
                    coronavirus
                </div>
                <div >
                    News <span className=' font-inria'>V.1</span>
                </div>
            </div>
        </div>
    )
}
