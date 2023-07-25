import React from 'react';
import { TextInput, Button } from 'react-native';
import renderer, { act } from 'react-test-renderer';
import { mocked } from 'ts-jest/utils';
import { useCreateUser } from '../../../hooks/use-create-service';
import CreateUserForm from '../create-user-form';

jest.mock('../../../hooks/use-create-service');

describe('<CreateUserForm />', () => {
  it('renders correctly', () => {
    const mockMutate = jest.fn();

    mocked(useCreateUser).mockReturnValue({
      mutate: mockMutate,
      isLoading: false,
      isError: false,
      isSuccess: false,
      error: null,
      reset: jest.fn(),
      data: null,
      isIdle: true,
    } as any);

    const tree = renderer.create(<CreateUserForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should change the state when TextInput value is changed', () => {
    const mockMutate = jest.fn();

    mocked(useCreateUser).mockReturnValue({
      mutate: mockMutate,
      isLoading: false,
      isError: false,
      isSuccess: false,
      error: null,
      reset: jest.fn(),
      data: null,
      isIdle: true,
    } as any);

    const testRenderer = renderer.create(<CreateUserForm />);
    const testInstance = testRenderer.root;

    const input = testInstance.findByType(TextInput);
    act(() => {
      input.props.onChangeText('test@email.com');
    });

    expect(input.props.value).toEqual('test@email.com');
  });

  it('should call the mutate function when the button is pressed', () => {
    const mockMutate = jest.fn();

    mocked(useCreateUser).mockReturnValue({
      mutate: mockMutate,
      isLoading: false,
      isError: false,
      isSuccess: false,
      error: null,
      reset: jest.fn(),
      data: null,
      isIdle: true,
    } as any);

    const testRenderer = renderer.create(<CreateUserForm />);
    const testInstance = testRenderer.root;

    const button = testInstance.findByType(Button);
    act(() => {
      button.props.onPress();
    });

    expect(mockMutate).toHaveBeenCalledWith({ email: '' });
  });
});