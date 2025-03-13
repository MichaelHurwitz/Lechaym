import { useState } from "react";
import styled from "styled-components";

// סגנונות
const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const ChassidIcon = styled.div<{ flipped: boolean }>`
  font-size: 100px;
  transform: ${({ flipped }) => (flipped ? "scaleX(-1)" : "scaleX(1)")};
  transition: transform 0.5s ease;
`;

const GlassButton = styled.button<{ flipped: boolean }>`
  font-size: 40px;
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
  transform: ${({ flipped }) => (flipped ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

const Message = styled.h1`
  font-size: 24px;
  color: #b22222;
`;

const FooterText = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [count, setCount] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    if (count < 10) {
      setCount(count + 1);
      setFlipped(!flipped);
    }
  };

  return (
    <Container>
      <ChassidIcon flipped={count >= 10}>🕍🍾</ChassidIcon>
      <Message>{count < 10 ? "לחיים!" : "משימה הושלמה בהצלחה"}</Message>
      {count < 10 && (
        <>
          <GlassButton flipped={flipped} onClick={handleClick}>🥃</GlassButton>
          <FooterText>לא אמרת מספיק, עוד הפעם!</FooterText>
        </>
      )}
    </Container>
  );
}

export default App;