import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Paediatrician',
    Svg: require('@site/static/img/steth.png').default,
    description: (
      <>
        I am a Neonatal Paediatrician working in Melbourne, Australia.
      </>
    ),
  },
  {
    title: 'Coder',
    Svg: require('@site/static/img/computer.png').default,
    description: (
      <>
        I write medical software. I am interested in the intersection of medicine and technology.
      </>
    ),
  },

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={Svg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
