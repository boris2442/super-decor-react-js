import React from 'react';

const SeePlusHotel = () => {
    const seePlusImg=[
        {
            imgPlus:"/h1.jpg",
        },
        {
            imgPlus:"/h2.jpg", 
        },
        {
           imgPlus:"/h3.jpg",  
        },
        {
            imgPlus:"/h4.jpg", 
        },
        {
          imgPlus:"/h5.jpg",   
        },
        {
          imgPlus:"/h6.jpg",   
        },
        {
           imgPlus:"/h7.jpg",  
        },
        {
           imgPlus:"/h7.jpg",  
        },
        {
          imgPlus:"/h9.jpg",   
        },
        {
           imgPlus:"/h10.jpg",  
        },
        {
           imgPlus:"/h12.jpg",  
        },
        {
           imgPlus:"/h11.jpg",  
        }
    ]
    return (
     
        <div>
            <div className="contain-images-hotel flex justify-between flex-wrap gap-[10px] p-[50px]">
                <h2 className="second-title text-3xl font-bold text-[#333] inline-block relative">Hotel des mariés</h2>
                <div className="images-hotel flex justify-around gap-[20px] flex-wrap mt-[30px]">
                    {seePlusImg.map((img, index) => (
                        <img key={index} src={img.imgPlus} alt={`Image ${index + 1}`} className="w-[300px] h-[300px] object-cover rounded-[10px] hover:scale-105 transition-transform duration-300" />
                    ))}
                </div>
                {/* <div className="text-center mt-[20px]">
                    <button className="bg-[#FF9D00] text-white font-bold py-2 px-4 rounded hover:bg-[#333] transition duration-300">Voir plus</button>  
                   </div>  */}
            </div>
        </div>
    );
};

export default SeePlusHotel;