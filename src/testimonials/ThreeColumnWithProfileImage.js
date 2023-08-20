import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import causeA from "../images/causeA.png";
import causeB from "../images/causeB.png";

import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "../components/misc/Layouts";
import {
  SectionHeading as Heading,
  //Subheading as SubheadingBase,
} from "../components/misc/Headings";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../images/svg-decorator-blob-8.svg";

//const Subheading = tw(SubheadingBase)`text-center`;
const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/2`;
const Testimonial = tw.div`px-4 text-center max-w-lg mx-auto flex flex-col items-center`;
const Image = tw.img`w-[300px] h-[200px] rounded`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`;
const CustomerName = tw.p`mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`}
`;

const ThreeColumnWithProfileImage = ({
  subheading = "Testimonials",
  heading = " ",
  testimonials = [
    {
      imageSrc: causeA,
      quote:
        "L’activité physique est l’une des principales causes d'accidents du travail, de maladies professionnelles et d’inaptitudes au travail dans le secteur de l’aide et des soins à la personne. Certains gestes, postures de travail, manutentions répétées de charge ou de personnes peuvent être à l’origine de fatigue et de douleurs ou engendrer, à moyen et long terme, des lombalgies, des troubles musculosquelettiques (TMS), des entorses, voire des accidents cardiovasculaires.",
      customerName:
        "Les risques liés à l’activité physique et aux manutentions manuelles ",
    },
    {
      imageSrc: causeB,
      quote:
        "Directement liés aux conditions de travail (environnement physique et psychosocial, organisation du travail), ces risques peuvent être aggravés par l’âge, l’état de santé ou les antécédents médicaux des infirmiers (ères). Les symptômes physiques surviennent quand l’infirmier (ère) dépasse ses capacités fonctionnelles et ne bénéficie pas d’une récupération suffisante",
      customerName:
        "Des risques qui augmentent avec le profil de l’infirmier (ère) ",
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {/* {subheading && <Subheading>{subheading}</Subheading>} */}
        <Heading>{heading}</Heading>
        <Testimonials>
          {testimonials.map((testimonial, index) => (
            <TestimonialContainer key={index}>
              <Testimonial>
                <Image src={testimonial.imageSrc} />
                <CustomerName>- {testimonial.customerName}</CustomerName>
                <Quote>{testimonial.quote}</Quote>
              </Testimonial>
            </TestimonialContainer>
          ))}
        </Testimonials>
      </ContentWithPaddingXl>

      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
export default ThreeColumnWithProfileImage;
