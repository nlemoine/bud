import Link from '@docusaurus/Link'
import React from 'react'

export const Card = ({title, description, links}) => (
  <div className="card">
    <div className="card__header">
      <h3>{title}</h3>
    </div>

    <div className="card__body">
      <p>{description}</p>
    </div>

    <div className="card__footer">
      <div className="button-group button-group--block">
        {links.map((link, id) => (
          <button
            key={id}
            className="button button--secondary"
            onClick={() => (window.location = link[1])}
          >
            <Link to={link[1]}>{link[0]}</Link>
          </button>
        ))}
      </div>
    </div>
  </div>
)
