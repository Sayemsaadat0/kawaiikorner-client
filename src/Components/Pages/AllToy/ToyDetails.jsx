import React from 'react';

const ToyDetails = () => {
    return (
        <div className='h-screen 
        bg-gradient-to-tr from-emerald-200 to-fuchsia-400
        flex 
        flex-col 
        justify-center 
        items-center'>
          <h2 className='text-white text-3xl font-bold underline'>  toy details</h2>
            <div className="card
             card-compact
              w-[60%] mt-10
              ron
              mb-20 
             shadow-xl 
             mx-auto
              hover:shadow-fuchsia-400
              hover:scale-110
              duration-700 
              ">
                <img
                    className='rounded-lg'
                    src="https://i.ibb.co/mNyxYHC/12-prev-ui-1.png" alt="s" />
                <div className="card-body font-semibold ">
                    <h2 className="card-title ">toy er name</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
        </div>
    );
};

export default ToyDetails;