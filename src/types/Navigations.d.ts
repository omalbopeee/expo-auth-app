export type RootStackParamsList = {
    Home: undefined;
    Details: {itemId: number};
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamsList {}
    }
}