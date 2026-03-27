import "./App.css";

const name = "bogdan";
const url = "https://www.youtube.com/";
const a = 3;
const b = 5;
const color = ["Червоний", "Синій", "Зелений"]

function App() {
  return (
    <>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img width={400} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhb2CFhB8FIMxvTkVr25gGh1McXEMhBkpgoA&s"} alt={"cat"} />
      <a href={url}>YOUTUBE</a>
      <p>{a + b}</p>
      <ul>
        {
          color.map((item, id) => {
            return (
              <li key={id}>
                <p>{item}</p>
              </li>
            )
          })
        }
      </ul>
    </>
  );
}

export default App;