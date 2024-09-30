import React from 'react';
import {
  Container,
  Box,
  Grid,
  Text,
  Heading
} from 'theme-ui';
import Image from 'next/image';
// import { keyframes } from '@emotion/react'
import TextFeature from 'components/text-feature';

import ServiceThumb from '../assets/service-thumb.png';
import shapePattern from '../assets/shape-pattern1.png';

import Smart from '../assets/services/smart.svg';
import Secure from '../assets/services/secure.svg';

const data = {
  subTitle: 'our services',
  title: 'Driving Success Through Technology',
  features: [
    {
      id: 1,
      imgSrc: Smart,
      altText: 'FullStack Development',
      title: 'FullStack Development',
      text:
        'From concept to deployment, we build robust, scalable web and mobile applications that meet your business needs with seamless integration and modern design.',
    },
    {
      id: 2,
      imgSrc: Secure,
      altText: 'Cloud Services',
      title: 'Cloud Services',
      text:
        'Optimize your cloud infrastructure with our scalable, secure, and cost-effective DevOps services, offering expertise in cloud migration, deployment, automation, and management across AWS, Google Cloud, and Azure to ensure seamless operations and efficient scaling.',
    },
    {
      id: 3,
      imgSrc: Secure,
      altText: 'AI, ML, LLMs & Chatbots Development',
      title: 'AI, ML, LLMs & Chatbots Development',
      text:
        'Leverage the power of Artificial Intelligence and Machine Learning with tailored solutions, including the development of large language models (LLMs) and intelligent chatbots to enhance user interaction and business automation.',
    },
    {
      id: 4,
      imgSrc: Secure,
      altText: 'Technical Documentation',
      title: 'Technical Documentation',
      text:
        'Our team excels in delivering clear, accurate, and engaging technical content tailored to your needs. We provide a range of services, including comprehensive documentation, insightful blog writing, in-depth whitepapers, user manuals, API guides, and case studies.',
    },
  ],
};

export default function ServiceSection() {
  return (
    <Box id='services' sx={{ variant: 'section.services' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={ServiceThumb} alt="Thumbnail" />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature subTitle={data.subTitle} title={data.title} />

          <Grid sx={styles.grid}>
            {data.features.map((item) => (
              <Box sx={styles.card} key={item.id}>
                <Image src={item.imgSrc} alt={item.altText} style={styles.icon} />

                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7],
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    width: '100%',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: '100%',
      width: '100%',
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
  },

  icon: {
    flexShrink: 0,
   marginRight: '10px'
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
};
