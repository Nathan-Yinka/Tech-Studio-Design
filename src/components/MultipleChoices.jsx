import React, { useEffect, useState } from 'react'
import plus from "../assets/talent/plus.svg"
import useAxiosFetch from '../hooks/useAxiosFetch';
import useAxiosPost from '../hooks/useAxiosPost';

const MultipleChoices = ({initialChoices,endpoint,setSelectedChoices,selectedChoices,placeholder,className}) => {
    const [newChoice, setNewChoice] = useState('');
    const [choices, setChoices] = useState([]);
    const queryParams = new URLSearchParams(window.location.search);
    const emailParam = queryParams.get('email');
    const { triggerPost, response, isPosting, postError } = useAxiosPost();

    useEffect(()=>{
        setChoices(initialChoices)
      },[initialChoices])

    useEffect(()=>{
        if (response && !postError){
            setChoices(prevChoices => [...prevChoices, response]);
            setNewChoice('');
        }
    },[response])

    const handleCheckboxChange =  (e) => {
        const selectedChoice = parseInt(e.target.value);
        if (e.target.checked) {
          setSelectedChoices([...selectedChoices, selectedChoice]);
         
        } else {
          setSelectedChoices(selectedChoices.filter(choice => choice !== selectedChoice));
        }
      };

      const handleAddChoice = async() => {
        if (isPosting) {
            return;
        }

        if (newChoice.trim() !== '') {
    
            var formdata = new FormData();
            formdata.append("email", emailParam);
            formdata.append("name", newChoice);
            formdata.append("client_created", true);
            triggerPost(formdata,`https://techstudiocommunity.onrender.com/api/jobs/${endpoint}/`);
        }
      };

  return (
    <div>
        <div className='flex relative'>
            <input 
            placeholder={placeholder}
            value={newChoice}
            onChange={(e) => setNewChoice(e.target.value)}
            className={className}
            maxLength={20}
            type="text" />
             <button type="button" className=' absolute right-[10px] top-[15px]' onClick={handleAddChoice}><img src={plus} alt="" /></button>
        </div>

        <div className='flex w-[95%] gap-[10px] mt-[15px] flex-wrap'>
            {choices && choices.map((choice,index)=>
            <div className='mb-[15px]' key={`${endpoint} ${index}`}>
                <input type="checkbox" name="" id={`${endpoint}${index}`} className='hidden checked-icon' value={choice.id}
                onChange={handleCheckboxChange}/>
                <label htmlFor={`${endpoint}${index}`} className='bg-[#bababa] py-2.5 px-5 text-white font-semibold text-[14px] rounded-[5px] checked-text transition'>{choice.name}</label>
            </div>
            )}
        </div>
    </div>
  )
}

export default MultipleChoices