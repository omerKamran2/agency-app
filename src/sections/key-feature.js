import { Box, Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'High Performance',
    title: 'High Performance',
    text:
      'Our software solutions are designed to optimize performance, ensuring fast and efficient operations that scale with your business needs.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Strategic Partnerships',
    title: 'Strategic Partnerships',
    text:
      'We collaborate with your team to understand your goals and deliver custom solutions that drive long-term success.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Flexible Solutions',
    title: 'Flexible Solutions',
    text:
      'Tailor-made software services, with options to scale or customize features, ensuring that your system grows with you.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Reliable Support',
    title: 'Reliable Support',
    text:
      'Our team is here to assist with any technical challenges or updates, ensuring your software remains dependable and optimized for your business needs.',
  },
];

export default function KeyFeature() {
  return (
    <Box sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Why Us"
          title="Key Benefits of Our Services"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
