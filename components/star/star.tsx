import React from 'react';
import styles from './star.module.css';

export interface StarProps {
  rating: number|undefined;
  maxRating: number;
}

export function Star(props: StarProps) {
  const roundedRating = props?.rating|| 0 > 0.5 ? Math.ceil(props?.rating||0) : Math.floor(props?.rating||0);

  const stars = Array.from({ length: props.maxRating }, (_, index) => (
    <span key={index}>
      <i
        className={`bi bi-star-fill ${index < roundedRating ? 'text-warning' : 'text-light'} m-1`}
      />
    </span>
  ));

  return <div className={styles.container}>{stars}</div>;
}

export default Star;