import { Image } from "@nextui-org/react";
import { useContext } from "react";
import { ImageContext } from "@/ImageContext";
import styles from './imageGenerator.module.css'



const ImageGenerator = () => {

  const {imageUrl,loading} = useContext(ImageContext);

  return (
    <div>
    <div className='p-4 rounded-xl justify-center flex shadow-[0_0_30px_rgba(0,255,255,0.2)] bg-white/2 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.7)'>
    <Image
    
      alt="HeroUI Album Cover"
      className=" rounded-lg brightness-110 contrast-11"
      src={imageUrl === '/'? '':imageUrl}
      width={300}
      height={300}
    />
    </div>
    <div className="loading-wrap">
<div   

  className={`
    ${styles.lineloading}
    bg-gradient-to-r from-cyan-300 via-teal-400 to-orange-300
    h-1 w-[300px]
    origin-left
    transition-transform duration-[15s]
    ${loading ? 'scale-x-100' : 'scale-x-0 invisible'}
  `}
/>
      {loading &&
    <span className="text-base text-white text-left block">loading...</span>

      }

    
    </div>
    </div>
  );
};

export default ImageGenerator;
