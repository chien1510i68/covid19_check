import React from 'react';
import { Link } from 'react-router-dom';


export default function FooterPage() {
    return (
        <div className=' w-full min-h-[386px] bg-[#23232C]  p-3'>
            <div className='max-w-[1250px]  m-auto justify-center items-center' >
                <div className=" uppercase pt-4 font-inter font-bold text-tahiti-200 tablet:text-5xl md:text-7xl  lg:text-9xl ">
                    <div className=''>
                        discoveries
                    </div>
                    <div className="tablet:ml-[100px] ml-[400px]">
                        Covid-19
                    </div>
                </div>
                <div className=' tablet:flex-col md:flex-col  lg:flex justify-between tablet:mt-auto md:mt-[-140px] lg:mt-[-200px]'>
                    <div>
                        <ul className='tablet:flex-col tablet:mb-5 tablet:text-xs uppercase font-inter text-base  text-[#FFFFFF]  opacity-70 flex gap-5 '>
                            <li>
                                <Link to='/'>
                                    Discoveries
                                </Link>
                            </li>
                            <li>
                                <Link to='/CoronaVirus'>
                                    CoronaVirus
                                </Link>
                            </li>
                            <li>
                                <Link to='/Vaccines'>
                                    Vaccines
                                </Link>
                            </li>
                            <li>
                                <Link to='/Health'>
                                    Health
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className=' font-inria  text-xs text-[#FFFFFF]  font-light opacity-70 max-w-[640px] '>
                        <h4 className=' font-inter text-base uppercase  mb-6'>Quote from the source</h4>
                        <ul className=' flex  mb-6 gap-5'>
                            <li className=' max-w-xs'>
                            Hannah Ritchie, Edouard Mathieu, Lucas Rodés-Guirao, Cameron Appel, Charlie Giattino, Esteban Ortiz-Ospina, Joe Hasell, Bobbie Macdonald, Diana Beltekian và Max Roser (2020) - "Đại dịch Coronavirus (COVID-19)". Được xuất bản trực tuyến tại OurWorldInData.org. Lấy ra từ: <a href="https://ourworldindata.org/coronavirus">  'https://ourworldindata.org/coronavirus' [Online Resource]</a>
                            </li>
                            <li className='max-w-xs'>
                            Trích dẫn đề xuất: Bảng điều khiển COVID-19 của WHO. Geneva: Tổ chức Y tế Thế giới, 2020. Có sẵn trực tuyến:  <a href=" https://covid19.who.int/"> https://covid19.who.int/</a>
                            </li>
                        </ul>
                        <ul className=' '>
                            <li className=''>
                                VACCOVID.LIVE là một trang web theo dõi Vaccine cập nhật toàn diện, theo dõi COVID-19 và trang web theo dõi Điều trị đã được hạ cánh để thông báo cho mọi người trên khắp hành tinh về đại dịch coronavirus (COVID-19) mới hiện nay. Trong VACCOVID, bạn cũng có thể tìm thấy những tin tức liên quan và cập nhật nhất về covid-19. <a href="https://vaccovid.live/">https://vaccovid.live/</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
