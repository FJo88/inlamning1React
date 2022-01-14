import "./App.css";
import Post from "./ReactPost";

export default function App() {

const bulletinBoard = [{
      question : "Vad är tre fördelar med att använda React?",
      answer : "Lorem ipsum"
},
{
  question : "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
  answer : "Lorem ipsum"
},
{
  question : "Nämn tre skillnader mellan React och Angular.",
  answer : "Lorem ipsum"
}
]



  return (
    <div className="App">
      <header className="head">
      <h1>Inlämning 1-Javascript med React</h1>
      </header>
      {bulletinBoard.map(({question, answer}) => (
        <Post question={question} answer={answer}/>
      ))}
      <footer className="foot">
        <strong>Copyright Filip J</strong>
      </footer>
        </div>
  );
}
