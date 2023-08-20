import React from "react";
import ThreeColWithSideImage from "./testimonials/ThreeColWithSideImage";
import tw from "twin.macro";
import VerticalWithAlternateImageAndText from "./components/features/VerticalWithAlternateImageAndText";
import AnimationRevealPage from "./components/helpers/AnimationRevealPage";
const cards = [
  {
    imageSrc:
      "",
    subtitle: "A) ",
    title: "Prévention primaire ",
    description:
      "La prévention primaire, cherche à repérer le facteur de risque dans l’organisation pour l’éliminer et le supprimer. La prévention primaire se situe au niveau collectif, elle a pour objectif : - Agir sur les causes socio-organisationnelles du mal-être (enrichir les tâches, réorganiser l’activité, mobiliser les collectifs, faire évoluer le management, améliorer les conditions de travail, etc.) et supprimer les agents psychosociaux pathogènes.",
    url: "https://timerse.com"
  },

  {
    imageSrc:
      "",
    subtitle: "B) ",
    title: "Prévention secondaire ",
    description:
      "La prévention secondaire s’intéresse à l’individu, elle correspond à la gestion individuelle et collective des exigences du travail et à l’amélioration des stratégies d’adaptation individu-organisation. On outille l’individu pour lui apprendre à faire face aux RPS : techniques de gestion du stress, relaxation, formation au management, coaching, diffusion de bonnes pratiques, sensibilisation/information auprès des différents acteurs, identifier les problèmes récurrents. Elle tend vers un renforcement des ressources individuelles pour mieux faire face dans l’activité. Elle comporte donc beaucoup d’action de formations et de sensibilisation, telle que la gestion de l’incivilité des usagers (travail des techniques de communications).",
    url: "https://timerse.com"
  },

  {
    imageSrc:
      "",
    subtitle: "C) ",
    title: "Prévention tertiaire ",
    description:
      "La prévention tertiaire n’est plus de la prévention mais de la réparation. C’est la plus utilisée pour la prévention des RPS mais c’est la moins efficace dans la durée. La prévention tertiaire est axée sur les conséquences, elle prend en charge les infirmiers (ères) fragilisés, avec la mise en place de soutien psychologique, de mesures de protection, éviter les rechutes. On tente d’obtenir une diminution des manifestations des RPS pour favoriser le retour au travail.",
    url: "https://timerse.com"
  }
]
const Resultats = () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block italic `;
  return (
    <>
      <AnimationRevealPage>
      
            <>
              <HighlightedText>Tac-Tic</HighlightedText>
            </>
          
        
      </AnimationRevealPage>
    </>
  );
};

export default Resultats;
