import { Container, Links, Content } from './styles'; 

import { Header } from '../../components/Header';
import { Button } from '../../components/Button'; 
import { ButtonText } from '../../components/ButtonText'; 
import { Section } from '../../components/Section'; 
import { Tag } from '../../components/Tag'; 

export function Details(){
  
  return(
    <Container>
     <Header/>
      <main>
        <Content>
          <ButtonText title="Excluir Nota" />
          <h1>
            Introdução ao React
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Esse laudantium earum et fuga ullam, quisquam dolore doloremque, excepturi illo dolores, vitae aut!
             Dolore nam nobis doloremque, fugiat delectus nostrum voluptate?
          </p>
          <Section title='Links Úteis'>
              <Links>
                <li><a href="#">https://www.rocketseat.com.br/</a></li>
                <li><a href="#">https://www.rocketseat.com.br/</a></li>
              </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
    )
}