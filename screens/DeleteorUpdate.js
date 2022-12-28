import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { getDatabase, ref, child, push, update, remove } from 'firebase/database'
import Checkbox from 'expo-checkbox';

const DeleteorUpdate = ({route}) => {
    const [description, setDescription] = useState('')



    const [pending, setPending] = useState(true)
    const [accepted, setAccepted] = useState(false)
    const [declined, setDeclined] = useState(false)

    const [completed, setCompleted] = useState(false)

  
    const { postpass } = route.params
  
    const db = getDatabase();
    const dbRef = ref(db, 'scannedItems/' + postpass.id);
    handleSubmit = () => {
        
        update(dbRef,{
          id: postpass.id,
          description: postpass.description,
          accepted, accepted,
          declined: declined,
          pending: pending,
          completed: completed,
        })
        .then(() => console.log('Data updated'))
        
      setDescription('')
      setPending('')
      setAccepted('')
      setDeclined('')
      setCompleted('')
    }
  
    const deleteItem = (id) => {
        remove(dbRef)
        .then(() => console.log('success', id))
        .catch(() => console.log('nope'))
    }
  
    const successDelete = () =>{
      Alert.alert("Deleted succesfully")
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add order</Text>
        <View styles={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={postpass.description}
            placeholder={postpass.description}
            onChangeText={text => setDescription(text)}
          />
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>Update</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={pending}
              onValueChange={setPending}
              style={styles.checkbox}
              />
            <Text>Pending?</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={accepted}
              onValueChange={setAccepted}
              style={styles.checkbox}
              />
            <Text>Approve this order?</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={declined}
              onValueChange={setDeclined}
              style={styles.checkbox}
              />
              <Text>Decline this order?</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
            value={completed}
            onValueChange={setCompleted}
            style={styles.checkbox}
            />
            <Text>Order completed?</Text>
          </View>
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity onPress={() => deleteItem(postpass.id)}>
            <View style={styles.deleteButton}>
              <Text style={styles.addButtonText}>DELETE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
    )
}

export default DeleteorUpdate

const styles = StyleSheet.create({
    container: {
      flex: 2,
    },
    inputContainer: {
      backgroundColor: '#ffffff',
      borderTopColor: '#ededed',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 60,
      width: 60,
    },
    inputWrapper: {
      flex: 2,
    },
    input: {
      height: 40,
      padding: 7,
      backgroundColor: '#ededed',
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 10,
  
      marginBottom: 5,
    },
    addButtonText: {
      fontSize: 24,
      lineHeight: 24,
    },
    addButton: {
      width: 120,
      height: 40,
      backgroundColor: '#6cc900',
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    addButtonContainer: {
      flex: 4,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    deleteButton: {
      width: 120,
      height: 40,
      backgroundColor: 'red',
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    title: {
      paddingTop: 30,
      paddingBottom: 20,
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
  })
  