import Image from "next/image"
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import QueuePlayNextOutlinedIcon from '@mui/icons-material/QueuePlayNextOutlined';
const Cms = () => {

  const features = [
    {
        icon:
         <PointOfSaleOutlinedIcon />,
        title: "Order management",
        desc: "Stay informed and effortlessly manage your orders from start to finish, ensuring a seamless fulfillment process and superior customer satisfaction. "
    },
    {
        icon:
           <QueuePlayNextOutlinedIcon />,
        title: "Product management",
        desc: "From seamless inventory management to effortless product updates, our CMS empowers you to efficiently showcase your cannabis offerings."
    }
]

    return (

      <section className="py-14  bg-slate-50">
    <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
        <div>
            <div className="max-w-xl space-y-3">
               
                <p className="text-slate-900  font-sans font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Manage your <span className="text-green-500">canna</span> store, anywhere, anytime
                </p>
                <p className="text-slate-800">
                Seamlessly manage your online cannabis store with our powerful CMS. Unlock limitless customization, intuitive inventory management, and a seamless shopping experience. Level up your cannabis business and reach new heights of success. 
                </p>
                            </div>
            <div className="mt-10 max-w-lg lg:max-w-none">
                <ul className="space-y-8">
                    {
                        features.map((item, idx) => (
                            <li key={idx} className="flex gap-x-4">
                                <div className="flex-none w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg text-slate-900 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p className="mt-3 text-sm text-slate-800">
                                        {item.desc}
                                    </p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <div className="mt-12 lg:mt-0">
        <img alt="cms image for canna"  src="/cms_img.png" className="w-full shadow-lg rounded-lg border" />
            </div>
    </div>
</section>
        )
    }
    
    export default Cms



//     <div className="w-full">
//     <div     className="content-container items-center flex flex-col-reverse small:flex-row small:items-center justify-between py-16 relative">
//      <div style={{}} className="cms_text" >
//          <p className="text-2xl-semi  mb-4 drop-shadow-md shadow-black">Our next generation content management system</p>
//          <p>CMS software is designed to be user-friendly, with an intuitive interface that makes it easy for non-technical users to create and manage content. This means that users can focus on creating content, rather than worrying about the technical details of how to publish it.</p>
//          <div className="mt-6">
//      <UnderlineLink href="https://canna.01ninjas.com/services/cms"><h1 style={{color:'#000'}}>Learn more</h1></UnderlineLink>
//    </div>
//      </div>
//      <div  className="relative w-full aspect-video small:w-[55%]">
    
//      <img
// src="/cms_img.png"
// alt=""
// className="absolute inset-0 object-cover shadow-md hover:shadow-xl transition-all duration-500"
// style={{
// width: "100%",
// height: "100%",
// objectFit: "contain",

// }}
// />

//      </div>
//      </div>
  
//  </div>