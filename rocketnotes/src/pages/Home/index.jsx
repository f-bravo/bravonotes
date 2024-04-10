import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNotes } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { ButtonText } from '../../components/ButtonText';

export function Home(){
  return(
    <Container>
      <Brand>
        <h1>Bravonotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" isActive /></li>
        <li><ButtonText title="Node"/></li>
        <li><ButtonText title="React"/></li>

      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>

      </Content>

      <NewNotes>
        <FiPlus />
        Criar Nota
      </NewNotes>

    </Container>
  );
}