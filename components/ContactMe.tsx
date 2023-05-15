import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"

type Props = {}

function ContactMe({}: Props) {
  return (
    <div 
        className='h-screen flex relative flex-col text-center md:text-left md:flex-row
            max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500
            text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-5 pt-40'>
            <h4 className='text-4xl font-semibold text-center'>
                I got just what you need.{" "}
                <span className='decoration-[#f7ab0a] underline animate-pulse'>Lets talk.</span>

            </h4>

            <div className='space-y-5'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>+12267925657</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>tahaamirm@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>Waterloo, Ontario 🇨🇦</p>
                </div>

            </div>
            
            <form className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input placeholder="Name" className="contactInput" type="text" />
                    <input placeholder="Email" className="contactInput" type="text" />
                </div>

                <input placeholder="Subject" className="contactInput" type="text" />

                <textarea placeholder="Message" className="contactInput" ></textarea>
                <button className='bg-[#f7ab0a] py-5 px-10 rounded-md text-gray-700 font-bold text-xl'>Submit</button>
            </form>


        </div>

        
    </div>
  )
}

export default ContactMe