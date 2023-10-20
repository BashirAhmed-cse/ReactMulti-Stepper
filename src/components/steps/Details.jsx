import {useContext} from 'react';
import { StepperContext } from '../../contexts/StepperContext';

export default function Details() {
  const {userData, setUserData} = useContext(StepperContext);
  const handleChange = (e)=>{
    const {name, value} = e.target;
      setUserData({ ...userData, [name]: value });
  };
  return (
    <div className='flex flex-col'>
      <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 mt-3 text-blue-gray-500 text-xs leading-8
           uppercase'>Address</div>
           <div className='bg-white my-2 p-1 flex border border-x-blue-gray-200 rounded'>
               <input type="text" onChange={handleChange} value={userData['username'] || ''}
               name='username' placeholder='Username' className='p-1 px-2 appearance-none
               outline-none w-full text-blue-gray-800'/>
           </div>
      </div>
      <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 mt-3 text-blue-gray-500 text-xs leading-8
           uppercase'>Email</div>
           <div className='bg-white my-2 p-1 flex border border-x-blue-gray-200 rounded'>
               <input type="text" onChange={handleChange} value={userData['password'] || ''}
               name='password' placeholder='Password' className='p-1 px-2 appearance-none
               outline-none w-full text-blue-gray-800'/>
           </div>
      </div>
    </div>
  )
}