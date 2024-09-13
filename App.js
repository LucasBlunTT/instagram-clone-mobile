import {
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from './components/Card';
import { cardPosts } from './utils/cards-posts';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={'#F56040'} />
      <View style={styles.header}>
        <Image
          source={require('./assets/logoinsta.png')}
          style={{ width: 35, height: 35 }}
        />
        <MaterialCommunityIcons name="chat-outline" size={35} color="black" />
      </View>
      <ScrollView>
        {cardPosts.map((card) => (
          <Card
            key={card.id}
            nomeUser={card.nomeUser}
            imagem={card.imagem}
            likes={card.likes}
            caption={card.caption}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});
