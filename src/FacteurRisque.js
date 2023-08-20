import React from "react";
import styled from "styled-components";

import AnimationRevealPage from "./components/helpers/AnimationRevealPage";
import TwoColWithButton from "./components/features/TwoColWithButton";
import tw from "twin.macro";
import facteur from "./images/nature.jpg";
import { SectionHeading, Subheading } from "./components/misc/Headings";
//const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block italic `;
const imageCss = tw`rounded-4xl max-w-2xl`;
//const Subheading = tw.span`tracking-wider text-sm font-medium`;
const HighlightedText2 = tw.span`text-primary-500 px-4 transform -skew-x-12 inline-block font-serif text-[30px] `;
const HighlightedText = tw.span` bg-primary-500 text-black px-4 transform -skew-x-12 inline-block font-serif text-[30px] `;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-2xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12  md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);
const Description = tw.span`inline-block mt-8 text-black mr-12 ml-12`;
const Heading = tw(
  SectionHeading
)`ml-12 mt-4 font-black text-center text-2xl sm:text-4xl lg:text-4xl text-center md:text-left leading-tight`;
const FacteurRisque = () => {
  return (
    <>
      <AnimationRevealPage>
       
        <TwoColWithButton
          imageRounded
          subheading=""
          heading={
            <>
              <wbr />{" "}
              <HighlightedText2>
              Le but de ce projet est de concevoir une application mobile
               conviviale pour connecter les acheteurs et les vendeurs
                d'objets recyclables
              </HighlightedText2>
            </>
          }
          imageDecoratorBlob={true}
          description={
            <Description>
              <br />
              <br />
            </Description>
          }
          buttonRounded={false}
          textOnLeft={false}
          primaryButtonText="read more"
          imageSrc={facteur}
          imageCss={imageCss}
          imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
          primaryButtonUrl="/profile"
        />
        <HighlightedText></HighlightedText>
        <Description></Description>
       
      </AnimationRevealPage>
    </>
  );
};

export default FacteurRisque;
