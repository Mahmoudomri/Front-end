import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "./components/misc/Headings";
import defaultCardImage from "./images/check-circle.svg";
import Rec1 from "./images/Rec1.jpg";
import Rec2 from "./images/Rec2.jpg";
import one from "./images/infirmiere.png";
import two from "./images/infirmier3.png";
import three from "./images/infirmier4.png";
import four from "./images/infirmiers.png";
import gestion from "./images/gestion.png"
import crise from "./images/crise.jpg"
import StressSt from "./images/stressSt.png"


import TwoColWithButton from "./components/features/TwoColWithButton";
import AnimationRevealPage from "./components/helpers/AnimationRevealPage";
import VerticalWithAlternateImageAndText from "./components/features/VerticalWithAlternateImageAndText";
import ThreeColumnWithProfileImage from "./testimonials/ThreeColumnWithProfileImage";

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-2xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const FHeading = tw(SectionHeading)`w-full`;

const Subheading = tw(SubheadingBase)`text-center md:text-left ml-24 text-lg`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-gray-700`;
const imageCss = tw`rounded-4xl max-w-2xl`;
const HighlightedText3 = tw.span` text-black px-4 transform -skew-x-12 inline-block font-serif text-[25px] `;

const HighlightedText2 = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block font-serif text-[25px] `;
const cards = [
  {
    imageSrc: one,
    subtitle: "",
    title: "	Organiser le travail : ",
    description:
      "  Planifier le travail de manière à ne pas avoir à faire face à une surcharge de travail. Évitez de prendre trop de tâches et prioriser les tâches les plus importantes. Utiliser des outils de planification pour vous aider à organiser le travail.",
    url: "https://timerse.com",
  },

  {
    imageSrc: two,
    subtitle: "",
    title: "  	Établir des limites et Pratiquer la pleine conscience : ",
    description:
      "Établir des limites claires entre la vie professionnelle et la vie privée. Il est important de prendre du temps pour lui-même et pour les proches afin de maintenir un équilibre sain.   Et Pratiquer la pleine conscience pour aider les infirmiers à mieux concentrer sur le moment présent et à réduire le stress. Cela peut également les aider à mieux gérer leurs émotions et à mieux comprendre les sentiments des patients..",
    url: "https://timerse.com",
  },

  {
    imageSrc: three,
    subtitle: "",
    title: "  	Adopter une approche collaborative  et  	Éviter l'isolement ",
    description:
      "Travailler en équipe et collaborer avec les collègues pour soutenir mutuellement. Utiliser la communication ouverte pour discuter des problèmes et trouver des solutions ensemble. Et Parler avec les collègues et échangez avec eux sur les expériences. Cela peut vous aider à sentir moins isolé et à mieux comprendre les défis que les infirmiers rencontrent.",
    url: "https://timerse.com",
  },

  {
    imageSrc: four,
    subtitle: "",
    title: " 	Demander de l'aide  ",
    description:
      "Si les infirmiers éprouvent des difficultés, n'hésitez pas à demander de l'aide à un collègue, à un superviseur ou à un professionnel de la santé. Les services de santé au travail peuvent également être utiles pour identifier les RPS et proposer des solutions pour y faire face.",
    url: "https://timerse.com",
  },
];
const testimonials = [
    {
      imageSrc: gestion,
      quote:
        " 	Les infirmiers peuvent se former à la gestion des émotions afin de mieux faire face aux situations stressantes. Cette formation peut leur apprendre des techniques pour maîtriser les émotions négatives, tout en se concentrant sur les émotions positives. L'objectif est de permettre aux infirmiers de mieux comprendre leurs propres émotions et celles de leurs patients, et de réagir de manière appropriée pour maintenir un environnement de travail positif et productif. Cette formation peut contribuer à améliorer la qualité des soins et la satisfaction des patients.",
      customerName:
        "gestion des émotions  ",
    },
    {
      imageSrc: crise,
      quote:
        " Apprendre à reconnaître les signes avant-coureurs : Les infirmiers devraient apprendre à reconnaître les signes avant-coureurs de stress, d'épuisement professionnel et de traumatisme lié aux soins. Cela leur permettra de prendre des mesures préventives pour éviter ces problèmes afin de détecter à temps la survenue de ces complications.",
      customerName:
        "les signes avant-coureurs  ",
    },
  ];
  const testimonialss = [
    {
      imageSrc: StressSt,
      quote:
        " 	 	Les infirmiers devraient se familiariser avec des stratégies de gestion du stress pour mieux gérer leur travail et prévenir le stress professionnel. Parmi les techniques qui peuvent leur être enseignées figurent celles de la relaxation, de la méditation, ainsi que d'autres techniques éprouvées pour réduire le niveau de stress. L'objectif de cette formation est d'aider les infirmiers à développer des compétences leur permettant de faire face aux défis du travail quotidien avec une meilleure résilience et une capacité de récupération accrue.",
      customerName:
        "des stratégies de gestion du stress   ",
    }
  ];
