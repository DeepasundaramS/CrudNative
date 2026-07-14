import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.configure({
    name: 'MyApp',
})
    .useReactNative()
    .connect();

console = reactotron;
export default reactotron;