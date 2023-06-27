import UnderlineLink from "@modules/common/components/underline-link"


const Cms = () => {

    return (

        <div className="w-full">
           <div     className="content-container items-center flex flex-col-reverse small:flex-row small:items-center justify-between py-16 relative">
            <div style={{}} className="cms_text" >
                <p className="text-2xl-semi  mb-4 drop-shadow-md shadow-black">Our next generation content management system</p>
                <p>CMS software is designed to be user-friendly, with an intuitive interface that makes it easy for non-technical users to create and manage content. This means that users can focus on creating content, rather than worrying about the technical details of how to publish it.</p>
                <div className="mt-6">
            <UnderlineLink href="https://canna.01ninjas.com/services/cms"><h1 style={{color:'#000'}}>Learn more</h1></UnderlineLink>
          </div>
            </div>
            <div  className="relative w-full aspect-video small:w-[55%]">
           
            <img
    src="/cms_img.png"
    alt=""
    className="absolute inset-0 object-cover shadow-md hover:shadow-xl transition-all duration-500"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
    
    }}
  />

            </div>
            </div>
         
        </div>
        )
    }
    
    export default Cms