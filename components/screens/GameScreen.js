import React from 'react'
import styled from "styled-components"
import { Ionicons } from '@expo/vector-icons'
import Text from "../Text"
import gameData from "../../gameData"
import { StatusBar } from 'expo-status-bar'

export default function GameScreen({ route, navigation }) {

    const { game } = route.params

    const renderStarts = () => {

        let stars = []

        for (let s = 1; s <= 5; s++) {
            stars.push(
                <Ionicons key={s} name="ios-star" size={16} style={{ marginRight: 5 }}
                    color={game.item.rating >= s ? "#819ee5" : "#434958"}
                />
            );

        }

        return <Stars>{stars}</Stars>
    }

    return (
        <GameContainer>
            <StatusBar barStyle="light-content" />

            <GameArtContainer>
                <GameArt source={{ uri: game.item.cover }} />

                <BackButton onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-close" size={44} color="#ffffff" />
                </BackButton>
            </GameArtContainer>

            <GameInforContainer>
                <GameThumbContainer>
                    <GameThumb source={{ uri: game.item.cover }} />
                </GameThumbContainer>

                <GameInfor>
                    <Text heavy medium>{game.item.title}</Text>
                    <Text color="#9a9a9a" >{game.item.description}</Text>
                </GameInfor>
                <Download>
                    <Ionicons name="md-cloud-download" size={24} color="#ffffff" />
                </Download>
            </GameInforContainer>
            <GameStatsContainer>
                {renderStarts()}
                <Text heavy color="#9a9a9a">{game.item.rating}</Text>
                <Text bold color="#9a9a9a">{game.item.category}</Text>
                <Text >{game.item.age}</Text>
                <Text bold color="#9a9a9a">Game of the day</Text>
            </GameStatsContainer>
        </GameContainer>
    )
}

const GameContainer = styled.View`
background-color: #343434;
flex: 1;
`

const GameArtContainer = styled.View`
position: relative;
`

const GameArt = styled.Image`
width: 100%;
height: 350px;
border-bottom-left-radius: 32px;
border-bottom-right-radius: 32px;
`

const BackButton = styled.TouchableOpacity`
position: absolute;
top: 40px;
left: 15px;
`
const GameInforContainer = styled.View`
flex-direction: row;
align-items: center;
padding: 16px 0px;
margin: 8px 16px;
`

const GameThumbContainer = styled.View`
shadow-color: #000000;
shadow-offset: 1px 1px;
shadow-opacity: 0.5;
shadow-radius: 2px;
`

const GameThumb = styled.Image`
width: 80px;
height: 80px;
border-radius: 16px;
`

const GameInfor = styled.View`
width: 0;
flex-grow: 1;
margin: 0 8px 0 16px;

`

const Download = styled.View`
background-color: #819ee5;
width: 40px;
height: 40px;
border-radius: 20px;
align-items: center;
justify-content: center;
`

const GameStatsContainer = styled.View`
flex-direction: row;
justify-content: space-between;
margin: 0 16px;
`


const Stars = styled.View`
flex-direction: row`