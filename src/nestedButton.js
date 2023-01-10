import { TouchableOpacity, Text } from 'react-native';

export const NestedButton = () => {
    return (
        <TouchableOpacity
            style={{ borderWidth: 1, margin: 5, padding: 10, backgroundColor: '#ddd' }}>
            <Text>This is the wrapper button </Text>
            <TouchableOpacity style={{ backgroundColor: 'red', padding: 5, width: '50%', marginTop: 10 }}>
                <Text>I'm a small button</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}