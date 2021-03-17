import React from"react";
import "./Detail.css"

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        console.log(location);

        if(location.state){      
          return (
          <section className="details">
              <div className="detail">
                <div class="detail_img">
                  <img src={location.state.poster} alt={location.state.title} title={location.state.title} />  
                </div>      
                <div className="detail_data">
                  <h3 className="detail_title">    {location.state.title}</h3>
                  <h5 className="detail_year">{location.state.year}</h5>
                  <ul className="detail_genres">
                   {location.state.genres.map((genre, index) => (
                   <li key={index} className="genres_genre">{genre}</li>
                   ))}
                   </ul> 
                  <p className="detail_summary"> <h3>소개</h3> "{location.state.summary}"</p>
                  <h7 className="movie_rating">평점 : {location.state.rating}  <i class="fas fa-star"></i> </h7>  
                </div>
              </div>
          </section>
          )
         } else{
             return null;
         }
    }
}
export default Detail;