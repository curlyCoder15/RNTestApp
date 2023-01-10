import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import { data } from './data'

export const List = () => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <ListItem value={item.value} />
            } />
    )
}

const ListItem = ({ value }) => {
    return (
        <TouchableOpacity
            style={{ borderWidth: 1, margin: 5, padding: 10 }}>
            <Text>This is the wrapper button - {value}</Text>
            <TouchableOpacity>
                <Text>I'm a small button</Text>
            </TouchableOpacity>
        </TouchableOpacity>)
}