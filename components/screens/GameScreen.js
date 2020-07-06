import React from 'react'
import styled from "styled-components"
import { Ionicons } from '@expo/vector-icons'
import Text from "../Text"
import gameData from "../../gameData"
import { StatusBar } from 'expo-status-bar'

export default function GameScreen({route, navigation}) {

    const {game} = route.params
    return (
        <GameContainer>
            <StatusBar barStyle="light-content" />

            <GameArtContainer>
                <GameArt source={game.cover}/>

                <BackButton onPress={()=> navigation.goBack()}>
                    <Ionicons name="ios-close" size ={48} color="#fffff"/>
                </BackButton>
            </GameArtContainer>
        </GameContainer>
    )
}

const GameContainer = styled.View`
background-color: #343434
`

const GameArtContainer = styled.View``

const GameArt = styled.Image``

const BackButton = styled.TouchableOpacity``