const Rec = () => {
  return (
    <>
      <AnimationRevealPage>
        <FHeading>RECOMMANDATION</FHeading>
        <TwoColumn>
          <TextColumn textOnLeft={true}>
            <TextContent>
              <Subheading></Subheading>
              <Heading>I.Dans le domaine de la recherche:</Heading>
              <Description>
                <img src={defaultCardImage} alt="" />
                <br />
                Refaire cette recherche puisqu’elle a pour but d’identifier et
                décrire les facteurs de risque spécifiques de travail et aux
                milieux hospitalière plus précisément au sein des services
                d’oncologie. Cela peut inclure des enquêtes sur les exigences du
                travail, les contraintes organisationnelles, les conditions de
                travail, et les relations interpersonnelles au travail.
              </Description>
            </TextContent>
          </TextColumn>

          <TextColumn textOnLeft={false}>
            <TextContent>
              <Subheading></Subheading>
              <Description style={{ marginTop: "180px" }}>
                <img src={defaultCardImage} alt="" />
                <br />
                Développer des outils de mesure : la recherche devrait
                développer des outils de mesure valides et fiables pour évaluer
                les risques psychosociaux, tels que des questionnaires, des
                entretiens, et des observations. Tout ça permettra de mieux
                comprendre la nature et l'ampleur des risques psychosociaux, et
                de mieux cibler les interventions préventives et les stratégies
                de gestion.
              </Description>
            </TextContent>
          </TextColumn>
        </TwoColumn>
        <TwoColumn>
          <TextColumn textOnLeft={true}>
            <TextContent>
              <Subheading></Subheading>
              <Description>
                <defaultCardImage />
                <img src={defaultCardImage} alt="" />
                <br />
                Étudier les effets sur la santé : la recherche devrait évaluer
                les effets des risques psychosociaux sur la santé mentale et
                physique des infirmiers, tels que le stress, l'épuisement
                professionnel, l'anxiété et la dépression. Les résultats peuvent
                aider à informer les politiques de santé pour protéger les
                infirmiers.
              </Description>
            </TextContent>
          </TextColumn>
        </TwoColumn>
        <Heading style={{ marginLeft: "60px" }}>
          II.Dans le domaine de la pratique :
        </Heading>
        <Subheading>Recommandation pour le gouvernement </Subheading>

        <TwoColWithButton
          imageRounded
          subheading=""
          heading={
            <HighlightedText2>
              Souligner l'importance de formation en prévention et en
              intervention:
            </HighlightedText2>
          }
          imageDecoratorBlob={true}
          description={
            <Description>
              puisque la formation en prévention et en intervention permet de
              former des personnes capables d'identifier les situations à
              risque, de mettre en place des actions préventives, et de proposer
              des solutions d'intervention adaptées en cas de situation
              critique.
              <br />
              <br />
            </Description>
          }
          buttonRounded={false}
          textOnLeft={false}
          primaryButtonText="read more"
          imageSrc={Rec1}
          imageCss={imageCss}
          imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
          primaryButtonUrl="/profile"
        />
        <TwoColWithButton
          imageRounded
          subheading=""
          heading={
            <HighlightedText2>
              Financer la recherche et le développement:
            </HighlightedText2>
          }
          imageDecoratorBlob={true}
          description={
            <Description>
              le gouvernement peut financer la recherche et le développement
              pour améliorer la compréhension des risques psychosociaux et des
              moyens de les prévenir. Cela peut inclure la recherche sur les
              facteurs de risque, les interventions préventives, les stratégies
              de gestion, ou encore l'impact économique des risques
              psychosociaux sur les établissements de la santé et la société.
              <pre></pre>
              <HighlightedText2>
                Sensibiliser et informer les établissements de la santé et les employés:
              </HighlightedText2>
              <pre></pre>
              le gouvernement peut jouer un rôle clé dans la sensibilisation et
              l'information des établissements de la santé et des employés sur les risques
              psychosociaux, leurs conséquences et les moyens de les prévenir.
              Cela peut se faire à travers des campagnes de sensibilisation, des
              brochures informatives, des vidéos explicatives, ou encore des
              événements de formation.
              <br />
              <br />
            </Description>
          }
          buttonRounded={false}
          textOnLeft={false}
          primaryButtonText="read more"
          imageSrc={Rec2}
          imageCss={imageCss}
          imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
          primaryButtonUrl="/profile"
        />
        <Subheading>Recommandatio Pour les soignants </Subheading>
        <HighlightedText3>
          Les RPS peuvent affecter les professionnels de santé, notamment les
          soignants qui sont souvent confrontés à des situations stressantes.
          Voici quelques recommandations pour les aider à faire face aux RPS:
        </HighlightedText3>

        <VerticalWithAlternateImageAndText cards={cards} Prévention="" />
        <Heading>III.Dans le domaine de la formation :</Heading>
        <ThreeColumnWithProfileImage testimonials={testimonials} />
        <ThreeColumnWithProfileImage  testimonials={testimonialss}/>
      </AnimationRevealPage>
    </>
  );
};

export default Rec;
