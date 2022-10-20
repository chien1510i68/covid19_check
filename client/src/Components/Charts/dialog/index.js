import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { Box, CardContent, } from '@mui/material';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};


BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};


function DialogBox() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const exportDataJson = () => {
        fetch('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
                    JSON.stringify(json)
                )}`;
                const link = document.createElement("a");
                link.href = jsonString;
                link.download = "vaccines.json";

                link.click();
            })

    };
    var url = 'https://media.githubusercontent.com/media/hoangvantuan123/data-covid19/main/public/owid-covid-data.csv';
    const exportDataCsv = async (url, name) => {
        const response = await fetch(url);
        const data = await response.text();
        const blob = new Blob([data], { type: "data:text/csv;charset=utf-8," });
        const blobURL = window.URL.createObjectURL(blob);

        // Tạo thẻ mới cho tệp tải xuống
        const anchor = document.createElement("a");
        anchor.download = name;
        anchor.href = blobURL;
        anchor.dataset.downloadurl = ["text/csv", anchor.download, anchor.href].join(
            ":"
        );
        anchor.click();
        // Xóa URL.createObjectURL. Trình duyệt không nên lưu tham chiếu vào tệp.
        setTimeout(() => {
            //Đối với Firefox, cần trì hoãn việc thu hồi ObjectURL
            URL.revokeObjectURL(blobURL);
        }, 100);
    };

    return (
        <Box>
            
            <Button variant="outlined" onClick={handleClickOpen}>
                Download <DownloadRoundedIcon />
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Download
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    {/*  <Typography>
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                            Chart
                            <Button sx={{ textTransform: 'none', display: 'flex' }} variant="outlined" >
                                <CardContent>
                                    <CardMedia component="img"
                                        sx={{ width: 151 }}
                                        image="/static/images/cards/live-from-space.jpg"
                                        alt="Live from space album cover"></CardMedia>
                                </CardContent>
                                <CardContent sx={{ textAlign: 'left' }}>
                                    <Typography gutterBottom>
                                        Image (PNG)
                                    </Typography>
                                    <Typography sx={{ fontSize: 10 }} >
                                        Thích hợp cho hầu hết các mục đích sử dụng, tương thích rộng rãi.
                                    </Typography>
                                </CardContent>
                                <CardContent sx={{ opacity: 0.6 }}>
                                    <DownloadRoundedIcon sx={{ fontSize: 35 }}></DownloadRoundedIcon>
                                </CardContent>
                            </Button>
                            <Button sx={{ textTransform: 'none', marginTop: 1 }} variant="outlined">
                                <CardContent>
                                    <CardMedia component="img"
                                        sx={{ width: 151 }}
                                        image="/static/images/cards/live-from-space.jpg"
                                        alt="Live from space album cover"></CardMedia>
                                </CardContent>
                                <CardContent sx={{ textAlign: 'left' }}>
                                    <Typography gutterBottom>
                                        Vector Graphic (SVG)
                                    </Typography>
                                    <Typography sx={{ fontSize: 10 }}>
                                        Để có bản in chất lượng cao hoặc chỉnh sửa thêm biểu đồ trong phần mềm đồ họa.
                                    </Typography>
                                </CardContent>
                                <CardContent sx={{ opacity: 0.6 }}>
                                    <DownloadRoundedIcon sx={{ fontSize: 35 }}></DownloadRoundedIcon>
                                </CardContent>
                            </Button>

                        </BootstrapDialogTitle>
                    </Typography> */}
                    <Typography>
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                            Data
                            <Box sx={{ display: "flex", gap: 1 }} >
                                <Button sx={{ textTransform: 'none', display: 'flex' }} variant="outlined" onClick={exportDataJson}>
                                    <CardContent sx={{ textAlign: 'left' }}>
                                        <Typography gutterBottom>
                                            Full Data(JSON)
                                        </Typography>
                                        <Typography sx={{ fontSize: 10 }}>
                                            Tập tin đầy đủ được sử dụng trong dữ liệu này.
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ opacity: 0.6 }}>
                                        <DownloadRoundedIcon sx={{ fontSize: 35 }}></DownloadRoundedIcon>
                                    </CardContent>
                                </Button>
                                <Button sx={{ textTransform: 'none', display: 'flex' }} variant="outlined"   onClick={() => exportDataCsv(url, "full_data.csv")}>
                                    <CardContent sx={{ textAlign: 'left' }}>
                                        <Typography gutterBottom>
                                            Full Data(CSV)
                                        </Typography>
                                        <Typography sx={{ fontSize: 10 }}>
                                            Tập tin đầy đủ được sử dụng trong dữ liệu này.
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ opacity: 0.6 }}>
                                        <DownloadRoundedIcon sx={{ fontSize: 35 }}></DownloadRoundedIcon>
                                    </CardContent>
                                </Button>
                            </Box>

                        </BootstrapDialogTitle>
                    </Typography>
                </DialogContent>
                {/* <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions> */}
            </BootstrapDialog>
        </Box>
    )
}

export default DialogBox