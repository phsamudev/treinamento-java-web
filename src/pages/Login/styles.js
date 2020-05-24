import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    flex: 0.4;

    input {
      font-size: 1.2rem;
      padding: 0.5rem;
      margin: 6px 0;
      border: 10px solid;
      border-image-slice: 1;
      border-width: 3px;
      border-image-source: linear-gradient(to left, #8ec5fc, #e0c3fc);
    }
  }

  .action {
    flex: 0.3;
    display: flex;
    flex-direction: column;
    align-items: center;

    button,
    a {
      background: none;
      border: none;
      margin: 4px 0;
      font-size: 1.3rem;
      transition: color 200ms ease-in-out;
      width: fit-content;

      &:hover {
        color: #8ec5fc;
      }
    }
  }
`;
