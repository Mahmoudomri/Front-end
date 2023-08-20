import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "../components/misc/Headings";
import { SectionDescription } from "../components/misc/Typography.js";

import defaultCardImage from "../images/check-circle.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../images/svg-decorator-blob-3.svg";

//import SupportIconImage from "../images/support-icon.svg";
// import ShieldIconImage from "images/shield-icon.svg";
// import CustomizeIconImage from "images/customize-icon.svg";
// import FastIconImage from "images/fast-icon.svg";
// import ReliableIconImage from "images/reliable-icon.svg";
// import SimpleIconImage from "images/simple-icon.svg";
const Subheading = tw(SubheadingBase)`mb-4`;

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center text-primary-400`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0 `}
    img {
      ${tw`w-6 h-6 `}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none `}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium  leading-loose text-gray-600`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const ThreeColWithSideImage= ({ cards = null, heading = "Amazing Features", subheading = "", description = "Voici les principales conclusions tirées des résultats de notre enquête menée auprès de 62 infirmiers." }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: "",
      title: "Charge de travail ",
      description: "la majorité de notre population soit 46.8%  déclarent qu'ils souffrent d'un charge de travail élevé."
    },{
      imageSrc: "",
      title: "Stress ",
      description: "On a trouvé que presque les 2/3 de notre population déclarent un niveau de stress élevé et uniquement 6,5% disent que ce niveau est faible."
    },{
      imageSrc: "",
      title: "Epuisement",
      description: "On a remarqué que le niveau d’épuisement est déclaré très élevé par presque les 2/3 des enquêtés avec un niveau élevé de 67.7%."
    },{
      imageSrc: "",
      title: "Exigences émotionnelles",
      description: "Notre étude prouve que le niveau des exigences émotionnelles requis par le travail est élevé estimé par 64.5%."
    },{
      imageSrc: "",
      title: "Conflits famille/travail",
      description: "Selon notre enquête  presque les 2/3 de notre population présentent des conflits familiaux fréquents."
    },{
      imageSrc: "",
      title: "Satisfaction de travail",
      description: "La majorité de notre population déclarent qu’ils ne sont pas satisfaits au travail avec un taux de 88.7%."
    }
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span style={{color:"blue"}} className="imageContainer">
                <img  src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p  className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
export default ThreeColWithSideImage