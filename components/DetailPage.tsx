import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import colors from '../assets/colors/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();
MaterialCommunityIcons.loadFont();
const DetailPage = ({route, navigation}) => {
  const item = route.params;

  const renderIngredientItem = ({item}) => {
    return (
      <View
        style={[
          styles.ingredientItemWrapper,
          {
            marginLeft: item.id === 1 ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.ingredientItemImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.leftHeader}>
              <Feather size={12} color={colors.textDark} name="chevron-left" />
            </View>
          </TouchableOpacity>
          <View style={styles.rightHeader}>
            <MaterialCommunityIcons
              size={12}
              color={colors.white}
              name="star"
            />
          </View>
        </View>
      </SafeAreaView>

      {/* Title */}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>{item.title} </Text>
      </View>
      {/* Price */}
      <View style={styles.priceWrapper}>
        <Text style={styles.priceText}>${item.price}</Text>
      </View>
      {/* Image, size, crust, deliver time */}
      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>
              {item.size} {item.sizeNumber}"
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemText}>{item.crust}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery in</Text>
            <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
          </View>
        </View>
        <View>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </View>
      {/* Ingredients */}
      <View style={styles.ingredientWrapper}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        <View style={styles.ingredientListWrapper}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngredientItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {/* Place order */}
      <TouchableOpacity
        onPress={() => alert('Your order has been placed!')}
        activeOpacity={0.7}>
        <View style={styles.orderWrapper}>
          <Text style={styles.orderText}>Place Order</Text>
          <Feather name="chevron-right" size={18} color={colors.black} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  leftHeader: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  rightHeader: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titleText: {
    color: colors.textDark,
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
    width: '50%',
  },

  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    color: colors.price,
    fontSize: 32,
    fontFamily: 'Montserrat-SemiBold',
  },
  infoWrapper: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    color: colors.textLight,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  infoItemText: {
    color: colors.textDark,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
  },

  itemImage: {
    marginLeft: 50,

    resizeMode: 'contain',
  },
  ingredientWrapper: {
    marginTop: 40,
  },
  ingredientsTitle: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },
  ingredientListWrapper: {
    paddingVertical: 20,
  },
  ingredientItemWrapper: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientItemImage: {
    resizeMode: 'contain',
  },
  orderWrapper: {
    marginTop: 60,
    marginHorizontal: 20,
    borderRadius: 50,
    backgroundColor: colors.primary,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginRight: 10,
    color: colors.black,
  },
});
