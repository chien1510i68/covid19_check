
import React, { useEffect, useState } from 'react'
import ReactEcharts from "echarts-for-react";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Stack, Typography } from '@mui/material';
import DialogBox from '../dialog';


function CasesTotal({ report }) {
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
                    name: 'Cases Total',
                    data: report.map((item) => item.cases.total),
                    type: 'line',
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
    /// Xử lý dữ liệu theo ngày 


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
 
    const text = [' Các biểu đồ trước đây đã xem xét số ca được xác nhận mỗi ngày - biểu đồ này cho thấy số ca được xác nhận tích lũy kể từ khi bắt đầu đại dịch COVID-19.']
    return (
        <div className='mt-9'>
            <Tooltip title={text} arrow>
                <h2 className=' font-inria font-semibold text-4xl text-[#3E3E3E] capitalize cursor-pointer ' >
                    Số trường hợp được xác nhận tích lũy là bao nhiêu?
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

export default CasesTotal
