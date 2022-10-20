import { Box, Grid } from '@mui/material'
import React, { useMemo } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    justifyContent: 'center',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 200,
    borderRadius: 16,

}));
function BoxCountry({ report }) {
    console.log("testdatareport", report);
    const boxitem = useMemo(() => {
        if (report && report.length) {
            const latestData = report[report.length - 1];
            return [
                {
                    count: latestData.cases.total,
                    span: latestData.cases.new,
                    type: 'total cases'
                },
                {
                    count1: latestData.deaths.total,
                    span1: latestData.deaths.new,
                    type: 'total deaths',
                },
                {
                    count2: latestData.cases.recovered,
                    type: 'recovered'
                },
                {
                    count3: latestData.cases.active,
                    type: 'active'
                },
            ]
        }
        return [];
    }, [report]);
    //console.log('r', boxitem);
    return (
        <Box sx={{ flexGrow: 2, }}>
            <Grid container spacing={2} columns={16}>
                <Grid item sm={4} xs={16} >
                    <Item>
                        <div className=' w-full  h-4 rounded-t-2xl bg-[#EF4444]'>
                        </div>
                        <div className='relative '>
                            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] w-full justify-center'>
                                <div>
                                    <h2 className=' font-inter font-semibold tablet:text-[14px] md:text-lg lg:text-xl mb-4'>Tổng số nhiễm trùng</h2>
                                    {
                                        boxitem.map((res, item) => {
                                            return <h3 key={item} className=' md:text-2xl lg:text-4xl font-bold text-[#EF4444]' >
                                                {res.count}
                                            </h3>
                                        })
                                    }
                                </div>
                                <div className=' flex  justify-center'>
                                    <h3 className='font-bold'>
                                        Ca nhiễm/ngày: &nbsp;
                                    </h3>
                                    <h4>
                                        {
                                            boxitem.map((res, item) => {
                                                return <span key={item} className=' text-xs font-bold text-[#EF4444]' >
                                                    {res.span } 
                                                </span>
                                            })
                                        }

                                    </h4>
                                </div>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid item sm={4} xs={16}>
                    <Item>
                        <div className=' w-full  h-4 rounded-t-2xl bg-[#ACACAC]'>
                        </div>
                        <div className='relative '>
                            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] w-full justify-center'>
                                <div>

                                    <h2 className=' font-inter font-semibold tablet:text-[14px] md:text-lg lg:text-xl mb-4'>Tổng ca tử vong</h2>
                                    {
                                        boxitem.map((res, item) => {
                                            return <h3 key={item} className=' md:text-2xl lg:text-4xl font-bold text-[#ACACAC]' >
                                                {res.count1}
                                            </h3>
                                        })
                                    }
                                </div>
                                <div className=' flex  justify-center'>
                                    
                                    <h3 className=' font-bold'>
                                        Tử vong/ngày: &nbsp;
                                    </h3>
                                    <h4>
                                        {
                                            boxitem.map((res, item) => {
                                                return <span key={item} className=' text-xs font-bold text-[#ACACAC]' >
                                                    {res.span1 }
                                                </span>
                                            })
                                        }

                                    </h4>
                                </div>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid item sm={4} xs={16}>
                    <Item>
                        <div className=' w-full  h-4 rounded-t-2xl bg-[#22C563]'>
                        </div>
                        <div className='relative '>
                            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] w-full justify-center'>
                                <div>

                                    <h2 className=' font-inter font-semibold tablet:text-[14px] md:text-lg lg:text-xl mb-4'>Tổng ca hồi phục</h2>
                                    {
                                        boxitem.map((res, item) => {
                                            return <h3 key={item} className=' md:text-2xl lg:text-4xl font-bold text-[#22C563]' >
                                                {res.count2}
                                            </h3>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid item sm={4} xs={16}>
                    <Item>
                        <div className=' w-full  h-4 rounded-t-2xl bg-[#F59E0B]'>
                        </div>
                        <div className='relative '>
                            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] w-full justify-center'>
                                <div>
                                    <h2 className=' font-inter font-semibold tablet:text-[14px] md:text-lg lg:text-xl mb-4'>Tổng đang điều trị</h2>
                                    {
                                        boxitem.map((res, item) => {
                                            return <h3 key={item} className=' md:text-2xl lg:text-4xl font-bold text-[#F59E0B]' >
                                                {res.count3}
                                            </h3>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default BoxCountry