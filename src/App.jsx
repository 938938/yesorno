import { useSelector } from 'react-redux';
import * as S from './App.style';
import Main from './Pages/Main';

function App() {
  const bgColor = useSelector((state) => state.answer.bgColor);

  return (
    <S.AppBack bgColor={bgColor}>
      <S.AppFront>
        <Main />
      </S.AppFront>
    </S.AppBack>
  );
}

export default App;
