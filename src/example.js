import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import menuList from "./menu-list"

function BasicExample() {
  return (
    <Router>
      
      <Route component={Menu} />
      <div>
        <Route exact path="/" component={FinalReports} />

        <Route path="/interimreports" component={InterimReports} />
        <Route path="/interimreports" component={InterimReportsContent} />

        <Route path="/question" component={QuestionContent} />
        <Route path="/question" component={PopularQuestions} />
      </div>
    </Router>
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

function FinalReports() {
  return (
    <div className="main-wrap">
      <div className="annual-section">
        <b className="annual-section__head">2019</b>
        <div className="annual-section__list">
          <a href="#" className="annual-section__item">
            <b className="annual-section__item-head">Полугодовой отчет</b>
            <b className="annual-section__item-date">01.12.2019</b>
          </a>
        </div>
      </div>
    </div>
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
  return (
    <div className="main-form">
        <b className="question__head">
          Название вопроса
        </b>
        <p className="question__dscr">Долгий ответ на вопрос от Динары нужно будет узнать. Долгий ответ на вопрос от Динары нужно будет узнать</p>
    </div>
  );
}

export default BasicExample