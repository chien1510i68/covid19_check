import React, { useEffect } from 'react'
import { getWorldData } from '../../../../API';
import { sortBy } from 'lodash';
import { Box } from '@mui/material';
import Map from '../../../file/svg/WorldMap.svg'

export default function World() {

    const [world, setWorld] = React.useState([]);

    // World Data API 
    useEffect(() => {
        getWorldData().then((response) => {
            console.log('WorldData', response);
            const { data } = response;
            const world = sortBy(data);
            setWorld(world);
        });
    }, []);


    return (
        <Box className='font-inter w-2/3 bg-hero-pattern bg-cover bg-no-repeat'>
            <Box className=' tablet:p-0 tablet:pt-[20pt] tablet:min-h-[500px] lg:min-w-[100%] lg:min-h-[750px]   pt-28'>
                <div className=' tablet:flex-col flex justify-around items-center m-auto '>
                    <div className=' bg-[#E9E8EE] tablet:max-w-full tablet:max-h-[100px] w-[210px] h-[100px] relative rounded-[20px]'>
                        <div className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[260px] text-center tablet:text-[12px]'>
                            Tổng số ca nhiễm trùng
                            <h5>
                                {
                                    world.map(item => {
                                        return <span key={item} className='text-[#286DA8] tablet:text-2xl text-3xl'>
                                            {item.TotalCases}
                                        </span>
                                    })
                                }
                            </h5>
                        </div>
                    </div>
                    <div className=' bg-[#E9E8EE]  tablet:max-w-full tablet:max-h-[100px] w-[210px] h-[100px] relative rounded-[20px] mt-10'>
                        <div className=' tablet:text-[12px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[260px] text-center'>
                            Số người chết
                            <h5>
                                {
                                    world.map(item => {
                                        return <span key={item} className='text-[#D75F24] tablet:text-2xl  text-3xl'>
                                            {item.TotalDeaths}
                                        </span>
                                    })
                                }
                            </h5>
                        </div>
                    </div>
                </div>
                <div className=' bg-[#E9E8EE]  tablet:max-w-full tablet:max-h-[100px] w-[210px] h-[100px] relative rounded-[20px]  tablet:mt-10 md:mt-20 lg:mt-28 justify-around items-center m-auto '>
                    <div className='  tablet:text-[12px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[260px] text-center'>
                        Tổng số lần khôi phục
                        <h5>
                            {
                                world.map(item => {
                                    return <span key={item} className='text-[#7BB224] tablet:text-2xl text-3xl'>
                                        {item.TotalRecovered}
                                    </span>
                                })
                            }
                        </h5>
                    </div>
                </div>
            </Box>

        </Box>
    )
}
