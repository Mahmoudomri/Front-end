import React from "react";
import ThreeColumnWithProfileImage from "./testimonials/ThreeColumnWithProfileImage";
import causeC from "./images/causeC.png";
import causeD from "./images/causeD.png";
import AnimationRevealPage from "./components/helpers/AnimationRevealPage";

const LesCauses = () => {
  const testimonials = [
    {
      imageSrc: causeC,
      quote:
        "Les RPS en milieu de travail résultent d’uncumul de contraintes physiques, psychiques et de conditions de travail difficiles :Organisation du travail stressante, Confrontation à la maladie, à la fin de vie, à la mort, Agressivité générée par les troubles cognitifs des patients, Crainte du risque d’errance ou de sortie non autorisée.",
      customerName:
        "La charge émotionnelle et les risques psychosociaux  ",
    },
    {
      imageSrc: causeD,
      quote:
        " L’organisation du travail en établissement de soins nécessite la présence en continu de personnel de soins. Le travail de nuit et le travail posté (travail en équipes successives alternantes) est indispensable pour assurer la continuité des soins. Ils font l’objet d’une réglementation spécifique sur les horaires atypiques",
      customerName:
        "Les risques liés aux horaires atypiques  ",
    },
  ];
  return (
    <>
    <AnimationRevealPage>

      <ThreeColumnWithProfileImage heading="les causes" />
      <ThreeColumnWithProfileImage testimonials={testimonials} />
    </AnimationRevealPage>
    </>
  );
};

export default LesCauses;
