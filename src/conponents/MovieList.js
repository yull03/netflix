import { useEffect, useState } from "react";
import axios from "axios";

const MovieList = () => {
    const [movies,setMovies]=useState([]);
    const [error,setError]=useState(null);
    const [isLoading,setIsLoading] =useState(false);
    //tmdb info
    const API_KEY="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWNjNjdlOGY2MTdjMjI4YzljOTc2YmIwNWNkMzljYSIsIm5iZiI6MTczNzYwNjUzNC43Nzc5OTk5LCJzdWIiOiI2NzkxYzU4NjUxNDhmODc2N2NmYTZiZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NnACMXUNz6GNI8pX87lg-HmC0rc4Dg0UM3CJmRDeTyk";
    const url=`https://api.themoviedb.org/3/movie/popular`;
    //비동기 요청
    const fetchMovie= async ()=>{
        try{
            const response=await axios.get(url,{
                headers:{
                    Authorization: `Bearer ${API_KEY}`,
                    accept: 'application/json'
                },
                params:{
                    language: 'ko-KR',
                    region:'KR',
                    page:1
                }
            });
            const movies=response.data.results.slice(0,8);
            if(movies){
                setIsLoading(false);
                setMovies(movies);
            }else{
                setError("데이터를 가져오지 못했습니다");
            }
            

        }catch(error){
            setError("에러 발생. 데이터 패치를 하지 못하였음.");
        }
    }
    useEffect(()=>{
        setIsLoading(true);
        fetchMovie();
    },[]);
    return (
        <div className="movie-list">
            <h2>인기 있는 영화</h2>
            {
                movies.map((item,idx)=>{
                    return (
                        <div key={idx} className="movie-card">
                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        alt={item.title}
                        />
                        <p>{idx+1}</p>
                    </div>
                    )
                })
            }
        </div>
    );
};

export default MovieList;