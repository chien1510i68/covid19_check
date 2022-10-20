import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { CardMedia, Typography } from '@mui/material';
import VideoMedia from '../../../file/Videos/video_Covid.mp4'

const Item = styled(Paper)(({ theme }) => ({

}));
export default function FocusPage() {
    return (
        <Box className=' tablet:w-[100%] tablet:h-[100%] md:w-[100%] md:h-[100%] lg:w-[1250px] lg:h-[646px] bg-[#FFFF]  rounded-3xl  flex mt-10 p-10 gap-[24px]'>
            <Box sx={{ width: '60%' }}>
                <Grid container spacing={{ xs: 2, md: 5 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Item sx={{ height: 265, boxShadow: 0 }}>
                            <Typography sx={{ fontSize: 25, fontWeight: 'bold', textTransform: 'uppercase' }}>
                                Trình khám phá dữ liệu COVID-19
                            </Typography>
                            <br />
                            <Typography sx={{ fontSize: 13, fontWeight: 'bold', opacity: 0.8, textTransform: 'uppercase', maxWidth: 260 }}>
                                Khám phá sự biến động của đại dịch COVID-19 thông qua các chỉ số và báo cáo nhanh với các chủ đề mà chúng tôi thu thập được.
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{ height: 265, bgcolor: '#F1F1F2', borderRadius: 3, boxShadow: 0, padding: 3 }}>
                            <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>
                                Khám phá các nguồn dữ liệu về Coronavirus
                            </Typography>
                            <br />
                            <br />
                            <br />
                            <Typography sx={{ fontSize: 13, fontWeight: 'bold', opacity: 0.8, maxWidth: 260 }}>
                                Mỗi hồ sơ bao gồm hình ảnh trực quan tương tác, giải thích về các chỉ số được trình bày và chi tiết về nguồn dữ liệu.
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{ height: 265, bgcolor: '#F1F1F2', borderRadius: 3, boxShadow: 0, padding: 3 }}>
                            <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>
                                Khám phá các nguồn dữ liệu
                                về Vaccines
                            </Typography>
                            <br />
                            <br />
                            <br />
                            <Typography sx={{ fontSize: 13, fontWeight: 'bold', opacity: 0.8, maxWidth: 260 }}>
                                Để chấm dứt đại dịch này, một phần lớn thế giới cần được miễn dịch với vi rút. Cách an toàn nhất để đạt được điều này là tiêm vắc xin.
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{ height: 265, bgcolor: '#F1F1F2', borderRadius: 3, boxShadow: 0, padding: 3 }}>
                            <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>
                                Khám phá các nguồn dữ liệu
                                về Vaccines
                            </Typography>
                            <br />
                            <br />
                            <br />
                            <Typography sx={{ fontSize: 13, fontWeight: 'bold', opacity: 0.8, maxWidth: 260 }}>
                                Để chấm dứt đại dịch này, một phần lớn thế giới cần được miễn dịch với vi rút. Cách an toàn nhất để đạt được điều này là tiêm vắc xin.
                            </Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '40%', height: '100%' }}>
                <video
                    muted
                    autoPlay={"autoplay"}
                    loop={"loop"}
                    playsInline
                    className='w-full h-full object-cover  rounded-2xl'
                >
                    <source type="video/mp4" src={VideoMedia}  className='w-full h-[500px] '/>
                </video>

            </Box>
        </Box>
    )
}
