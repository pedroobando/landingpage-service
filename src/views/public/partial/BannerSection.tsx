import React from 'react';
// import { Link } from 'react-router-dom';

export interface iButton {
  link: string;
  label: string;
}

export interface iBannerSection {
  id: string;
  title?: string;
  subtitle?: boolean;
  image: string;
  comment: string[];
  actButton?: iButton | null;
  directionright?: boolean;
  classname?: string | null;
}

const BannerSection = ({
  id,
  comment,
  image,
  title = '',
  subtitle = false,
  actButton = null,
  directionright = true,
  classname = null,
}: iBannerSection) => {
  return (
    <section className={`${classname} ${directionright && 'reverse'}`} id={id}>
      <div className="image">
        <img src={image} alt={title} />
      </div>

      <div className="content">
        {!subtitle ? <h3 className="mb-5">{title}</h3> : <h3 className="mb-1">{title}</h3>}
        {comment.map((linesp, idx) => (
          <p key={idx}>{linesp}</p>
        ))}

        {actButton && (
          <a href={actButton.link} className="btn">
            {actButton.label}
          </a>
        )}
      </div>
    </section>
  );
};

export default BannerSection;
