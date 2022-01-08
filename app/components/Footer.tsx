import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMail,
} from 'react-icons/io5';
import { socials, SocialType } from '../config/socials';
import { Container } from './Container';

export const IconForSocialType = {
  [SocialType.instagram]: IoLogoInstagram,
  [SocialType.twitter]: IoLogoTwitter,
  [SocialType.email]: IoMail,
  [SocialType.linkedIn]: IoLogoLinkedin,
  [SocialType.github]: IoLogoGithub,
};

const Socials = () => {
  return (
    <section>
      <ul className="text-sm flex space-x-6 mb-4">
        {socials.map((social) => {
          const Icon = IconForSocialType[social.type];

          return (
            <li key={social.type}>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <Icon size={16} className="inline" aria-hidden="true" />
                <span className="sr-only sm:not-sr-only sm:ml-2">{social.label}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="text-sm block">
        <a href="mailto:campuzanojoseph@gmail.com" target="_blank" rel="noopener noreferrer">
          <IoMail size={16} className="inline" aria-hidden="true" />
          <span className="ml-2">Email me</span>
        </a>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-bl from-indigo-900 to-black via-pink-900  text-white">
      <Container>
        <small className="block mb-2">All opinions are my own</small>
        <Socials />
      </Container>
    </footer>
  );
};
