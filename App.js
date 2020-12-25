import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Appbar, Avatar, Card, Title} from 'react-native-paper';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View>
        <ScrollView
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}>
          <Appbar.Header>
            <Appbar.BackAction
              onPress={() => {
                alert('previous secreen');
              }}
            />
            <Appbar.Content
              titleStyle={{textAlign: 'center'}}
              title="Sweaters"
            />

            <Appbar.Action
              icon="cart-outline"
              onPress={() => {
                alert('cart');
              }}
            />
          </Appbar.Header>

          <View style={styles.container}>
            <Image
              resizeMode="cover"
              source={require('./components/images/image.jpg')}
              style={{width: '100%', height: 500}}
            />
          </View>
          <View style={styles.avatar}>
            <Avatar.Image
              style={{marginRight: 20}}
              size={50}
              source={require('./components/images/image.jpg')}
            />
            <Avatar.Image
              style={{marginRight: 20}}
              size={50}
              source={require('./components/images/image.jpg')}
            />
            <Avatar.Image
              style={{marginRight: 20}}
              size={50}
              source={require('./components/images/image.jpg')}
            />
          </View>
          <View style={{marginTop: 10, alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Stand Collar Bishop Sleeves Sweaters
            </Text>
          </View>
          <View style={{marginTop: 10, alignItems: 'center'}}>
            <Text>Lorem ipsum dolor sit amet, consectetur</Text>
            <Text style={{marginTop: 10, alignItems: 'center'}}>
              adipiscing elit Aenean quis sollicitud
            </Text>
          </View>
          <View style={styles.function}>
            <View style={{flex: 1, flexDirection: 'row', marginLeft: 25}}>
              <Icon
                name="truck-fast"
                size={23}
                color="#000080"
                style={{marginRight: 20}}
              />
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>Free </Text>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>shipping</Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Icon name="watch" size={30} color="#000080" />
              <View style={{flexDirection: 'column', marginLeft: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>24 Hour </Text>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>Delivery</Text>
              </View>
            </View>

            <View>
              <Icon
                size={24}
                name="audio-video"
                color="#000080"
                style={{marginRight: 20}}
              />
            </View>
          </View>
          <View style={styles.product}>
            <Text style={{fontWeight: 'bold', fontSize: 14, marginRight: 50}}>
              Product Rating
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 14, color: '#daa520'}}>
              39 Reviews
            </Text>
          </View>
          <View style={styles.star}>
            <View style={styles.star}>
              <Icon size={20} name="star" color="#daa520" />
              <Icon size={20} name="star" color="#daa520" />
              <Icon size={20} name="star" color="#daa520" />
              <Icon size={20} name="star" color="#daa520" />
              <Icon size={20} name="star" color="#daa520" />
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: '#daa520',
                  marginLeft: 15,
                }}>
                4.5
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              
                <Avatar.Image  style={{left:45}}
                  size={30}
                  source={require('./components/images/image.jpg')}
                />
                           
              <Avatar.Image style={{left:35}}
                size={30}
                source={require('./components/images/image.jpg')}
              />
              <Avatar.Image style={{left:25}}
                size={30}
                source={require('./components/images/image.jpg')}
              />

              <Avatar.Image style={{left:15}}
                size={30}
                source={require('./components/images/image.jpg')}
              />
              <Avatar.Text
                size={30}
                label="+35"
                labelStyle={{fontWeight: 'bold'}}
                color="white"
                style={{backgroundColor: '#daa520'}}
              />
            </View>
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 14, marginTop: 20}}>
            Size
          </Text>

          <View style={styles.surface}>
            <View >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 30,
                  color: 'blue',
                  padding: 10,
                }}>
                S
              </Text>
            </View>
            <View >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 30,
                  padding: 10,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                  elevation: 5000,
                }}>
                M
              </Text>
            </View>
            <View >
              <Text style={{fontWeight: 'bold', fontSize: 30, padding: 10}}>
                L
              </Text>
            </View>
            <View >
              <Text style={{fontWeight: 'bold', fontSize: 30, padding: 10}}>
                2XL
              </Text>
            </View>
            <View >
              <Text style={{fontWeight: 'bold', fontSize: 30, padding: 10}}>
                3XL
              </Text>
            </View>
          </View>

          <View>
            <Text style={{fontWeight: 'bold', fontSize: 14, marginBottom: 15}}>
              Color
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.circle1}>
              <Text></Text>
            </View>
            <View style={styles.circle2} />
            <View style={styles.circle3} />
          </View>

          <View style={{marginTop: 18}}>
            <Text style={{fontWeight: 'bold', fontSize: 14, marginBottom: 20,marginLeft:10}}>
              You may also like
            </Text>
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 10,
                overflow: 'hidden',
                flexDirection: 'row',
                marginLeft: 10,
              }}>
              <View style={{}}>
                <Image
                  source={require('./components/images/image1.jpg')}
                  style={{height: 100, width: 100, borderRadius: 5,marginTop:10,}}
                />
              </View>
              <View style={{marginLeft: 10,marginTop:10,}}>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>
                  Leaf Design Dress
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'darkblue'}}>$24.90</Text>
                  <Text style={{color: '#daa520', fontWeight: 'bold'}}>
                    <Icon size={20} name="star" color="#daa520" />
                    4.5
                  </Text>
                </View>

                <Text style={{fontWeight: '200', fontSize: 14}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Text>
                <Text style={{fontWeight: '100', fontSize: 14}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 10,
                overflow: 'hidden',
                flexDirection: 'row',
                marginLeft: 10,
                marginTop: 20,
              }}>
              <View style={{}}>
                <Image
                  source={require('./components/images/image2.jpg')}
                  style={{height: 100, width: 100, borderRadius: 5,marginTop:10,}}
                />
              </View>
              <View style={{marginLeft: 10,marginTop:10,}}>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>
                  Leaf Design Dress
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'darkblue'}}>$24.90</Text>
                  <Text style={{color: '#daa520', fontWeight: 'bold'}}>
                    <Icon size={20} name="star" color="#daa520" />
                    4.5
                  </Text>
                </View>

                <Text style={{fontWeight: '200', fontSize: 14}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Text>
                <Text style={{fontWeight: '100', fontSize: 14}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // marginTop:50,
    // position: 'absolute',
    // backgroundColor: 'blue'
  },
  avatar: {
    flexDirection: 'row',
    marginTop: 15,

    justifyContent: 'center',
  },
  function: {
    marginTop: 15,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  product: {
    marginTop: 20,
    marginLeft:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  star: {
    flex: 1,
    marginLeft:5,
    flexDirection: 'row',
    // alignSelf: 'flex-start',
    marginTop: 10,
    // justifyContent:'space-between',
  },

  surface: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // height: 80,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // backgroundColor: '#eee',

    elevation: 4,
  },
  circle1: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'grey',
    marginLeft:10,
  },
  circle2: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'lightblue',
    marginLeft: 15,
  },
  circle3: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'chocolate',
    marginLeft: 15,
  },
});

export default App;
