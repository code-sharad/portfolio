'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { BsDiamond } from 'react-icons/bs'

function SectionDivider() {
  return (
    <motion.div
      className='flex gap-1 items-center'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.125
      }}
    >
      <div className='bg-black my-24 h-[1px] w-56 rounded-full hidden sm:block' />
      <BsDiamond />
      <div className='bg-black my-24 h-[1px] w-56 rounded-full hidden sm:block' />


    </motion.div>
  )
}

export default SectionDivider