import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler} from "react-hook-form";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";


type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

function ContactMe({}: Props) {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,  // Change to false if you want the animation to trigger again whenever it comes into view
      });

    const { 
        register, 
        handleSubmit, 
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formdata) => {
        window.location.href = `mailto:tahaamirm@gmail.com?subject=${formdata.subject}&body=Hi, my name is ${formdata.name}. ${formdata.message} (${formdata.email})`;

    }
  return (
    <div 
        className='h-screen flex relative flex-col text-center md:text-left md:flex-row
            max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500
            text-2xl'>
            Contact
        </h3>

        <div ref={ref}>
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
            transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
            }}
            className='flex flex-col space-y-5 pt-40'>
            <h4 className='text-4xl font-semibold text-center py-5'>
                {/* I got what you need.{" "}
                <span className='decoration-[#f7ab0a] underline animate-pulse'>Lets talk.</span> */}
                <span className='decoration-[#f7ab0a] underline animate-pulse'>Lets chat!</span>
            </h4>

            <div className='space-y-5'>
                {/* <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>+1 (226) 792-5657</p>
                </div> */}
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>tahaamirm@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>Waterloo, Ontario 🇨🇦</p>
                </div>

            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder="Name" className="contactInput uppercase text-sm" type="text" />
                    <input {...register('email')} placeholder="Email" className="contactInput uppercase text-sm" type="email" />
                </div>

                <input {...register('subject')} placeholder="Subject" className="contactInput uppercase text-sm" type="text" />

                <textarea {...register('message')} placeholder="Message" className="contactInput uppercase text-sm" ></textarea>
                <button
                    type='submit' 
                    className='bg-[#f7ab0a] py-5 px-10 rounded-md text-gray-700 font-bold text-xl'>Submit</button>
            </form>


        </motion.div>
        </div>
        

        
    </div>
  )
}

export default ContactMe