//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import AppHeader from "./components/header/Header.js";
import AnimationRevealPage from "./components/helpers/AnimationRevealPage.js";
import TwoColumnWithVideo from "./hero/TwoColumnWithVideo";
import tw from "twin.macro";
import TwoColWithButton from "./components/features/TwoColWithButton";
import { SectionHeading } from "./components/misc/Headings";
import intro from "./images/intro.jpg";
import Risques from "./images/Risques.jpg";
import FacteurRisque from "./FacteurRisque";
import LesCauses from "./LesCauses";
import styled from "styled-components";
import { ReactComponent as SvgDecoratorBlob1 } from "./images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "./images/svg-decorator-blob-7.svg";
import Consequences from "./Consequences";
import Resultats from "./Resultats";
import Rec from "./Rec";
import Bio from "./Bio";
import logo1 from "../src/images/mahmoud.jpg"
import logo2 from "../src/images/mahmoud1.png"
import { PrimaryButton } from "./components/misc/Buttons";
import {SignUp} from "../src/register-login-main/SignUp"
import { Login } from "./register-login-main/Login";

const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block italic `;
const imageCss = tw`rounded-4xl max-w-2xl`;
//const Subheading = tw.span`tracking-wider text-sm font-medium`;
const HighlightedText2 = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block font-serif text-[30px] `;
const Description = tw.span`inline-block mt-8 text-black`;
const Heading = tw(
  SectionHeading
)`ml-12 mt-4 font-black text-center text-2xl sm:text-4xl lg:text-4xl text-center md:text-left leading-tight`;
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-[35px] top-[40px] h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0   top-[20px] h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-primary-500`}
`;

function App() {
  return (
    <>
      <Router>
        <AppHeader />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* 1) */}
                <AnimationRevealPage>
                  <DecoratorBlob1 />
                  <Heading>
                  Devenez un héros
                De l'environnement
                En recyclant avec nous !

                  </Heading>
                  <DecoratorBlob2 />
                  <TwoColWithButton
                    imageRounded
                    subheading=""
                    heading={
                      <><HighlightedText2>
                        Sauver notre Planete !
                        <wbr />{" "}
                        
                          
                        </HighlightedText2>
                      </>
                    }
                    imageDecoratorBlob={true}
                    description={
                      <Description>
                        Bienvenue sur notre site Web de recyclage ! Chez nous, nous croyons fermement
                        que chaque petit geste compte lorsqu'il s'agit de sauver notre planète.
                       C'est pourquoi nous offrons un service de recyclage facile et pratique pour vous aider
                        à réduire votre empreinte carbone. En recyclant avec nous, vous pouvez donner une
                        seconde vie à vos déchets et aider à protéger notre environnement.
                       Nous sommes déterminés à faire notre part pour un avenir durable, et nous espérons
                       que vous vous joindrez à nous dans cette mission.


                        <br />
                        <br />
                      </Description>
                    }
                    buttonRounded={false}
                    textOnLeft={false}
                    primaryButtonText="read more"
                    imageSrc={logo1}
                    imageCss={imageCss}
                    imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
                    primaryButtonUrl="/profile"
                  />
                </AnimationRevealPage>

                {/* 2) */}
                <AnimationRevealPage>
                  <TwoColumnWithVideo
                    heading={
                      <>
                        
                        <HighlightedText>Le Recyclage</HighlightedText>
                      </>
                    }
                    description="  Ensemble des techniques ayant pour objectif de récupérer des déchets et de les réintroduire dans le cycle de production dont ils sont issus. 2. Formation complémentaire donnée à un travailleur pour lui permettre de s'adapter aux progrès dans sa profession ou de se reconvertir dans une nouvelle activité.
          "
                    imageSrc={logo2}
                    imageCss={imageCss}
                    imageDecoratorBlob={true}
                    primaryButtonText="see more"
                    watchVideoButtonText="demo video"
                  /> 
                 
                </AnimationRevealPage>
                
              </>
             }
            
          />

          <Route path="/facteurs" element={<FacteurRisque />} />
          <Route path="/causes" element={<LesCauses />} />
          <Route path="/consequences" element={<Consequences />} />
          <Route path="/resultats" element={<Resultats />} />
          <Route path="/rec" element={<Rec />} />
          <Route path="/about" element={<Bio />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />


        </Routes>
      </Router>

      {/* 3)  */}
    </>
  );
}

export default App;
