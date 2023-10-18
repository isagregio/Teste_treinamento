import Test from 'components/TestComponent';
import * as S from './styles';

const HomeTemplate = () => (
    <S.Container>
        <S.Title>Teste mudando o texto.</S.Title>
        <Test title="Esse componente é um teste" />
    </S.Container>
);
export default HomeTemplate;
