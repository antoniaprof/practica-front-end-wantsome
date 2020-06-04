import React from "react";

import styles from "./Links.module.scss";

const links = [
  {
    id: 1,
    name: "Become a host",
    path: "www.google.ro",
    className: 'linkText'
  },
  {
    id: 2,
    name: "Help",
    path: "www.google.ro",
    className: 'linkText'
  },
  {
    id: 3,
    name: "Sign up",
    path: "www.google.ro",
    className: 'linkText'
  },
  {
    id: 4,
    name: "Log in",
    path: "www.google.ro",
    className: 'linkText'
  },
];

const Links = () => {
  return (
    <ul className={styles.list}>
      {links.map((link) => (
        <li key={link.id} className={styles.link}>
          <a href={link.path} className={`${styles.linkText} red`}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
