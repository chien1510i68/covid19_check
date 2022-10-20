import React from 'react'
import Country from '../../Country'
import World from './world'
import TestMongoDB from '../test'
import FooterPage from './footer'
import Title from './header/Header'
import { Box } from '@mui/material'
import FocusPage from './focus'
import NewsUI from '../../news/newsUI'


export default function Discoveries() {
  return (
    <div className=" bg-[#F1F1F2]">
      <div className='max-w-[1250px]  m-auto justify-center items-center tablet:p-3 lg:p-0'>
        <Title />
        <Box className=' tablet:w-[100%] tablet:h-[100%] md:w-[100%] md:h-[100%] lg:w-[1250px] lg:h-[546px] bg-[#FFFF]  rounded-3xl  flex  '>
          <World />
          <Country />
        </Box>
        <FocusPage></FocusPage>
        <NewsUI></NewsUI>
      </div>
      <FooterPage />
    </div>
  )
}
