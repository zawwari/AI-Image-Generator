import {useContext, useRef } from "react";
import { Input} from "@heroui/react";
import { useState } from "react";
import axios from "axios";
import { ImageContext } from "@/ImageContext";
export const SearchIcon = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={`transform rotate-45 ${className}`}
    fill="none"
  >
    <path
      d="M12 20V4M12 4l-7 7M12 4l7 7"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

);


export default function InputField() {
  const {setImageUrl,setLoading} = useContext(ImageContext);
  const [value,setValue] = useState('');
  const inputRef= useRef(null)
  const imageGenerator = async()=>{
    if(value === ''){
      return 0;
    }
    setLoading(true)

    try{
const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      {
        prompt: value,
        n: 1,
        size: "512x512",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
      }
    );
    const data =  response.data;
setImageUrl(data.data[0].url);
  }
   catch(error){
console.error(error)

   }

   finally{
    setLoading(false)
   }


  }


  return (
    
    <Input
      className="max-w-[600px] mt-10"
      ref={inputRef}
      type="text"
      value={value}
      placeholder="Whats on your mind today..."
      size="md"
      onChange={(event)=>setValue(event?.target.value)}
       startContent={
        <button 
        onClick={imageGenerator}
        className="absolute right-4 top-1/2 -translate-y-1/2  p-2 rounded-full
    bg-gradient-to-r from-cyan-300 via-teal-400 to-orange-300
    text-black
    hover:scale-105
    transition">
            <SearchIcon className="text-4xl text-default-400 cursor-pointer shrink-0 " />
          </button >
          }
      classNames={{
    inputWrapper: [
      "bg-white",
      "border border-white/20",
      "backdrop-blur-md",
      'outline-none',
      'rounded-full'
      
    ],
    input: [
      "text-black",
      "placeholder:text-black",
      "text-sm",
      'outline-none',
      'px-3 py-3',
    ],
  }}
    />
  );
}


