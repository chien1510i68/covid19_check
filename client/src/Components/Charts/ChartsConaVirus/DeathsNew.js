
import React, { useEffect, useState } from 'react'
import ReactEcharts from "echarts-for-react";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Stack, Typography } from '@mui/material';
import DialogBox from '../dialog';



function DeathsNew({ report }) {
    const generateOptions = (report) => {
        const categories = report.map((item) => item.day);
        return {
            toolbox: {
                show: true,
                feature: {

                    dataView: {
                        readOnly: false
                    },
                    magicType: {
                        type: ["line", "bar"]
                    },
                    saveAsImage: {
                        show: true,


                    }
                }
            },
            animationDuration: 10000,
            tooltip: {
                trigger: 'axis',

            },

            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: categories,

            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '0%']
            },
            dataZoom: [
                {
                    type: 'slider',
                    show: true,
                    start: 70,
                    end: 100,
                },
                {
                    type: 'inside',
                    start: 70,
                    end: 100
                },

            ],
            series: [
                {
                    name: 'Death New',
                    data: report.map((item) => item.deaths.new),
                    type: 'bar',
                    symbol: 'none',
                    sampling: 'lttb',
                    itemStyle: {
                        color: 'rgb(255, 70, 131)'
                    },
                },
            ],
        }
    }

    const [options, setOptions] = useState({});
    const [reportType, setReportType] = useState('all');
    useEffect(() => {
        setOptions(generateOptions(report));
    }, [report]);

    useEffect(() => {
        let customData = [];
        switch (reportType) {
            case 'all':
                customData = report;
                break;
            case '60':
                customData = report.slice(Math.max(report.length - 60, 1));
                break;
            case '30':
                customData = report.slice(Math.max(report.length - 30, 1));
                break;
            case '14':
                customData = report.slice(Math.max(report.length - 14, 1));
                break;

            default:
                customData = report;
                break;
        }

        setOptions(generateOptions(customData));
    }, [report, reportType]);
    return (
        <div className='mt-9'>
            <Tooltip
                title={<div>
                    <h4 className=' text-xs'>
                        Ba ??i???m v??? s??? li???u t??? vong ???????c x??c nh???n c???n ghi nh???
                    </h4>
                    <br />
                    <p >
                        S??? ng?????i ch???t th???c t??? do COVID-19 c?? th??? cao h??n s??? ng?????i ch???t ???????c x??c nh???n - ??i???u n??y l?? do th??? nghi???m h???n ch??? v?? c??c v???n ????? trong vi???c x??c ?????nh nguy??n nh??n t??? vong. S??? kh??c bi???t gi???a s??? ca t??? vong ???????c x??c nh???n ???????c b??o c??o v?? s??? ca t??? vong th???c t??? kh??c nhau t??y theo qu???c gia.
                        <br />
                        C??ch ghi nh???n c??c ca t??? vong do COVID-19 c?? th??? kh??c nhau gi???a c??c qu???c gia (v?? d???: m???t s??? qu???c gia c?? th??? ch??? t??nh s??? ca t??? vong t???i b???nh vi???n, trong khi nh???ng qu???c gia kh??c c??ng bao g???m ca t??? vong t???i nh??.
                        <br />
                        S??? li???u t??? vong v??o m???t ng??y nh???t ?????nh kh??ng nh???t thi???t cho bi???t s??? ng?????i ch???t m???i v??o ng??y ????, m?? l?? s??? ng?????i ch???t ???????c b??o c??o v??o ng??y ????. V?? b??o c??o c?? th??? thay ?????i ????ng k??? gi???a c??c ng??y - kh??ng ph??n bi???t b???t k??? bi???n th??? th???c t??? n??o v??? s??? ca t??? vong - n??n s??? h???u ??ch khi xem m???c trung b??nh lu??n phi??n trong b???y ng??y c???a c??c s??? li???u h??ng ng??y nh?? ch??ng ta l??m trong bi???u ????? ??? ????y.
                    </p>
                </div>
                } arrow>
                <h2 className=' font-inria font-semibold text-4xl text-[#3E3E3E] capitalize  mb-7 cursor-pointer    ' >
                    S??? ng?????i ch???t ???????c x??c nh???n h??ng ng??y l?? bao nhi??u?
                </h2>
            </Tooltip>
            <div className=' w-[900px] h-[400px] bg-[#E9E8EE82]'>
                <div className='flex justify-between p-4'>
                    <Stack direction="row" spacing={1}>

                        <Button sx={{ width: 100, bgcolor: '#FEFEFE' }} name="button" onClick={() => setReportType('14')}>14 days</Button>
                        <Button sx={{ width: 100, bgcolor: '#FEFEFE' }} onClick={() => setReportType('30')} >30 days</Button>
                        <Button sx={{ width: 100, bgcolor: '#FEFEFE' }} onClick={() => setReportType('60')}>60 days</Button>
                        <Button sx={{ width: 100, bgcolor: '#FEFEFE' }} onClick={() => setReportType('all')}>ALL days</Button>
                        <DialogBox></DialogBox>
                    </Stack>

                </div>
                <div>
                    <ReactEcharts option={(options)} data={report} ></ReactEcharts>
                </div>
            </div>
        </div>
    )
}

export default DeathsNew
