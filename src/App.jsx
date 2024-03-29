import { useSelector } from 'react-redux';
import * as S from './App.style';
import Main from './Pages/Main';

function App() {
  const bgcolor = useSelector((state) => state.answer.bgcolor);

  return (
    <S.AppBack bgcolor={bgcolor}>
      <S.AppFront>
        <Main />
      </S.AppFront>
    </S.AppBack>
  );
}

export default App;
