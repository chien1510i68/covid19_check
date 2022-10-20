import React from 'react'

export default function Title() {
    return (
        <section className=''>

            <div className=" mb-10 ">
                <div className='  rounded-3xl  absolute  justify-center max-w-full tablet:relative md:relative'>
                    <img className=' tablet:w-[100%] tablet:h-[100%] md:w-[100%] md:h-[100%] lg:w-[1250px] lg:h-[646px] rounded-3xl object-cover' src="https://images.unsplash.com/photo-1597440658768-f3ffdf64223c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <div className='  tablet:w-full  absolute z-20  top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] m-auto justify-center items-center font-inter font-bold' >
                        <div className="tablet:w-full  tablet:text-2xl md:text-5xl lg:text-7xl text-[#3E3E3E] md:w-[700px] lg:w-[1000px] " >
                            <div className=" uppercase pt-4 font-inter font-bold text-tahiti-100  tablet:text-4xl md:text-7xl lg:text-9xl ">
                                <div className=''>
                                    discoveries
                                </div>
                                <div className="">
                                    Covid-19
                                </div>
                            </div>
                        </div>
                        <br />
                        <p className=' tablet:text-[10px]  tablet:leading-3 tablet:m-0 tablet:max-w-[250px] md:max-w-[500px] tablet:mr-6  lg:mr-0 relative w-[400px] text-right text-base text-[#3C4E66] float-right '>
                            Website này cập nhật liên tục tình hình dịch bệnh do coronavirus (COVID-19) gây ra
                            với tổng quan về các trường hợp và tử vong COVID-19 trên toàn cầu, cáp khu vực và quốc gia, làm nổi bật các dữ liệu và xu hướng quan trọng
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
