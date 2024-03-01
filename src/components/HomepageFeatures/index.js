import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Transformez le Code en Innovation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Optimisez votre travail en exploitant notre gamme complète d'outils,
        conçue pour améliorer la productivité et simplifier le développement,
        que vous souhaitiez enrichir la technologie des Kins ou créer des extensions.
      </>
    ),
  },
  {
    title: 'Révolutionnez le Design d\'IA',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Accédez à un éventail de ressources pour tous les niveaux,
        des bases du design d'IA à des techniques avancées,
        et laissez-vous inspirer pour concevoir et lancer des Kins innovants.
      </>
    ),
  },
  {
    title: 'Communauté DigitalKin',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Rejoignez notre communauté active de développeurs et designers pour partager vos expériences,
        bénéficier de retours constructifs et collaborer sur des projets,accélérant ainsi l'innovation et le développement de solutions IA.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      {/**<div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
  </div>*/}
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
