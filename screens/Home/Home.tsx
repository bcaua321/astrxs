import React, { useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native';
import { Image } from './styles';
import { Request } from '../../utils/Request/Request';
import options from '../../utils/Request/Option';

const API_KEY = "1yl1VJCY3CHIK05N0qOTctBNualQALzzlFO8AUeg";
const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`

const obj : options = {
    method: "GET",
    header: {
        contentType: "application/json"
    },
    apiKey: ""
}

export default function Home() {
    const [data, setData] = useState<ApodApi[] | null>(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const fetchDataFromApi = async () => {
          try {
            const result = await Request<ApodApi[]>(url, obj);
            setData(result);
          } catch (error : any) {
            setError(error.message);
          }
        };
    
        fetchDataFromApi();
      }, []);

      console.log(data);

    return <View className="flex-1 items-center justify-center bg-indigo-600">
        <Text>Hello World</Text>

        <FlatList   
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
        
      />
    </View>
}

const renderItem = ({ item }: { item: ApodApi } ) => (
    <Image source={{ uri: item.hdurl ? item.url : ""}}/>
  );


interface ApodApi {
    concepts: string,
    copyright: string,
    date: string,
    explanation: string,
    hdurl: string,
    media_type: string,
    title:  string,
    url: string
}
  // DCD5D5

