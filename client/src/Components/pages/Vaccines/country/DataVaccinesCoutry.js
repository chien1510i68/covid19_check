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
                                            title="T???ng s??? li???u ???? d??ng. ?????i v???i v???c-xin y??u c???u nhi???u li???u, m???i li???u ri??ng l??? ???????c t??nh. N???u m???t ng?????i nh???n ???????c m???t li???u v???c-xin, ch??? s??? n??y t??ng l??n 1. N???u h??? nh???n ???????c li???u th??? hai, ch??? s??? n??y l???i t??ng l??n 1. N???u h??? nh???n ???????c li???u th??? ba / li???u t??ng c?????ng, n?? l???i t??ng th??m 1 l???n n???a."
                                            placement="top"
                                        >
                                            <h2 className=' font-inter font-semibold tablet:text-[14px] md:text-lg lg:text-xl mb-4'>T???ng li???u cung c???p</h2>
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
                                            title="T???ng s??? ng?????i ???? ti??m ????? li???u theo ph??c ????? ti??m ch???ng ban ?????u. N???u m???t ng?????i nh???n ???????c li???u ?????u ti??n c???a v???c-xin 2 li???u, ch??? s??? n??y v???n gi??? nguy??n. N???u h??? nh???n ???????c li???u th??? hai, ch??? s??? s??? t??ng l??n 1."
                                            placement="top" >
                                            <h2 className=' font-inter font-semibold tablet:text-[14px] md:text-lg lg:text-xl mb-4 cursor-pointer'>Ti??m ch???ng ?????y ?????</h2>
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
                                            title="T???ng s??? ng?????i ???? nh???n ??t nh???t m???t li???u v???c xin. N???u m???t ng?????i nh???n ???????c li???u ?????u ti??n c???a v???c-xin 2 li???u, ch??? s??? n??y t??ng l??n 1. N???u h??? nh???n ???????c li???u th??? hai, ch??? s??? n??y v???n gi??? nguy??n."
                                            placement="top"
                                        >
                                            <h2 className=' font-inter font-semibold tablet:text-[14px] md:text-lg lg:text-xl mb-4 cursor-pointer'>??t nh???t 1 li???u </h2>
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
                                            title="Tr??n 100 ng?????i trong t???ng d??n s??? c??? n?????c."
                                            placement="top"
                                        >

                                            <h2 className=' font-inter font-semibold tablet:text-[14px] md:text-lg lg:text-xl mb-4 cursor-pointer'>T???ng li???u cung c???p(%)</h2>
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

                        T???ng li???u cung c???p:
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
                        S??? ng?????i ???????c ti??m ch???ng ?????y ?????:
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
                        S??? ng?????i ???????c ti??m ch???ng ?????y ????? tr??n m???t tr??m:
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
