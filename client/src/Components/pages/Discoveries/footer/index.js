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
                            Hannah Ritchie, Edouard Mathieu, Lucas Rod??s-Guirao, Cameron Appel, Charlie Giattino, Esteban Ortiz-Ospina, Joe Hasell, Bobbie Macdonald, Diana Beltekian v?? Max Roser (2020) - "?????i d???ch Coronavirus (COVID-19)". ???????c xu???t b???n tr???c tuy???n t???i OurWorldInData.org. L???y ra t???: <a href="https://ourworldindata.org/coronavirus">  'https://ourworldindata.org/coronavirus' [Online Resource]</a>
                            </li>
                            <li className='max-w-xs'>
                            Tr??ch d???n ????? xu???t: B???ng ??i???u khi???n COVID-19 c???a WHO. Geneva: T??? ch???c Y t??? Th??? gi???i, 2020. C?? s???n tr???c tuy???n:  <a href=" https://covid19.who.int/"> https://covid19.who.int/</a>
                            </li>
                        </ul>
                        <ul className=' '>
                            <li className=''>
                                VACCOVID.LIVE l?? m???t trang web theo d??i Vaccine c???p nh???t to??n di???n, theo d??i COVID-19 v?? trang web theo d??i ??i???u tr??? ???? ???????c h??? c??nh ????? th??ng b??o cho m???i ng?????i tr??n kh???p h??nh tinh v??? ?????i d???ch coronavirus (COVID-19) m???i hi???n nay. Trong VACCOVID, b???n c??ng c?? th??? t??m th???y nh???ng tin t???c li??n quan v?? c???p nh???t nh???t v??? covid-19. <a href="https://vaccovid.live/">https://vaccovid.live/</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
