import React, { useState, useRef } from "react"
import styled from "styled-components"
import { StatusBar, Dimensions, Image } from 'react-native'
import Text from "../Text"
import categoriesList from "../../categories"
import games from "../../gameData"

const ex = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}


export default HomeScreen = ({navigation}) => {
    const [selectedCatrgory, setSelectedCatory] = useState("All");

    const gameRef = useRef();

    const changeCategory = (category) => {
        gameRef.current.scrollToOffset({x: 0, y: 0})
        setSelectedCatory(category)
    }

    const GameItem = (game) => {
        return (
            <Game onPress={()=> navigation.navigate("GameScreen", {game: game})}>
                <GameCover source={{ uri: game.item.cover }} />
                <GameInfo backgroundColor={game.item.backgroundcolor}>
                    <GameImage source={{uri: game.item.cover}} />
                    <GameTitle>
                        <Text medium bold>{game.item.title}</Text>
                        <Text small>{game.item.teaser}</Text>
                    </GameTitle>
                </GameInfo>
            </Game>
        )
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" />

            <Header>
                <Text Large>
                    Hello {" "}
                    <Text large bold>
                        DesignIntoCode,
                    </Text>
                    {'\n'}
                    <Text large bold >Best game for today</Text>
                </Text>

                <Avatar source={require('../../assets/avatar.jpg')} />

            </Header>

            <Categories horizontal={true} showsHorizontalScrollIndicator={false}>
                {categoriesList.map((category, index) => {
                    return (
                        <Category key={index} onPress={() => { changeCategory(category) }}>
                            <CategoryName selected={selectedCatrgory === category ? true : false}>{category}</CategoryName>
                            {selectedCatrgory === category && <CategoryDot />}
                        </Category>
                    )
                })}
            </Categories>

            <Games data={games.filter((game) => {
                return game.category.includes(selectedCatrgory) || selectedCatrgory === "All"
            })} 
            keyExtractor={(item) => String(item.id)} 
            renderItem={(item) => GameItem(item)} 
            ref={gameRef}
            />

        </Container>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #343434;
    height: ${ex.height};
    width: ${ex.width};
`;

const Header = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin 16px 32p 0px 32px;
`

const Avatar = styled.Image`
width: 40px;
height: 40px;
`
const Category = styled.TouchableOpacity`
align-items: center;
margin: 0px 16px;
height: 32px;
`;

const Categories = styled.ScrollView`
    margin-top: 32px;
    flex-grow: 0;
`;

const CategoryName = styled(Text)`
color: ${(props) => (props.selected ? "#819ee5" : "#9a9a9a")}
font-weight: ${(props) => (props.selected ? "700" : "500")}
`;

const CategoryDot = styled.View`
width: 6px;
height: 6px;
border-radius: 3px;
background-color: #819ee5
`;

const Games = styled.FlatList`
margin-top: 32px;
flex: 1;
`;

const Game = styled.TouchableOpacity`
    margin-bottom: 32px;
`;

const GameCover = styled.Image`
width: 100%;
height: 200px`;

const GameInfo = styled.View`
margin: -50px 16px 0px 16px;
padding: 16px;
border-radius: 12px;
flex-direction: row;
align-items: center;
`;

const GameImage = styled.Image`
width: 50px;
height: 40px;
border-radius: 8px;
`;

const GameTitle = styled.View`
margin: 0px 24px
`;
