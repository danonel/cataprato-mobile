import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { useCreateUser } from '../../hooks/use-create-service';

function CreateUserForm() {
  const [email, setEmail] = React.useState('');
  const createUserMutation = useCreateUser();

  const onSubmit = () => {
    createUserMutation.mutate({ email });
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <Button onPress={onSubmit} title="Create User" />

    </View>
  );
}

export default CreateUserForm;