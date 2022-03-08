import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

/*function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}*/

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div class="wrap">
        <header>
            <h1 class="title">SFaCo</h1>
            <nav>
                <ul class="menu1">
                    <li>
                        전체
                    </li>
                    <li>
                        커뮤니티
                    </li>
                </ul>
            </nav>
        </header>
        <section class="menu2">
            <ul>
                <li>
                    공항패션
                </li>
                <li>
                    광고/영화
                </li>
                
                <li>
                    드라마
                </li>
                <li>
                    예능
                </li>
                <li>
                    기타
                </li>
            </ul>
        </section>
        <section>
            검색창
        </section>
        <footer>
            <ul class="menu3">
                <li><a href="Login.js">로그인</a></li>
                <li><a href="MyPage.html">마이페이지</a></li>
            </ul>
            <p>
                책임자 : 원동연, 한수현 | 서비스문의 : e-mail@naver.com
            </p>
        </footer>
    </div>
            </div>
        )
    }
}

export default App;
