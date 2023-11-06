//@refresh
import HomeMain from "@/components/front/HomeMain";
import Wrapper from "@/layout/DefaultWrapper";
import Script from "next/script";


const  Home = () => {
  
  return (
    <>
      <Wrapper>
        <main>
          <HomeMain />
        </main>
      
      
<Script type="text/javascript">
  {`
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6548915fa84dd54dc488dd43/1hehnfpag';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
`}
</Script>

      </Wrapper>
      
    </>
  );
}

export default Home