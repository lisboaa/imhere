import { Text, TextInput, Touchable, TouchableOpacity, View, ScrollView } from 'react-native';
import {styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {

  function handlerParticipantAdd(name:string) {
    console.log('Você adicionou o(a) ' + `${name}`);
  }

  function handlerParticipantRemove() {
    console.log('Você clicou para remover um participante');
  }
  
  const participants: string[] = ['Douglas', 'Lisboa', 'Souza', 'Tati', 'Agatha', 'Julie', 'Ursula', 'Tiago', 'Gabi', 'Cadu', 'Artur'];

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
        <TouchableOpacity style={ styles.button } onPress={() => handlerParticipantAdd("Dougl")}>
          <Text style={ styles.buttonText }>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {
          participants.map(participant => (
            <Participant key={participant} name = {participant} onRemove={handlerParticipantRemove}/>
          ))
        }
      </ScrollView>
      
    </View>
  )
}
