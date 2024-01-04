import { FiPlus } from 'react-icons/fi'
import { Content, Div, NewMovie } from './style'
import { Section } from '../../components/Section'
import { Movie } from '../../components/Movie'
import { Header } from '../../components/Header'

export function Home() {
    return (
        <Content>
            <Header/>
            <Section >
                <Div>
                <h2> Meus filmes</h2>
                    <NewMovie to="/new">
                        <FiPlus/>
                        Criar filmes
                    </NewMovie>
                </Div>
                
                <Movie data={{
                    title: "Naruto Shipuden Prison Bloody",
                    tags: [
                        {id: '1', name: 'ação' },
                        {id: '2', name: 'anime' },
                        {id: '3', name: 'luta' }
                    ]

                }}/>
                <Movie data={{
                    title: "Jhon Wick The baba Yaga",
                    tags: [
                        {id: '1', name: 'ação' },
                        {id: '2', name: 'suspense' },
                        {id: '3', name: 'luta' }
                    ]

                }}/>
                <Movie data={{
                    title: "Karate kid",
                    tags: [
                        {id: '1', name: 'ação' },
                        {id: '2', name: 'drama' },
                        {id: '3', name: 'luta' }
                    ]
                }}/>

                <Movie data={{
                    title: "Kung fu Panda",
                    tags: [
                        {id: '1', name: 'ação' },
                        {id: '2', name: 'drama' },
                        {id: '3', name: 'luta' }
                    ]
                }}/>
            </Section>
        </Content>
    )
}