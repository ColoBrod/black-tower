import React from "react";
import Global from '~/Global';
import lc from './locales';
import './index.css';


import BorderGolden from '~/assets/img/border-golden.svg';

class Order extends React.Component {
  render() {
    return (
      <section id="order">
        <div className="container">
          <div className="inner">
            <div className="inner-left">
              <img src={BorderGolden} alt="Золотая рамка" className="border-golden" />
              <form action="">
                <h2>Сделайте заказ!</h2>
                <input type="text" placeholder="Ваше Имя"/>
                <input type="text" placeholder="Ваш телефон"/>
                <input type="text" placeholder="Ваша электронная почта*" required/>
                <input type="submit" value="Отправить" />
              </form>
              
            </div>
            <div className="inner-right">
              <p className="description">
                С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Order;