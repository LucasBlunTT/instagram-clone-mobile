import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Card({ nomeUser, imagem, likes, caption }) {
  return (
    <View style={styles.card}>
      <View style={styles.topCard}>
        <Text style={styles.nomeUser}>{nomeUser}</Text>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={30}
          color="black"
        />
      </View>
      <View style={styles.imagePost}>
        <Image
          source={{ uri: imagem }}
          style={{
            width: '100%',
            height: 350,
            borderRadius: 10,
            resizeMode: 'cover',
          }}
        />
      </View>
      <View style={styles.bottomCard}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="heart-outline"
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="comment-outline"
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="share-outline"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomLike}>
        <Text style={styles.nomeUser}>{likes} likes</Text>
        <Text style={styles.nomeUser}>{caption}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topCard: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  nomeUser: {
    fontWeight: 'bold',
  },
  imagePost: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomCard: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  bottomLike: {
    width: '100%',
    marginLeft: 10,
  },
});
