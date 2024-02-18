import * as React from "react";
import africaSrc from '../images/africa.png';
import cardSrc from '../images/card.png';
import cardSrc2 from '../images/card2.png';
import cardSrc3 from '../images/card3.png';

const IndexPage = () => {
  return (
    <>
      <main className="main">
        <div className="container space-y-32 pb-6">
          <section className='py-8'>
            <div className='flex flex-row-reverse'>
              <img src={africaSrc} className='w-2/12'/>
            </div>
            <div className='hero pb-8 space-y-6 lg:w-10/12'>
              <h1 className='font-black'>
                <span className='text-green'>Control</span> money you send before it arrives
              </h1>
              <p className='text-2xl font-medium'>
                FPN tracks money you send back home and control how it’s spent using mobile money checks.  
              </p>
              <div>
                <input 
                  type="email"
                  placeholder="Enter email"
                  value="" name="EMAIL"
                  className="
                    p-6 border-solid border-2 border-black 
                    placeholder:text-gray placeholder:text-lg
                    rounded-md
                    border-right-none
                    w-5/12
                  "
                  required 
                />
                <input 
                  type="submit"
                  value="Sign Up"
                  name="subscribe"
                  className="
                    p-6 border-solid border-2 border-black 
                    placeholder:text-gray placeholder:text-lg
                    bg-green text-white
                    border-left-none
                    rounded-md
                  "
                />
              </div>
            </div>
          </section>
          <section className='space-y-10 w-10/12 mx-auto flex flex-col items-center text-center'>
            <div className='text-5xl leading-tight font-bold justify-center items-center'>
              Control and own your money. <br />
              <span className='text-green'>
                No more tricks.
              </span>
            </div>
            <div className="text-center text-xl">
              Send a <span className='font-bold'>Merchant Check</span> with M-Pesa that can only be spent at trusted businesses you specify. Protect your money from being misspent, stolen, or scammed by recipients. Recall any unused cash anytime instantly.
            </div>
            <img src={cardSrc} className='w-10/12' />
          </section>
          <section className='space-y-10 w-10/12 mx-auto flex flex-col items-center text-center'>
            <div className='text-5xl font-bold justify-center items-center'>
              Flexible and convenient, too.
            </div>
            <div className="text-center text-xl">
              Send an <span className='font-bold'>Open Check</span> with M-Pesa that can be spent conveniently with any merchant anywhere. Set limits and track all payments with receipts in real time. Be the first to know what they're buying.
            </div>
            <img src={cardSrc2} className='w-10/12'/>
          </section>
          <section className='space-y-10 w-10/12 mx-auto flex flex-col items-center text-center'>
            <div className='text-5xl font-bold justify-center items-center'>
              Stay in the know
            </div>
            <div className="text-center text-xl">
              View your transactions for all your virtual checks. Know where and how your money is spent, and verify the details of your purchases.
            </div>
            <img src={cardSrc3} className='w-10/12'/>
          </section>
          <section className='space-y-10 mb-40 w-9/12 mx-auto flex flex-col items-center text-center'>
            <div className='text-7xl font-black justify-center items-center'>
              Ready to send your <span className="text-green">first check?</span>
            </div>
            <div className="text-center font-medium text-2xl">
              Get control and verification of your recipient's spending the next time you send money.
            </div>
            <div>
              <input 
                type="email"
                placeholder="Enter email"
                value="" name="EMAIL"
                className="
                p-6 border-solid border-2 border-black 
                placeholder:text-gray placeholder:text-lg
                rounded-md
                border-right-none
                "
                required 
              />
              <input 
                type="submit"
                value="Sign Up"
                name="subscribe"
                className="
                p-6 border-solid border-2 border-black 
                placeholder:text-gray placeholder:text-lg
                bg-green text-white
                border-left-none
                rounded-md
                "
              />
            </div>
          </section>
          <footer className="
            border-t-2 border-black 
            pt-2 flex flex-col gap-5 md:flex-row items-center justify-between mt-20 mb-10 mx-10
          ">
            <div className='flex items-center flex-col sm:flex-row gap-3'>
              <p className='text-sm sm:text-md md:text-lg'>© 2023 FPN Africa. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
