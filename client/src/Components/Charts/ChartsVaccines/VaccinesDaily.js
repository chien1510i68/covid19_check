import React, { useEffect, useState } from 'react'
import ReactEcharts from "echarts-for-react";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Stack, Typography } from '@mui/material';
import DialogBox from '../dialog';

export default function VaccinesDaily({ report }) {
    const generateOptions = (report) => {
        const categories = report.map((item) => item.date);
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
                boundaryGap: [0, '100%']
            },

            series: [
                {
                    realtimeSort: true,
                    name: ' Số người được tiêm chủng hàng ngày',
                    data: report.map((item) => item.daily_vaccinations),
                    type: 'line',
                    showBackground: true,
                    itemStyle: {
                        color: 'rgb(42, 106, 83)',

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
        <div>
            <div>
                <h2 className=' font-inria font-semibold tablet:text-2xl md:text-3xl lg:text-4xl text-[#3E3E3E] capitalize ' >
                    Số người được tiêm chủng hàng ngày
                </h2>
            </div>
            <div className='  h-[400px] bg-[#E9E8EE82]'>
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
