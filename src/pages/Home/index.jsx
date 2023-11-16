import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'; 

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';


export function Home(){
    return(
        <Container>
            <Brand>
            <h1>RocketNotes</h1>
            </Brand>

            <Header/>

            <Menu>
                 <li><ButtonText title="Todos" /></li>
                 <li><ButtonText title="Express"/></li>
                 <li><ButtonText title="NodeJs"/></li>
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo Título" icon={FiSearch} />
            </Search>
            <Content>
                <Section title="Minhas Notas">
                    <Note data={{title: 'React',
                        tags:[
                            {id: '1', name: 'react'},
                            {id: '2', name: 'rocketseat'}
                        ]
                    }} 
                    />

                </Section>
            </Content>
            <NewNote>
                <FiPlus/>
                Criar Nota
            </NewNote>
        </Container>
    )
}