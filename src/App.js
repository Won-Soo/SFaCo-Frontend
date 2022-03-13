import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Subject extends Component {
    render() {
        return (
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
        );

    }
}

class TOC1 extends Component {
    render() {
        return (
            <section class="menu2">
                <ul>
                    <li>공항패션</li>
                    <li>광고/영화</li>
                    <li>드라마</li>
                    <li>예능</li>
                    <li>기타</li>
                </ul>
            </section>
        );
    }
}

class TOC2 extends Component {
    render() {
        return (
            <section>
            검색창
            </section>
        )
    }
}

class Content extends Component {
    render(){
        return (
            <footer>
            <ul class="menu3">
                <li><a href="Login.html">로그인</a></li>
                <li><a href="MyPage.html">마이페이지</a></li>
            </ul>
            <p>
                책임자 : 원동연, 한수현 | 서비스문의 : e-mail@naver.com
            </p>
        </footer>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Subject></Subject>
                <TOC1></TOC1>
                <TOC2></TOC2>
                <Content></Content>
            </div>
        )
    }
}

export default App;
