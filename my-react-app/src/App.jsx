import React from 'react';
// import Button from './Components/Button';
// import Card from './Components/Card';
// import Footer from './Components/Footer';
// import Header from './Components/Header';
// import Navbar from './Components/Navbar';
// import Profile from './Components/Profile';
// import Greet from './Components/Greet';
// import Name from './Components/Name';
// import Age from './Components/Age';
// import Style from './Components/Style';
// import Multiplication  from './Components/Multiplication';
// import Welcome from './Components/Welcome';
// import Numerals from './Components/Numerals';
// import InlineStyle from './Components/InlineStyle';
// import Addition from './Components/Addition';
// import MerciBeaucoup from './Components/MerciBeaucoup';


// import Card1 from './Components/Card1';
// import ProfileCard from './Components/ProfileCard';
import Cards from './Components/Cards';
import UserCard from './Components/UserCard';
import ProductCard from './Components/ProductCard';
import MovieCard from './Components/MovieCard';
import CourseCard from './Components/CourseCard';
import StudentCard from './Components/StudentCard';
import Movies from './Components/Movies';
import Courses from './Components/Courses';
import Student from './Components/Student';
import Elective from './Components/Elective';
import Counter from './Components/Counter';
import Counter1 from './Components/Counter1';

function App(){

    const subjects = [
        {id:1, title:"Embedded Systems", instructor:"Diana", price:`$500`},
        {id:1, title:"Machine Learning & AI", instructor:"Ssetuba James", price:`$600`},
        {id:1, title:"Deep Learning", instructor:"Ian Raymond Osolo", price:`$450`},
        {id:1, title:"CyberSecurity", instructor:"Catherine Bwire", price:`$725`}
    ]

    const dramas = [
        {id:1, title:"bumble bee", year:2022, rating:8.5},
        {id:2, title:"Home Alone", year:1994, rating:7},
        {id:3, title:"Everybody hates Chris", year:2022, rating:5},
        {id:1, title:"thundeman", year:2012, rating:6}
    ]

    const students = [
        {id:1, name:"Tendo Calvin", age:24, course:"Computer Science"},
        {id:2, name:"Absolom Junior", age:24, course:"Computer Science"},
        {id:1, name:"Nankya Zahra Zinda", age:24, course:"Computer Science"},
        {id:1, name:"Okidi Norbert", age:24, course:"Computer Science"},
        {id:1, name:"Kisa Emmanuel", age:24, course:"Computer Science"},
        {id:1, name:"Nabasa Isaac", age:24, course:"Computer Science"}
    ]
    const courses = [
        {id: 1, title: "Software Construction", instructor:"Charles Muganga"},
        {id: 1, title: "Digital Marketing", instructor:"Ankunda Doreen"},
        {id: 1, title: "Very Large Scale Integration", instructor:"Sam Katwesigye"}
    ]

    const movies = [
        {id:1 , name:"Lion King", year:2018},
        {id:2 , name:"Sean Combs, The reckoning", year:2025},
        {id:1 , name:"Assasins Creed", year:2009},
        {id:1 , name:"Mr Bean's Holiday", year:2007}
    ]

    const products = [
        {id:1 , title:"laptop", price:800},
        {id:2 , title:"Phone", price:700},
        {id:3 , title:"headphones", price:100},
        {id:4 , title:"matress", price:50}
    ]
    const users =[
        {id:1, name:"Nakayiza Davinah", job:"Medical Doctor"},
        {id:2, name:"David Beckham", job:"Footballer"},
        {id:3, name: "Elon Musk", job:"Business magnet"},
    ]
    const cards = [

        {
            id:1,
            title: "Software Developer",
            description: "Design both web and mobile apps",
            buttonText: "Learn More",
        },

        {
            id:2,
            title: "Cloud Engineer",
            description: "Deploy Applications to the web",
            buttonText: "See More",
        } ,

        {
            id:3,
            title: "CyberSecurity Analyst",
            description: "Protect systems against cyber attacks",
            buttonText: "See my works",
        } , 

        {
            id:4,
            title: "Data Scientist",
            description: "Design Predictive Models",
            buttonText: "Learn More",
        }
    ]
   
   
  return(
    <>
    {/* <Header />
    <Navbar />
    <Profile />
    <h3>{Welcome("Davinah")}</h3>
    <h3>{MerciBeaucoup("David Gill")}</h3>
    <h3>{Greet("Darren Bent")}</h3>
    <h3>{Name("Daniel Agger", 45)}</h3>
    <h3>{Numerals("Sam Altman", 30)}</h3>
    <h3>{Age(25)}</h3>
    <h3>{Multiplication(10,10)}</h3>
    <h3>{Addition(10,10)}</h3>
    <InlineStyle />
    <Style />
    <Card />
    <Button />
    <Footer /> */}
  {/* <Card1 title="Full-stack developer" description="Building web and mobile applications" buttonText="Learn More"/>
  <Card1 title="Content creator" description="Create content about what I have learnt" buttonText="See More"/>
  <Card1 title="Data Scientist" description="Analyzing Data with Python" buttonText="View Project"/>
  <ProfileCard  name="Tendo Calvin" role="Digital Marketer" button="Learn More"/>
  <ProfileCard  name="Sadio Mane" role="Footballer" button="Learn More"/>
  <ProfileCard  name="Elon Musk" role="Software Engineer" button="Learn More"/> */}

  <Student  user={{name:"Mumbere Brian", job:"Business man"}}/>
  <Elective  title="React JS" onEnroll={()=>console.log("Enrolled!")}/>
    
  
        <div>
            {cards.map((card)=>(
                <Cards 
                key={card.id}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                onButtonClick={()=>console.log(card.title)}
                
                
                />
            ))}
        </div>

        <div>
            {users.map((user)=>(
                <UserCard 
                key={user.id}
                name={user.name}
                job={user.job}
                
                
                />
            ))}
        </div>
       
       <div>

        {products.map((product)=>(
            <ProductCard 
            key={product.id}
            title={product.title}
            price={product.price}
            
            />
        ))}
       </div>

       <div>
        {movies.map((movie)=>(
            <MovieCard 
            key={movie.id}
            name={movie.name}
            year={movie.year}

            
            />
        ))}
       </div>
        

        <div>

            {courses.map((course)=>(
                <CourseCard 
                key={course.id}
                title={course.title}
                instructor={course.instructor}
                
                
                />
            ))}
        </div>


        <div>
            {students.map((student)=>(
                <StudentCard 
                key={student.id}
                name={student.name}
                age={student.age}
                course={student.course}
                
                
                />
            ))}
        </div>

            <div>
                {dramas.map((drama)=>(
                    <Movies 
                    key={drama.id}
                    title={drama.title}
                    year={drama.year}
                    rating={drama.rating}
                    
                    
                    />
                ))}
            </div>


            <div>
               {subjects.map((subject)=>(
                <Courses 
                key={subject.id}
                title={subject.title}
                instructor={subject.instructor}
                price={subject.price}
                
                
                />
               ))} 
            </div>
    
    <Counter />
    <Counter1 />

    </>
  )
}


export default App;