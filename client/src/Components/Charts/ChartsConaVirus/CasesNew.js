
import React, { useEffect, useState } from 'react'
import ReactEcharts from "echarts-for-react";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Stack, Typography } from '@mui/material';
import DialogBox from '../dialog';

function CasesNew({ report }) {

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
            "backgroundColor": "#EDECF0",
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: categories,

            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            dataZoom: [
                {
                    type: 'slider',
                    show: true,
                    start: 90,
                    end: 100,
                },
                {
                    type: 'inside',
                    start: 90,
                    end: 100
                },

            ],

            series: [
                {
                    name: 'Cases New',
                    data: report.map((item) => item.cases.new),

                    type: 'line',
                    symbol: 'none',

                    sampling: 'lttb',
                    itemStyle: {
                        color: 'rgb(255, 70, 131)'
                    },
                },
            ],
            legend: {
                show: true
            },
            animationDuration: 10000,
            animationDurationUpdate: 3000,
        }
    }

    const [options, setOptions] = useState({});
    const [reportType, setReportType] = useState('all');
    useEffect(() => {
        setOptions(generateOptions(report));

    }, [report]);
    /// X??? l?? d??? li???u theo ng??y 


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
    const text = ['S??? li???u tr?????ng h???p ???????c b??o c??o v??o m???t ng??y nh???t ?????nh kh??ng nh???t thi???t cho th???y s??? tr?????ng h???p m???i v??o ng??y ???? - ??i???u n??y l?? do s??? ch???m tr??? trong vi???c b??o c??o. ',
        'S??? tr?????ng h???p th???c t??? c?? kh??? n??ng cao h??n nhi???u so v???i s??? tr?????ng h???p ???????c x??c nh???n - ??i???u n??y l?? do th??? nghi???m h???n ch???. ']

    return (
        <div className=' mt-8'>
            <Tooltip title={text} arrow>

                <h2 className=' font-inria font-semibold text-4xl text-[#3E3E3E] capitalize cursor-pointer ' >
                    S??? tr?????ng h???p ???????c x??c nh???n h??ng ng??y l?? bao nhi??u?
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

export default CasesNew


