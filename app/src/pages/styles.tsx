import styled from "styled-components";

export const HomeContainer = styled.main`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
`;

export const ContentContainer = styled.section`
  display: flex;
  align-items: center;
  max-width: 1024px;
  padding: 40px;
  margin: 0 auto;
  justify-content: space-between;
  width: 100%;
  .skiller {
    width: 100%;
    max-width: 400px;
  }
  h1 {
    max-width: 400px;
    font-size: 3rem;
    color: var(--secondary);
    span {
      color: var(--primary);
    }
  }
  @media screen and (max-width: 768px) {
    .skiller {
      display: none;
    }
    h1 {
      max-width: 668px;
      text-align: center;
    }
    justify-content: center;
  }
`;

export const AuthenticateContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 80px);
  max-width: 512px;
  margin: 0 auto;
`;

export const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h2`
  color: var(--primary);
  margin: 0 auto;
`;

export const Label = styled.label`
  margin-top: 10px;
  color: var(--primary);
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: 1px solid transparent;
  transition: all 0.2s ease;
  &:focus,
  &:focus-visible {
    outline-color: var(--secondary);
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--primary);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #966824;
  }
`;

export const ErrorContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 80px);
  a {
    text-decoration: none;
  }
  h4 {
    font-weight: bolder;
    font-size: 8rem;
    color: var(--primary);
  }
  p {
    font-weight: bold;
    font-size: 1.25rem;
    color: var(--secondary);
  }
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  border: 2px solid var(--primary);
  color: var(--primary);
  transition: all 0.2s ease;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: var(--primary);
    color: white;
  }
  &.logout {
    border: 2px solid #e44a4a;
    color: #e44a4a;
    &:hover {
      background-color: #e44a4a;
      color: white;
    }
  }
`;

export const FieldsContainer = styled.main`
  min-height: calc(100vh - 80px);
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  max-width: 1024px;
  margin: 0 auto;
  h1 {
    font-size: 1.75rem;
    color: var(--secondary);
    font-weight: bold;
    span {
      color: var(--primary);
    }
  }
  img {
    height: 100%;
    max-height: 400px;
    user-select: none;
  }
`;

export const StudentsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 20px;
  gap: 1rem;
`;
