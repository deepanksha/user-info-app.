import React from "react";
import { AiFillYoutube, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import "../style/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>User Info Hub</h2>
        <p>We are trying to give you the best possible information</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>All right received @userinfohub</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://github.com/deepanksha">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/deepanksha-pal-28610791/">
          <AiFillLinkedin />
        </a>
        <a href="https://www.youtube.com/@travelvlogs4229">
          <AiFillYoutube />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
