import "./App.css";
import ReactPost from "./ReactPost";

export default function App() {

const bulletinBoard = [{
      question : "Vad är tre fördelar med att använda React?",
      answer : "React är komponentbaserat. Det innebär att att det är lätt att översätta design till kod. Genom att dela upp koden i små enheter kan man återanvända komponenterna i andra appar utan att öka dess komplexitet. Det finns även ett stort antal existerande komponenter som man kan importera och använda i sina projekt. Komponenterna skapas med JSX som i grunden är Javascript, vilket medför att en utvecklare med javascriptkunskaper lätt kan gå över och använda React.   "
},
{
  question : "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
  answer : "En Single page Application är en webbsida som dynamiskt skriver om innehållet på sidan med data som den hämtar från en webbserver utan att uppdatera sidan (refresha). En vanlig webbplats laddar om hela sidan när man hämtat något från webbservern. Målet är att få snabbare övergångar när man klickar någonstans på webbsidan och något laddas om. "
},
{
  question : "Nämn tre skillnader mellan React och Angular.",
  answer : "React är ett bibliotek medan Angular är ett ramverk. I Angular så uppdaterar man DOM:en som är ett språkneutralt gränssnitt. I React skapas en virtuell DOM. React kan på så sätt optimera och accelerera uppdateringar i DOM:en, vilket kan medföra att rendering, ändring av states mm. går snabbare. React använder sig av JSX som är en kombination av Javascript, CSS och HTML medan Angular använder sig av mer bestämd HTML. "
}
]
  return (
    <div className="App">
      <header className="head">
      <h1>Inlämning 1-Javascript med React</h1>
      </header>
      {bulletinBoard.map(({question, answer}) => (
        <ReactPost question={question} answer={answer}/>
      ))}
      <footer className="foot">
        <strong>Copyright Filip J</strong>
      </footer>
        </div>
  );
}
