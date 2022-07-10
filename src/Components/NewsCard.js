import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button} from 'react-bootstrap';  
// import img1 from '../../public/img1.jpeg'
// import image from '../../public/image'
import axios  from 'axios';
import { Prev } from 'react-bootstrap/esm/PageItem';

   
const  NewsCard =  () => {

        const [author, setAuthor] = useState("");
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [url, setUrl] = useState("");
        const [urlToImage, setUrlToImage] = useState("");
        const [publishedAt, setPublishedAt] = useState("");
        const [content, setContent] = useState("");



        const [profileDataa,setProfileDataa] = useState(null);
        const [newsIndex,setNewsIndex] = useState(0);
        
         
        
        
        let nextNews = ( ) =>{
          if (profileDataa) {
            setAuthor(profileDataa?.articles[newsIndex]?.author)
            console.log("aaaaaaa",newsIndex)
              setTitle(profileDataa?.articles[newsIndex].title);
              setDescription(profileDataa?.articles[newsIndex].description);
              setPublishedAt(profileDataa?.articles[newsIndex].publishedAt);
              console.log('abhi',profileDataa?.articles[newsIndex].description)
              setUrlToImage(
                profileDataa?.articles[newsIndex].urlToImage
              );
              setUrl(profileDataa?.articles[newsIndex].url);
              
              console.log("ssss",profileDataa?.articles[newsIndex].publishedAt)
                
              setContent(profileDataa?.articles[newsIndex].content);
              setNewsIndex(prev => prev+1)
          }
          
            }

        
    
        const profileData = async () => {
            try {
              const res = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-06-10&sortBy=publishedAt&apiKey=37b77df8fec146a28dd2aac2e2fa95db");
                console.log("aa",res)
                setProfileDataa(res.data)
                // timer(); 

              
            } catch (error) {
              console.log(error);
            }
          };
        
          useEffect(() => {
            profileData();
            
            
             
          }, []);
    
  
    
    return (
        <>
        <div className="App"> 
 <Container className='p-4'> 
     <Col md="12"> 

       <Card>
      <Card.Body> 
          <Card.Text> 
            {author}
         </Card.Text>
          <Card.Text> 
          {content}
        </Card.Text>
          <Card.Text>{description}</Card.Text>
          <Card.Text> {publishedAt}</Card.Text>
          <Card.Title>{title}</Card.Title>
          <Card.Text> {url}</Card.Text>
         <Card.Img variant="top" src={urlToImage} /> 
         {/* <Button variant="primary" onClick={profileData}>Read More</Button>  */}
           </Card.Body> 
          </Card> 
          <Button variant="primary" onClick={() => nextNews()}>Next News </Button> 
        </Col> 
        </Container>    
  </div> 
        </>
    )
} 

export default NewsCard;