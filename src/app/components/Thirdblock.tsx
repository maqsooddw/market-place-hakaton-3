import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  title: string;
  price: string;
  originalPrice: string;
  overlay?: string; // Optional overlay image
}

interface ThirdblockProps {
  images: ImageProps[];
}

const Thirdblock: React.FC<ThirdblockProps> = ({ images }) => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center user-xl:justify-evenly user-lg:justify-evenly user-md:justify-evenly'>
      {/* Main div for the three images */}
      {images.map((image, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center  w-full sm:w-[360px]
           h-fit lg:w-[360px] lg:h-[306px] lg:mr-2  mt-5 bg-[#f7f7f7] "
        >
          {/* Render additional overlay image if provided */}
          {image.overlay && (
            <img
              src={image.overlay}
              alt="Overlay"
              className="w-[84.87px] h-[56.73px] mb-[-50px] ml-[-250px] z-10"
            />
          )}
          <img
            src={image.src}
            alt={image.alt}
            className="w-full max-w-[223px] h-[277px] z-0"
          />
          <div className="flex text-center mt-4 justify-center">
            <ul className="flex flex-col sm:flex-row items-center">
              <li className="text-[16px] font-bold text-blue-900">{image.title}</li>
              <li className="text-[16px] font-bold text-blue-900 lg:mr-12 sm:mr-2">{image.price}</li>
              <li className="text-[16px] font-bold text-red-500 line-through">{image.originalPrice}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Thirdblock;
