import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Zróbmy razem zdjęcia.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Usługi</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
           Fotografia portretowa, okolicznościowa, rodzinna oraz fotografia architektury -  w tym się specjalizuję. 
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">O mnie</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Fotografuję, z pasją, od 12 lat. I nie ma mowy, żebym przestał.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Kontakt</h2>
          <form method="post" action="https://www.flexyform.com/f/27100f12adad6bdb47d7cad19f23fbe8e4ff3a4f">
            <div className="field half first">
              <label htmlFor="name">Imię i nazwisko</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Wiadomość</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Wyślij" className="special" />
              </li>
              <li>
                <input type="reset" value="Wyczyść" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://500px.com/lukaszsawicki"
                className="icon fa-500px"
              >
                <span className="label">500px</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/sawickifotografia" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lukaszsawicki.pl/" className="icon fa-instagram">
                <span className="label">Instagrama</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
