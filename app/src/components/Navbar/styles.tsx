import { Link } from "react-router-dom";
import styled from "styled-components";
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px;
  max-height: 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.19);
  a {
    text-decoration: none;
  }
`;

export const NavTitle = styled.figcaption`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  img {
    width: 48px;
    height: 48px;
    border-radius: 100%;
  }
  h1 {
    text-decoration: none;
    color: var(--secondary);
    font-size: 1.25rem;
    font-weight: bolder;
  }
  @media screen and (max-width: 768px) {
    h1 {
      display: none;
    }
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavLink = styled(Link)`
  color: var(--primary);
  text-decoration: none;
  font-weight: bolder;
`;

export const SelectorArticle = styled.article`
  position: absolute;
  top: 60px;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  z-index: 999;
  color: white;
  width: 100%;
  background-color: var(--primary);
`;

export const SelectorFigure = styled.figure`
  padding: 8px 16px;
  background-color: var(--primary);
  transition: all 0.2s ease;
  border-radius: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: #966824;
  }
`;
