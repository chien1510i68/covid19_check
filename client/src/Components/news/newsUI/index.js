import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import usePagination from '../Pagination'
import { sortBy } from 'lodash';
import { getNewsCountry } from '../../../API/newsCountry';
import { Card, CardMedia, ImageList, ImageListItem, ImageListItemBar, Link, Typography } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

export default function NewsUI() {
    const [country, setCountry] = React.useState([]);
    useEffect(() => {
        getNewsCountry().then((res) => {
            console.log('Country', res)
            setCountry(res.data.articles);
            res.data.articles.sort(function (a, b) {
                var c = new Date(a.published_date);
                var d = new Date(b.published_date);
                return d - c;
            });
        }).catch(function (error) {
            console.error(error);
        })
    }, [])
    //Loaij bỏ phần tử đầu tiên trong mảng 
    const deletefirstitem = country.shift();
    /// Xử lý phân trang 
    const PER_PAGE = 20;
    // Xử lý Pagination : Phân trang
    const DATA = usePagination(country, PER_PAGE);
    console.log('tyu', DATA)
    // Lấy phần tử cuối cùng
    const latestData = country[country.length - 1];
    return (
        <Box className=' tablet:w-[100%] tablet:h-[100%] md:w-[100%] md:h-[100%] lg:w-[1250px] lg:min-h-[546px] bg-[#FFFF]  rounded-3xl  flex mt-10 p-9 mb-10'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={12} sx={{}}>
                        <Item sx={{ boxShadow: 0, }}>
                            <Typography sx={{ fontSize: 25, fontWeight: 'bold', textTransform: 'uppercase' }}>
                                Tin nổi bật
                            </Typography>
                            <Card sx={{ boxShadow: 0, display: 'flex', padding: 0, }}>
                                <Grid sx={{ width: '85%' , height: 450}}>
                                    <Link href={latestData?.link}>
                                        <ImageListItem sx={{ fontSize: 20 }}>
                                            <img
                                                src={latestData?.media}
                                                alt={latestData?.title}
                                                className='w-[100%] rounded-[5px]  h-[100%] overflow-auto'
                                            />
                                            <ImageListItemBar
                                                title={latestData?.rights}
                                            />
                                        </ImageListItem>
                                    </Link>
                                </Grid>
                                <Grid sx={{ alignContent: 'center' }}>
                                    <Typography sx={{ maxWidth: 300, fontSize: 25, textTransform: 'uppercase', fontWeight: 700, opacity: 0.6 }}>
                                        <Link href={latestData?.link} sx={{ textDecoration: 'none' }}>
                                            {latestData?.title}
                                        </Link>
                                    </Typography>
                                    <br />
                                    <Typography sx={{ maxWidth: 300, fontSize: 13, opacity: 0.6 }}>
                                        {latestData?.summary}
                                    </Typography>
                                </Grid>
                            </Card>

                        </Item>
                    </Grid>
                    <Grid xs={12}>
                        <Item sx={{ boxShadow: 0 }}>
                            <Typography sx={{ fontSize: 25, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 2 }}>
                                Tình hình dịch cả nước
                            </Typography>

                            <ImageList variant='masonry' cols={3} gap={8} >
                                {

                                    DATA.currentData().map((item, use) => {
                                        return (

                                            < ImageListItem key={use}>
                                                <img
                                                    className=' overflow-auto'
                                                    src={`${item.media}?w=248&fit=crop&auto=format`}
                                                    srcSet={`${item.media}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                    alt={item.title}
                                                    loading="lazy"
                                                />
                                                <Link href={item.link}>
                                                    <ImageListItemBar
                                                        title={item.title}
                                                        subtitle={<span className=''>{item.clean_url}</span>}
                                                    />
                                                </Link>
                                            </ImageListItem>
                                        )
                                    })

                                }

                            </ImageList>
                        </Item>
                    </Grid>

                </Grid>
            </Box>
        </Box >
    )
}


