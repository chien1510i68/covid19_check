
import React, { useMemo } from 'react'
import Vaccine from '../../../file/Images/Vaccine.png'

function DataVaccinesWorld({ vaccine }) {

    let getDataWorld = [];
    for (let i = 0; i < vaccine.length; i++) {

        if (vaccine[i].country === "World") {

            getDataWorld.push(vaccine[i].data);

        }

    }

    // console.log('da', getDataWorld);
    const lastItem = getDataWorld[getDataWorld.length - 1];
    // console.log('r', lastItem);

    const boxitem = useMemo(() => {
        if (lastItem && lastItem.length) {
            const latestData = lastItem[lastItem.length - 1];
            return [
                {
                    count: latestData.people_vaccinated_per_hundred,
                    type: 'people_vaccinated_per_hundred'
                },
                {
                    count1: latestData.total_vaccinations,
                    type: 'total_vaccinations'
                },

            ];
        }
        return [];
    }, [lastItem]);
    // console.log('r', boxitem);
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h2 className=' max-w-[650px]  relative float-right  font-inter font-semibold text-3xl  text-tahiti-100 uppercase ' >
                        Thế giới của chúng ta trong dữ liệu tiêm chủng COVID
                    </h2>

                </div>
                <div>
                    <p className=' font-inter ext-lg font-semibold relative float-right  text-tahiti-100 max-w-[500px] m-auto  uppercase mb-10 '>
                        Trong vòng chưa đầy 12 tháng sau khi bắt đầu đại dịch, một số nhóm nghiên cứu đã vượt qua thử thách và phát triển vắc xin bảo vệ khỏi SARS-CoV-2.    <br />
                        <br />
                        Bây giờ thách thức là làm cho những loại vắc xin này có sẵn cho mọi người trên thế giới. Điều quan trọng là mọi người ở tất cả các quốc gia - không chỉ ở các quốc gia giàu có - nhận được sự bảo vệ cần thiết.
                    </p>
                    <div className=''>
                        <div className=' mt-3'>
                            <h2 className="text-[#286DA8] tablet:text-4xl lg:text-6xl  font-inter font-semibold ">
                                {
                                    boxitem.map((item, res) => {
                                        return <span key={res} >
                                            {item.count}
                                        </span>
                                    })
                                }
                                {'%'}
                            </h2>
                            <h3 className=' font-inter tablet:sm md:text-base lg:text-xl max-w-[400px]'>
                                Dân số thế giới đã nhận được ít nhất một liều vắc-xin COVID-19.
                            </h3>
                        </div>
                        <div className='mt-8'>
                            <h2 className="text-[#286DA8] tablet:text-4xl lg:text-6xl font-inter font-semibold">

                                {
                                    boxitem.map((res, item) => {
                                        return <span key={item}>
                                            {res.count1}
                                        </span>
                                    })
                                }
                            </h2>
                            <h3 className=' font-inter tablet:sm md:text-base lg:text-xl max-w-[400px] tablet:mb-8'>
                                Liều lượng đã được quản lý trên toàn cầu
                            </h3>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default DataVaccinesWorld
