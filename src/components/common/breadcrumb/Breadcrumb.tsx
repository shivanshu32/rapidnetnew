import React from 'react';
import Link from 'next/link';

interface PropsData {
   title: string | undefined,
   subTitle: string | undefined
}

const Breadcrumb = ({ title, subTitle }: PropsData) => {
   return (
      <>
         <section className="breadcrumb-area breadcrumb-bg">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-md-8">
                     <div className="breadcrumb-content">
                        <h3 className="title">{title}</h3>
                        <nav aria-label="breadcrumb">
                           <ol className="breadcrumb">
                              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                              <li className="breadcrumb-item active" aria-current="page">{subTitle}</li>
                           </ol>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Breadcrumb;