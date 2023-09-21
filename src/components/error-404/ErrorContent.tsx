import Link from 'next/link';
import React from 'react';
import errorImg from "../../../public/assets/img/images/404.png"
import Image from 'next/image';
const ErrorContent = () => {
   return (
      <>
         <section className="error-area pt-120 pb-50">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-5 col-lg-6 col-md-8 col-sm-11">
                     <div className="error-img text-center mb-40">
                        <Image src={errorImg} style={{ width: "100%", height: "auto" }} alt="img not found" />
                     </div>
                     <div className="error-content text-center">
                        <h3 className="title">Page Not Found</h3>
                        <p>The page you are looking for was moved, removed,renamed or might never existed.</p>
                        <Link href="/" className="btn">Go Back to Home</Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ErrorContent;