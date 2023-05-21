import { useRecoilState } from "recoil";
import { isDarkState } from "../atoms";
import { styled } from "styled-components";

const ToggleTheme = styled.div`
  width: 30px;
  border-radius: 50%;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  position: fixed;
  right: 10px;
  top: 10px;
  font-size: 16px;

  &:hover {
    box-shadow: 0 2px 5px 1px ${(props) => props.theme.textColor};
  }
`;

export default function DarkMode() {
  const [isDark, setIsDark] = useRecoilState(isDarkState);

  const onClick = () => {
    setIsDark((prev) => !prev);
  };

  return <ToggleTheme onClick={onClick}>{isDark ? "🌞" : "🌙"}</ToggleTheme>;
}
