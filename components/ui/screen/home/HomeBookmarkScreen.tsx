import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {Searchbar} from "react-native-paper";
import DisplayTypeWidget from "@/components/ui/screen/share/DisplayTypeWidget";
import {useEffect, useState} from "react";
import ProductGridViewWidget from "@/components/ui/screen/home/widgets/ProductGridViewWidget";
import ProductListViewWidget from "@/components/ui/screen/home/widgets/ProductListViewWidget";
export default function HomeBookmarkScreen(){
    const [searchText, setSearchText] = useState<string>('');
    const [isGridEnabled, setIsGridEnabled] = useState<boolean>(true);

    const manageGridView = (state: boolean) => {
        setIsGridEnabled(state);
        console.log(state)
    };

    return(
        <View style={styles.container}>
            <Searchbar placeholder={'Search'} onChangeText={(text)=> setSearchText(text) } value={searchText} />
            <DisplayTypeWidget callback={manageGridView} />

            {isGridEnabled ? (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ProductGridViewWidget />
                    <ProductGridViewWidget />
                    <ProductGridViewWidget />
                    <ProductGridViewWidget />
                    <ProductGridViewWidget />
                    <ProductGridViewWidget />
                </ScrollView>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ProductListViewWidget />
                    <ProductListViewWidget />
                    <ProductListViewWidget />
                    <ProductListViewWidget />
                    <ProductListViewWidget />
                    <ProductListViewWidget />
                    <ProductListViewWidget />

                </ScrollView>
            )}

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    }
})