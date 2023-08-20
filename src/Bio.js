import React from 'react'
import tw from "twin.macro"
import styled from "styled-components";
import { motion } from "framer-motion";
import { SectionHeading } from './components/misc/Headings';
import { Container, ContentWithPaddingXl } from "./components/misc/Layouts.js";
import GhaithC from "./images/GhaithC.jpg"
import med from "./images/med.jpg"
const Heading = tw(SectionHeading)`text-left lg:text-4xl xl:text-5xl`;

const PopularPostsContainer = tw.div`lg:w-2/3`;
const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
const Post = tw(motion.a)`block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16 no-underline`;
const Image = styled(motion.div)(props => [
  `background-image: url("${props.$imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500 `;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;
const HighlightedText = tw.span`mt-24 bg-primary-500 text-gray-100 px-4 transform lg:text-4xl -skew-x-12 inline-block italic `;

const popularPosts = [
    {
      postImageSrc:
      GhaithC,
      authorImageSrc:
      GhaithC,
      title: "Nasri Ghaith",
      description:
        "Je m'appelle Gaith Nasri, j'ai 22 ans et je suis passionné par la profession d'infirmier. Actuellement étudiant en science infirmière à l'Institut Supérieur de Kef, je suis déterminé à utiliser mes compétences pour aider les autres et améliorer la santé de la communauté. Mon amour pour cette profession découle de ma capacité à apporter du soutien aux patients lorsqu'ils en ont besoin et à être là pour eux dans les moments difficiles. En dehors de mes études, j'aime également explorer ma créativité en design, pratiquer des sports et voyager pour découvrir de nouveaux endroits et cultures. Je suis convaincu que ma passion pour l'infirmerie me permettra de m'épanouir dans ma carrière future et de faire une différence positive dans le monde.",
      authorName: "Nasri Ghaith",
      authorProfile: "Facebook",
      url: "https://www.facebook.com/gaith.nasri.169"
    },
    {
      postImageSrc:
      med,
      authorImageSrc:
      med,
      title: "Gassoumi Med Dhia",
      description:
        "Je m'appelle Gassoumi Med Dhia, j'ai 21 ans je suis de sbeitla gouvernorat Kasserine. Actuellement, je poursuis mes études en sciences infirmières à l'Institut Supérieur de Sciences Infirmières du Kef. Je suis passionné par ce domaine et je suis fier de pouvoir aider les autres en tant qu'infirmier. A location de mon travail fin d'étude j'ai choisie avec mon binôme nasri gaith de faire un site web sur le titre de (les RPS chez les infirmiers travaillant dans les services d'oncologie) Notre objectif est d'atteindre un public le plus large possible pour sensibiliser à cette question importante. Notre travail est crucial pour aider les infirmiers et infirmières à reconnaître et à gérer les risques psychosociaux, et pour améliorer la qualité des soins pour les patients atteints de cancer. J'espère que nous avons contribué à la diffusion d'informations suffisantes sur ce sujet, et nous espérons que vous avez gagné votre admiration .",
      authorName: "Gassoumi Med Dhia",
      authorProfile: "facebook",
      url: "https://www.facebook.com/Dhiaa.2001?mibextid=ZbWKwL"
    }
  ];
const Bio = () => {
    // This setting is for animating the post background image on hover
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%"
    },
    hover: {
      backgroundSize: "110%"
    }
  };
  return (
    
    

        <Container>
            <ContentWithPaddingXl>

            
        <PopularPostsContainer>
            <Heading>Qui Sommes Nous</Heading>
            <PostsContainer>
              {popularPosts.map((post, index) => (
                <Post key={index} href={post.url} className="group" initial="rest" whileHover="hover" animate="rest">
                  <Image
                    transition={{ duration: 0.3 }}
                    variants={postBackgroundSizeAnimation}
                    $imageSrc={post.postImageSrc}
                  />
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <AuthorInfo>
                    <AuthorImage src={post.authorImageSrc} />
                    <AuthorNameAndProfession>
                      <AuthorName>{post.authorName}</AuthorName>
                      <AuthorProfile>{post.authorProfile}</AuthorProfile>
                    </AuthorNameAndProfession>
                  </AuthorInfo>
                </Post>
              ))}
            </PostsContainer>
          </PopularPostsContainer>
          <HighlightedText>Encadré par Mme Ouesleti Marwa </HighlightedText>
          </ContentWithPaddingXl>
        </Container>
    
  )
}

export default Bio