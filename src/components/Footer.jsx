import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <>
      <hr
        className="footer-line"
        style={{
          border: "none",
          background: "212529",
          color: "212529",
          height: "3px",
        }}
      />
      <Box>
        <img
          className="footer-logo"
          src="https://assets.chivas.com/prod/chivas.com/915/static/images/logo.png"
          alt=""
        />
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="/">Main</FooterLink>
              <FooterLink href="/cart">Cart</FooterLink>
              <FooterLink href="/admin-panel/add">Added</FooterLink>
            </Column>
            <Column>
              <Heading>Service</Heading>
              <FooterLink href="/favorites">Favorites</FooterLink>
              <FooterLink href="/admin-panel">Admin panel</FooterLink>
              <FooterLink href="*">Error Page</FooterLink>
            </Column>
            <Column>
              <Heading>Contacts</Heading>
              <FooterLink href="#">+996 555 222 111</FooterLink>
              <FooterLink href="#">+996 777 333 111</FooterLink>
              <FooterLink href="https://github.com/MorgDzh">Github</FooterLink>
              <FooterLink href="https://www.whatsapp.com/?lang=ru">
                Whatsapp
              </FooterLink>
            </Column>
            <Column className="social">
              <Heading>Social</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>Facebook</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>Youtube</span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </>
  );
};
export default Footer;
