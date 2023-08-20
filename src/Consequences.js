import React from "react";
import TwoColumnWithImageAndProfilePictureReview from "./testimonials/TwoColumnWithImageAndProfilePictureReview";
import AnimationRevealPage from "./components/helpers/AnimationRevealPage";
import SimpleWithSideImage from "./testimonials/SimpleWithSideImage";
import tw from "twin.macro"

const HighlightedText2 = tw.span`text-primary-500 px-4 transform -skew-x-12 inline-block font-serif text-[30px] `;
const Consequences = () => {
  return (
    <>
      <AnimationRevealPage>
        
      <HighlightedText2>
        props
      </HighlightedText2>
 
      
      
     
   
      
      </AnimationRevealPage>
    </>
  );
};

export default Consequences;
