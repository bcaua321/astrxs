import { Platform } from 'react-native';
import { ActivityIndicator, MD2Colors, Card, Appbar } from 'react-native-paper';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';


const AppBar = () => (
    <Appbar.Header>
       <Appbar.Content title="Astrxs" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
);

export default AppBar;