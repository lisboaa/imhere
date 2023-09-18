import React, { useState } from 'react';
import { Text, TextInput, Touchable, TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
import {styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {


  function handlerParticipantRemove() {
    console.log('Você clicou para remover um participante');
  }

  const [participants, setParticipants] = useState<string[]>([]);
  const [textName, setTextoName] = useState('');

  function handlerParticipantAdd() {
    setParticipants(prevState => [ ...participants, textName])
  }

  function handleSetName(textName: string)
  {
    setTextoName(textName);
  }
  return (
    <View style={ styles.container }>
      <Text style={ styles.eventName }> 
          Nome do evento
      </Text>
      <Text style={ styles.eventDate }>
          Sexta, 4 de Novembro de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
            style={styles.input}
            placeholder='Nome do participante'
            placeholderTextColor='#6b6b6b'
            onChangeText={handleSetName}
            value={textName}
        />
        <TouchableOpacity style={ styles.button } onPress={() => handlerParticipantAdd()}>
          <Text style={ styles.buttonText }>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handlerParticipantRemove()}
          />
        )}
      />
      {/* <ScrollView>
        {
          participants.map(participant => (
            <Participant key={participant} name = {participant} onRemove={handlerParticipantRemove}/>
          ))
        }
      </ScrollView> */}
      
    </View>
  )
}
