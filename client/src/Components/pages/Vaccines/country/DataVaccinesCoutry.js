import React, { useMemo } from 'react';
import { Box, ListItem, Grid, Tooltip } from '@mui/material';
import ChartsVaccines from '../../../Charts/ChartsVaccines/index';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    justifyContent: 'center',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 200,
    borderRadius: 16,


}));
export default function DataVaccinesCoutry({ report }) {
    //console.log('vacc', report)
    const boxitem = useMemo(() => {
        if (report && report.length) {
            const latestData = report[report.length - 1];
            return [
                {
                    count: latestData.total_vaccinations,
                    type: 'total_vaccinations'
                },
                {
                    count1: latestData.people_fully_vaccinated,
                    type: 'people_fully_vaccinated'
                },
                {
                    count2: latestData.people_vaccinated,
                    type: 'people_vaccinated'
                },
                {
                    count3: latestData.total_vaccinations_per_hundred,
                    type: 'people_fully_vaccinated_per_hundred'
                },

            ];
        }
        return [];
    }, [report]);
    //console.log('r', boxitem);
    return (
        <div>
            <Box sx={{ flexGrow: 2, }}>
                <Grid container spacing={2} columns={16}>
                    <Grid item sm={4} xs={16} >
                        <Item>
                            <div className=' w-full  h-4 rounded-t-2xl bg-[#EF4444]'>
                            </div>
                            <div className='relative '>
                                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] w-full justify-center'>
                                    <div>
                                        <Tooltip
                                            title="Tổng số liều đã dùng. Đối với vắc-xin yêu cầu nhiều liều, mỗi liều riêng lẻ được tính. Nếu một người nhận được một liều vắc-xin, chỉ số này tăng lên 1. Nếu họ nhận được liều thứ hai, chỉ số này lại tăng lên 1. Nếu họ nhận được liều thứ ba / liều tăng cường, nó lại tăng thêm 1 lần nữa."
                                            placement="top"
                                        >
                                            <h2 className=' font-inter font-semibold tablet:text-[14px] md:text-lg lg:text-xl mb-4'>Tổng liều cung cấp</h2>
                                        </Tooltip>
                                        {
                                            boxitem.map((res, item) => {
                                                return <h3 key={item} className=' md:text-2xl lg:text-4xl font-bold text-[#EF4444]' >
                                                    {res.count}
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
                            <div className=' w-full  h-4 rounded-t-2xl bg-[#ACACAC]'>
                            </div>
                            <div className='relative '>
                                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] w-full justify-center'>
                                    <div>
                                        <Tooltip
                                            title="Tổng số người đã tiêm đủ liều theo phác đồ tiêm chủng ban đầu. Nếu một người nhận được liều đầu tiên của vắc-xin 2 liều, chỉ số này vẫn giữ nguyên. Nếu họ nhận được liều thứ hai, chỉ số sẽ tăng lên 1."
                                            placement="top" >
                                            <h2 className=' font-inter font-semibold tablet:text-[14px] md:text-lg lg:text-xl mb-4 cursor-pointer'>Tiêm chủng đầy đủ</h2>
                                        </Tooltip>
                                        {
                                            boxitem.map((res, item) => {
                                                return <h3 key={item} className=' md:text-2xl lg:text-4xl font-bold text-[#ACACAC]' >
                                                    {res.count1}
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
                            <div className=' w-full  h-4 rounded-t-2xl bg-[#22C563]'>
                            </div>
                            <div className='relative '>
                                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] w-full justify-center'>
                                    <div>
                                        <Tooltip
                                            title="Tổng số người đã nhận ít nhất một liều vắc xin. Nếu một người nhận được liều đầu tiên của vắc-xin 2 liều, chỉ số này tăng lên 1. Nếu họ nhận được liều thứ hai, chỉ số này vẫn giữ nguyên."
                                            placement="top"
                                        >
                                            <h2 className=' font-inter font-semibold tablet:text-[14px] md:text-lg lg:text-xl mb-4 cursor-pointer'>Ít nhất 1 liều </h2>
                                        </Tooltip>
                                        <h3 className=' md:text-2xl lg:text-4xl font-bold text-[#22C563]'>
                                            {
                                                boxitem.map((res, item) => {
                                                    return <span key={item} >
                                                        {res.count2}
                                                    </span>
                                                })
                                            }
                                        </h3>

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
                                        <Tooltip
                                            title="Trên 100 người trong tổng dân số cả nước."
                                            placement="top"
                                        >

                                            <h2 className=' font-inter font-semibold tablet:text-[14px] md:text-lg lg:text-xl mb-4 cursor-pointer'>Tổng liều cung cấp(%)</h2>
                                        </Tooltip>
                                        <h3 className=' md:text-2xl lg:text-4xl font-bold text-[#F59E0B]'>
                                            {
                                                boxitem.map((res, item) => {
                                                    return <span key={item}  >
                                                        {res.count3}
                                                    </span>
                                                })
                                            }{'%'}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            {/* <Box className=' tablet:flex-col lg:flex relative mt-8 tablet:mb-10 tablet:gap-5 lg:mb-24 items-center'>
                <ListItem className=' font-inter text-xl flex-col  '>
                    <h3 className=' tablet:mb-2 lg:mb-6 min-h-[50px]'>

                        Tổng liều cung cấp:
                    </h3>
                    <h4 className="text-[#286DA8] text-5xl font-inter font-semibold">
                        {
                            boxitem.map((res, item) => {
                                return <span key={item} >
                                    {res.count}
                                </span>
                            })
                        }
                    </h4>
                </ListItem>
                <ListItem className=' font-inter text-xl flex-col'>
                    <h3 className='tablet:mb-2 lg:mb-6 min-h-[50px]'>
                        Số người được tiêm chủng đầy đủ:
                    </h3>

                    <h4 className="text-[#286DA8] text-5xl font-inter font-semibold">
                        {
                            boxitem.map((res, item) => {
                                return <span key={item} >
                                    {res.count1}
                                </span>
                            })
                        }
                    </h4>
                </ListItem>
                <ListItem className=' font-inter text-xl flex-col md:mb-5'>
                    <h3 className='tablet:mb-2 lg:mb-6 min-h-[50px]'>
                        Số người được tiêm chủng đầy đủ trên một trăm:
                    </h3>

                    <h4 className="text-[#286DA8] text-5xl font-inter font-semibold">
                        {
                            boxitem.map((res, item) => {
                                return <span key={item} >
                                    {res.count2} 
                                </span>
                            })
                        }%
                    </h4>
                </ListItem>
            </Box> */}
            <ChartsVaccines report={report} />
        </div>
    )
}
