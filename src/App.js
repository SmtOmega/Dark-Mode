import articles from './data'
import Article from './Article'
import './App.css';
import { useEffect, useState } from 'react';


const getStorageTheme = () => {
  let theme = 'light-theme'
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme')
  }
  return theme
}

function App() {
  const [theme, setTheme] = useState(getStorageTheme())

  const toggleTheme = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme')
    }
    else {
      setTheme('light-theme')
    }
  }

  useEffect(()=>{
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <main>
      <nav>
        <div className="container">
          <h1>Overeacted</h1>
          <button onClick={toggleTheme} className={`${theme === 'light-theme' ? 'btn-light': 'btn-dark'}`}>Toggle</button>
        </div>
      </nav>
      <section>
        
          {articles.map(article =>{
            return <Article key={article.id} {...article} />
          })}
        
      </section>
    </main>
  );
}

export default App;
