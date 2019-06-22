import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import menuList from "./menu_list"
import Logo from './logo_link';
import FinalReports from './final_reports'
import questionList from './question_list'
import mainReport from './main_report'

function BasicExample() {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router> 
  );
}

function Content() {
  return (
    <div className="main">
      <div className="container">
        <div className="main--white">
          
            <Route component={Menu} />
            <div>
              <Route exact path="/" component={FinalReports} />

              <Route path="/interimreports" component={InterimReports} />
              <Route path="/interimreports" component={InterimReportsContent} />

              <Route path="/question" component={QuestionContent} />
              <Route path="/question" component={PopularQuestions} />
            </div>
          
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrap">
          <div className="row">
            <div className="col-lg-8">
              <div className="header__logo">
                <div id="header__logo">
                  <Logo />
                </div>
                <div className="header__logo-wrap">
                  <b className="header__logo-head">Трансдорстат</b>
                  <span className="header__logo-slogan">Унифицированная система сбора отчетностсти</span>
                </div>  
              </div>
            </div>
            <div className="col-lg-4 header__right-block">
              <div className="row justify-content-between">
                <div className="col-lg-8">
                  <div className="header__geolocation">
                    <a className="header__geolocation-button" href="#">Алтайский край</a>  
                    <div className="header__geolocation-block">
                      <ul className="header__geolocation-list"></ul> 
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="header__login">
                    <a className="header__login-button" href="#">Вход</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrap">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer__logo">
                <div>
                  <img src="img/logo-b.svg" alt="foot-logo" />
                </div>
                <div className="footer__logo-wrap">
                  <b className="footer__logo-head">Трансдорстат</b>
                  <span className="footer__logo-slogan">Унифицированная система сбора отчетностсти</span>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="menu row">
                <div className="menu-section col-lg-4">
                  <b className="menu-head">Помощь и поддержка</b>
                  <ul className="menu-list">
                    <li className="menu-item">
                      <a href="#">Вход и регистрация</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Задать вопрос</a>
                    </li>
                  </ul>
                </div>
                <div className="menu-section col-lg-4">
                  <b className="menu-head">Партнёрам</b>
                  <ul className="menu-list">
                    <li className="menu-item">
                      <a href="#">Государственным органам</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Коммерческим организациям</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Документы</a>
                    </li>
                  </ul>
                </div>
                <div className="menu-section col-lg-4">
                  <b className="menu-head">Полезные ресурсы</b>
                  <ul className="menu-list">
                    <li className="menu-item">
                      <a href="#">Российская общественная инициатива</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Интернет-портал правовой информации</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  const doubled = menuList.map((it) => 
    <li className={`main-tab__item col-lg-3 ${it.class_active}`} key={`${it.id}`}>
      <Link to={`${it.url}`}>{`${it.name_url}`}</Link>
    </li> );

  return (
    <ul className="main-tab row">
      {doubled}   
    </ul> 
  );
}

function InterimReports() {
  return (
    <div className="types">
      <b className="types__head">Типы отчетов:</b>
      <div className="types__wrap">
        <label className="types__button types__button--darker">
          <input type="checkbox" name="DTP" />
          <div className="types__visual"></div>
          <span className="types__txt">ДТП</span>
        </label>
      </div>
      <div className="types__wrap">
        <label className="types__button types__button--lighter">
          <input type="checkbox" name="DTP" />
          <div className="types__visual"></div>
          <span className="types__txt">Дорожные работы</span>
        </label>
      </div>
      <div className="types__wrap">
        <label className="types__button types__button--blue-light">
          <input type="checkbox" name="DTP" />
          <div className="types__visual"></div>
          <span className="types__txt">Опасные участки</span>
        </label>
      </div>
    </div>
  );
}
        
function InterimReportsContent() {
  return (
    <div className="main-wrap">
      <div className="annual-section">
        <b className="annual-section__head">2019</b>
        <div className="annual-section__list">
          <a href="#" className="annual-section__item annual-section__item--pink-dark">
            <b className="annual-section__item-head">ДТП</b>
            <b className="annual-section__item-date">01.12.2019</b>
          </a>
        </div>
      </div>
    </div>
  );
}

function QuestionContent() {
  return (
    <div className="main-form">
      <h2 className="main-form__main-head main-form__main-head--bold">Задать вопрос</h2>
      <div className="main-form__section">
        <b className="main-form__head">Ваш email</b>
        <input type="text" name="text" className="main-form__txt" placeholder="help@transdorstroy.ru" />
      </div>
      <div className="main-form__section">
        <b className="main-form__head">Ваш вопрос</b>
        <textarea className="main-form__txt" placeholder="Введите вопрос"></textarea>
      </div>
      <div className="jobs__btn-wrap">
        <a href="#" className="jobs__button jobs__button-blue">Отправить</a>
      </div>
    </div>
  );
}

function PopularQuestions() {
  const doubled = questionList.map((it) =>
    <div key={`${it.id}`}>
      <b className="question__head">{it.title}</b>
      <p className={`question__dscr ${it.class_show}`}>{it.description}</p> 
    </div>
  );
  return (
    <div className="main-form">
      {doubled}   
    </div>
  );
}

export default BasicExample