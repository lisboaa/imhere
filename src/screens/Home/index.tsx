import { Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import {styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {

  function handlerParticipantAdd() {
    console.log('Clicou');
  }

  function handlerParticipantRemove() {
    console.log('Você clicou para remover um participante');
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
        />
        <TouchableOpacity style={ styles.button } onPress={handlerParticipantAdd}>
          <Text style={ styles.buttonText }>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <Participant name = 'Dougl' onRemove={handlerParticipantRemove}/>
    </View>
  )
}
