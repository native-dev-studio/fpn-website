import React, { useState } from "react";
import africaSrc from '../images/africa.png';
import cardSrc from '../images/card.png';
import cardSrc2 from '../images/card2.png';
import cardSrc3 from '../images/card3.png';

const IndexPage = () => {
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [emailState, setEmailState] = useState<null | boolean>(null);

  const handleSubmit = async (e: any) => {
    setDisabled(true);
    e.preventDefault();

    try {
      const url = 'https://api.sechento.com/signups';
      const resp = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      const data = await resp.json();

      setEmail('');
      setDisabled(false);
      setEmailState(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <main className="main">
        <div className="
          mx-auto max-w-lg md:max-w-screen-md lg:max-w-screen-lg
          space-y-32 pb-6
        ">
          <section className='py-8'>
            <div className='flex flex-row-reverse'>
              <img src={africaSrc} className='w-2/12'/>
            </div>
            <div className='hero space-y-6 lg:w-10/12'>
              <h1 className='md:text-7xl text-5xl font-black'>
                <span className='text-green'>Control</span> money you send before it arrives
              </h1>
              <div className='sm:text-2xl text-xl font-medium'>
                FPN tracks money you send back home and control how it’s spent with mobile money checks.  
              </div>
              <div>
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <input 
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
                      placeholder:text-gray placeholder:text-lg
                      rounded-md
                      p-6 border-solid border-2 border-[#A8A8A8]
                      w-full sm:w-5/12
                    "
                    required 
                  />
                  <button 
                    type="submit"
                    disabled={disabled}
                    className="
                      p-6 border-solid border-2 border-[#A8A8A8]
                      placeholder:text-gray placeholder:text-lg
                      bg-green text-white
                      disabled:opacity-25
                      sm:m-2 
                      w-full sm:w-28
                      rounded-md
                    "
                  >
                    Submit
                  </button>
                </form>
              { emailState && (
                <div className='text-sm font-bold text-green mt-3'>
                  You're all set. Watch your inbox!
                </div>
              )}
              </div>
            </div>
          </section>
          <section className='space-y-10 sm:w-10/12 mx-auto flex flex-col items-center text-center'>
            <div className='sm:text-5xl text-4xl leading-tight font-bold justify-center items-center'>
              Control and own your money. <br className='sm:block hidden' />
              <span className='text-green'>
                No more tricks.
              </span>
            </div>
            <div className="text-center text-xl">
              Send a <span className='font-bold'>Merchant Check</span> with M-Pesa that can only be spent at trusted businesses you specify. Protect your money from being misspent, stolen, or scammed by recipients. Recall any unused cash anytime instantly.
            </div>
            <img src={cardSrc} className='sm:w-10/12' />
          </section>
          <section className='space-y-10 sm:w-10/12 mx-auto flex flex-col items-center text-center'>
            <div className='text-5xl font-bold justify-center items-center'>
              Flexible and convenient, too.
            </div>
            <div className="text-center text-xl">
              Send an <span className='font-bold'>Open Check</span> with M-Pesa that can be spent conveniently with any merchant anywhere. Set limits and track all payments with receipts in real time. Be the first to know what they're buying.
            </div>
            <img src={cardSrc2} className='sm:w-10/12'/>
          </section>
          <section className='space-y-10 sm:w-10/12 mx-auto flex flex-col items-center text-center'>
            <div className='text-5xl font-bold justify-center items-center'>
              Stay in the know
            </div>
            <div className="text-center text-xl">
              View your transactions for all your virtual checks. Know where and how your money is spent, and verify the details of your purchases.
            </div>
            <img src={cardSrc3} className='sm:w-10/12'/>
          </section>
          <section className='space-y-10 mb-40 sm:w-9/12 mx-auto flex flex-col items-center text-center'>
            <div className='md:text-7xl text-5xl font-black justify-center items-center'>
              Ready to send your <span className="text-green">first check?</span>
            </div>
            <div className="text-center font-medium text-2xl">
              Get control and verification of your recipient's spending the next time you send money.
            </div>
            <div className='w-full'>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <input 
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    placeholder:text-gray placeholder:text-lg
                    rounded-md
                    p-6 border-solid border-2 border-[#A8A8A8]
                    w-full sm:w-5/12
                  "
                  required 
                />
                <button 
                  type="submit"
                  disabled={disabled}
                  className="
                    p-6 border-solid border-2 border-[#A8A8A8]
                    placeholder:text-gray placeholder:text-lg
                    bg-green text-white
                    disabled:opacity-25
                    sm:m-2 
                    w-full sm:w-28
                    rounded-md
                  "
                >
                  Submit
                </button>
              </form>
              { emailState && (
                <div className='text-sm font-bold text-green mt-3'>
                  You're all set. Watch your inbox!
                </div>
              )}
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
