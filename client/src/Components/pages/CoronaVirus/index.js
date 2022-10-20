import React from 'react'
import Header from './header'
import BackgroundImage from '../../file/Images/khang-the-troi-cho-trungquoc-omicron-2022-02-04-15-05.jpg'
import CountriesUI from '../../countriesUI'
import TableCoronaVirus from '../../table/TableCoronaVirus'
import FooterPages from '../../footer'

export default function CoronaVirus() {
  return (
    < >
      <div className='max-w-[1250px]  m-auto justify-center items-center'>
        <img src={BackgroundImage} alt="" className=' tablet:p-3 md:p-3 lg:p-0 tablet:w-[100%] tablet:h-[100%] md:w-[100%] md:h-[100%] lg:w-[1250px] lg:h-[646px] rounded-3xl object-cover ' />
        <Header />
      </div>
      <div className=' w-[100%] '>
      </div>
      <div className='max-w-[1250px] tablet:p-3 md:p-3 m-auto justify-center items-center mt-8 text-tahiti-100'>
        <div className=' lg:flex'>
          <h2 className=' max-w-[650px]  relative float-right  font-inter font-semibold text-3xl  text-tahiti-100 uppercase ' >
            Khám phá dữ liệu toàn cầu về nhiễm trùng và tử vong do Covid-19
          </h2>
          <p className='font-inter ext-lg font-semibold relative float-right  text-tahiti-100 max-w-[500px] m-auto  uppercase '>
            Trang này có một số lượng lớn các biểu đồ về đại dịch. Trong hộp bên dưới, bạn có thể chọn bất kỳ quốc gia nào bạn quan tâm -
            hoặc một số quốc gia, nếu bạn muốn so sánh các quốc gia.
            <br />
            <br />
            Tất cả các biểu đồ trên trang này sau đó sẽ hiển thị dữ liệu cho các quốc gia mà bạn đã chọn.</p>
        </div>
        <div className='pt-[50px] '>
          <h2 className=' max-w-[500px] mb-8   font-inter font-semibold text-3xl  uppercase' >
            Chọn quốc gia để hiển thị
            trong tất cả các biểu đồ
          </h2>
        </div>
        <CountriesUI />
        <TableCoronaVirus />
        <FooterPages />
      </div>
    </>
  )
}
