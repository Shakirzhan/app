import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import menuList from "./menu_list"
import Logo from './logo_link';
import FinalReports from './final_reports'
import questionList from './question_list'
import mainReport from './main_report'
import intermediaReport from './intermedia_report'
import ReactDOMStream from "react-dom-stream/server";

function BasicExample() {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router> 
  );
}

function viewReport() {
  return(
    <div className="main-form">
      <div className="main-form__child">
        <h2 className="main-form__child-head">Наименование автомобильной дороги</h2>
        <div className="main-form__section">
          <b className="main-form__head">Тип дороги</b>
          <input type="text" name="text" className="main-form__txt" placeholder="Автомобильная дорога регионального и межмунициального значения" />
        </div>
        <div className="main-form__section">
          <b className="main-form__head">Код в СКДФ</b>
          <input type="text" name="text" className="main-form__txt" placeholder="Код" />
        </div>
        <div className="main-form__section">
          <b className="main-form__head">Наименование автомобильной дороги</b>
          <input type="text" name="text" className="main-form__txt" placeholder="Код" />
        </div>
        <div className="main-form__section">
          <b className="main-form__head">Идентификатор</b>
          <input type="text" name="text" className="main-form__txt" placeholder="Код" />
        </div>
        <div className="main-form__section">
          <b className="main-form__head">Протяженность покрытия дороги, км</b>
          <input type="text" name="text" className="main-form__txt" placeholder="1" />
        </div>
        <div className="main-form__section">
          <b className="main-form__head">Площадь покрытия дороги, кв.м</b>
          <input type="text" name="text" className="main-form__txt" placeholder="1" />
        </div>
        <div className="main-form__section">
          <b className="main-form__head">Адрес участка: конец (км+м)</b>
          <input type="text" name="text" className="main-form__txt" placeholder="1+001" />
        </div>
        <div className="main-form__section">
          <b className="main-form__head">Вид работ</b>
          <input type="text" name="text" className="main-form__txt" placeholder="Устройство светофорных объектов" />
        </div>
        <div className="main-form__section">
          <b className="main-form__head">Мощность работ, шт</b>
          <input type="text" name="text" className="main-form__txt" placeholder="30" />
        </div>
        <div className="main-form__section">
          <b className="main-form__head">Стоимость, тыс. руб.</b>
          <input type="text" name="text" className="main-form__txt" placeholder="30" />
        </div>
      </div>
    </div>
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

              <Route path="/det" component={viewReport} />
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
          <input type="checkbox" name="accident" value="1" onChange={handleFiltr} />
          <div className="types__visual"></div>
          <span className="types__txt">ДТП</span>
        </label>
      </div>
      <div className="types__wrap">
        <label className="types__button types__button--lighter">
          <input type="checkbox" name="men_work" value="2" />
          <div className="types__visual"></div>
          <span className="types__txt">Дорожные работы</span>
        </label>
      </div>
      <div className="types__wrap">
        <label className="types__button types__button--blue-light">
          <input type="checkbox" name="hazardous_areas" value="3" />
          <div className="types__visual"></div>
          <span className="types__txt">Опасные участки</span>
        </label>
      </div>
    </div>
  );
}
var arrN;
function handleFiltr(e) {
  var filtr = +e.target.value;
  var d = [];
  var displayedData = intermediaReport.map(function(el, index) {
    var obj = {};
    var data = el.child_element;
    obj.id = el.id;
    obj.year = el.year;
    obj.child_element = [];
    data.filter(function(it, i) {
      if ( it.bix == filtr ) {
        obj.child_element.push( it );  
      }
    });
    d.push( obj );
  });
  function HTML(props) {
    const { el } = props;
    function elements(el) {
      const doubled = el.map( (it) =>  
        <a href="#" className="annual-section__item annual-section__item--pink-dark" key={it.id}>
          <b className="annual-section__item-head">{it.title}</b>
          <b className="annual-section__item-date">{it.date}</b>
        </a>
      );
      return (
        <div className="annual-section__list">
          {doubled}
        </div> 
      );
    }
    const doubled = el.map( (it) => 
      <div className="annual-section" key={it.id}>
        <b className="annual-section__head">{it.year}</b>
        {elements(it.child_element)}
      </div>    
    );
    return (
      <div className="sss" key="unik">
        {doubled}
      </div> 
    );
  }
}
        
function InterimReportsContent() {
  function elements(el) {
    const doubled = el.map( (it) =>  
      <a href="#" className="annual-section__item annual-section__item--pink-dark" key={it.id}>
        <b className="annual-section__item-head">{it.title}</b>
        <b className="annual-section__item-date">{it.date}</b>
      </a>
    );
    return (
      <div className="annual-section__list">
        {doubled}
      </div> 
    );
  }

  const doubled = intermediaReport.map( (it) => 
    <div className="annual-section" key={it.id}>
      <b className="annual-section__head">{it.year}</b>
      {elements(it.child_element)}
    </div>    
  );
  return (
    <div className="main-wrap" id="main-wrap">
      {doubled} 
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