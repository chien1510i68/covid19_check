import React, { useMemo } from 'react'

function CircleMap({ report }) {
    const boxitem = useMemo(() => {
        if (report && report.length) {
            const latestData = report[report.length - 1];
            return [
                {
                    count1: latestData.cases.total,
                    type: 'confirmed',
                },
                {
                    count2: latestData.cases.recovered,
                    type: 'recovered',
                },
                {
                    count3: latestData.deaths.total,
                    type: 'death',
                },
            ];
        }
        return [];
    }, [report]);

    return (
        <div className=' font-inter font-medium text-[#3C4E66]  items-center justify-center mt-14 '>
            <div className='flex justify-between'>
                <div className=' '>
                    <h5 className=' '>
                        Tổng số ca nhiễm trùng
                        <br />
                        {
                            boxitem.map((data, id) =>
                            (
                                <span key={id} className="text-[#286DA8] text-4xl font-black">
                                    {data.count1}
                                </span>
                            ))

                        }
                    </h5>
                </div>
                <div className=''>
                    <h5 className=' '>
                        Số người chết
                        <br />
                        {
                            boxitem.map((data, id) =>
                            (
                                <span key={id} className="text-[#D75F24] text-4xl font-black">
                                    {data.count3}
                                </span>
                            ))

                        }
                    </h5>
                </div>
            </div>
            <div className='mt-10'>
                <h5 className=' '>
                    Số lần khôi phục
                    <br />
                    {
                        boxitem.map((data, id) =>
                        (
                            <span key={id} className='text-[#7BB224] text-4xl font-black'>
                                {data.count2}
                            </span>
                        ))

                    }
                </h5>
            </div>

        </div>
    )
}

export default CircleMap
