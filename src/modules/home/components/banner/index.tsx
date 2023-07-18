import React from 'react'
import MuxVideo from "@mux/mux-video-react";
import UnderlineLink from "@modules/common/components/underline-link"

function banner() {
  return (
    <section className="py-14">
    <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
            <MuxVideo
          className='object-contain w-full h-auto rounded  sm:h-auto'
   style={{
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    
      objectFit:'contain',
   
    
   }}
   playbackId="VWNKT27Ml4Ix014aG02pxssSN43MT9v3Rd0101vsaHEtPXM"
   metadata={{
     video_id: "video-id-1234526",
     video_title: "Super Interesting Video1",
     viewer_user_id: "user-id-bc-as",
   }}
   streamType="on-demand"
   playsInline
   autoPlay
   muted
   loop
 ></MuxVideo>            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                <h3 className="text-green-600 text-sm font-base">
                    Advanced cart demo
                </h3>
                <p className="text-gray-800 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-none">
                Play around with our advanced cart Ecommerce Demo                </p>
                <p className="mt-3 text-gray-600">
                Explore our advanced cannabis ecommerce solution and unlock the full potential of your online store. From browsing to purchase, our advanced cart ecommerce demo delivers a delightful shopping journey. Step into the world of next-level cannabis ecommerce and soar above the competition.                </p>
                <UnderlineLink href="https://cart.01ninjas.com">Explore demo</UnderlineLink>

            </div>
        </div>
    </div>
</section>
  )
}

export default banner
