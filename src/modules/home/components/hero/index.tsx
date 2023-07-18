import UnderlineLink from "@modules/common/components/underline-link"
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import MuxVideo from '@mux/mux-video-react'
import Link from "next/link"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="hero_backdrop"></div>
      <div style={{display:'flex',justifyContent:'center', width:'100%', alignItems:'center', textAlign:'center'}} className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-center small:items-start small:p-32">
        <h1 className="font-sans text-4xl  font-bold tracking-tight text-white sm:text-5xl mb-4 drop-shadow-md shadow-black">
          Your <span className='text-green-500'>canna</span> store here
        </h1>
        <p style={{padding:'0 2rem'}} className="text-base-regular max-w-[42rem] mb-6 drop-shadow-md shadow-black">
        Discover a new level of performance and quality with our native brand store. Explore our demo with extensive selection of sample premium cannabis products, carefully curated for your enjoyment.
        </p>
        <div className="text-lg-regular max-w-lg mb-4" style={{display:'flex', flexDirection:'row', alignItems:"center"}}>
          <Link href="/store">
        <button className="text-black rounded bg-green-500 shadow-2xl border border-slate-900 hover:bg-white hover:text-gray-900 disabled:hover:bg-gray-900 disabled:hover:text-white" style={{marginRight:'20px', padding:'10px 16px', display:'flex', alignItems:'center'}}><StoreOutlinedIcon style={{paddingRight:'6px', fontSize:'28px'}}/>Shop now</button>
        </Link>
        <UnderlineLink href="https://canna.01ninjas.com/about">About us</UnderlineLink>
        </div>
      </div>
      <MuxVideo
       playbackId='fdbENvLeWTlOCNM4c01AGmF1M8DNiRPYTIFlErAAlS400'
        className="hero_video"
        style={{
          borderRadius: '0',
         height:'100%',
         width:'100%',
          objectFit:'cover',
          zIndex: '0',
        }}
        metadata={{
          video_id: 'video-id-12346',
          video_title: 'demo_video',
          viewer_user_id: 'user-id-bc-789',
        }}
        streamType="on-demand"
        preferPlayback="mse"
        nonce="some value"

        autoPlay
      muted
      playsInline
        loop
        
 
      ></MuxVideo>
      
    </div>
  )
}

export default Hero
