import React from 'react';
import Avis from '../Avis/Avis';
import Footer from '../Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import './Home.css';
import 'aos/dist/aos.css';
import Dyslexy from './Img/dyslexy.png';
import Dyslexy2 from './Img/dys2Img.png';
import Book from './Img/Aaa.svg';
import Tech from './Img/tecghh.png';
import Reglage from './Img/reglage.png';
import Help from './Img/help.png';
import Cadena from './Img/cadena.png';

function Home() {
  return (
    <div style={{ whith: 'auto', height: 'auto', margin: 0, backgroundColor: 'white' }}>
      <Container fluid style={{ height: '360px', backgroundColor: '#25a954' }}>
        <Row className="d-flex justify-content-center">
          {' '}
          <Col sm={12} xs={12} md={6} lg={6} className="d-inline-flex">
            <p id="titleHome">
              Alpha<span id="logoHome"></span>
            </p>
            <p className="textHome">L’appli facilitateur de lecture</p>
          </Col>
          <Col sm={12} xs={12} md={6} lg={6}>
            <img style={{ width: '80%' }} src={Book} id="book" alt="book" />
          </Col>
        </Row>
      </Container>

      <div className="custom-shape-divider-top-1621515812">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="custom-shape-divider-bottom-1621514761">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
        </svg>
      </div>
      <div
        style={{
          height: '320px',
          width: '100%',
          backgroundColor: '#1b2437',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        <p className="textAlphaB" style={{ color: 'white', width: '50%' }}>
          8 à 12 % de la population mondiale est touchée par des troubles de la lecture et de l&apos;écriture spécifique selon l&apos;OMS. <br></br>
          Le plus connus etant la dyslexie.<br></br>
          La lecture est omniprésente dans notre quotiden.<br></br> Pour AlphaB, il est essentiel d’apporter une aide concrète à toutes personnes en
          difficulté.<br></br> AlphaB a créé une solution adaptée et efficace pour pour toutes les personnes nécessitant une assistance lors de la
          lecture.
        </p>
        <img src={Tech} alt="tech" style={{ width: '150px', height: '150px' }} />
      </div>

      <div
        style={{
          height: 'auto',
          width: '100%',
          backgroundColor: '#1b2437',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
        <img className="imgDys" src={Dyslexy} alt="dyslexy" />
        <p style={{ color: 'white', fontFamily: 'Raleway', fontStyle: 'normal', fontWeight: 'normal', width: '50%' }}>
          Comment pense un dyslexique ?<br></br> Ainsi, le dyslexique ne comprend que le sens partiel d&#39;un mot ou d&#39;une phrase, mais pas son
          sens global.<br></br> Le message d&#39;un texte peut lui échapper totalement ou partiellement.<br></br> De ce fait, il peut avoir des
          blocages dans la lecture et des difficultés dans différentes matières
        </p>
      </div>

      <div className="custom-shape-divider-top-1621291613">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
        </svg>
      </div>
      <Container>
        <section className="section-heading">
          <span className="d-inline-block rounded-pill shadows px-4 py-2 mb-3">
            <svg
              className="svg-inline--fa fa-lightbulb fa-w-11 text-primary mr-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="lightbulb"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
              data-fa-i2svg="">
              <path
                fill="currentColor"
                d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"></path>
            </svg>
            <span className="text-primary">Information</span>
          </span>
          <h2 className="sc-hKwCoD kcKwBQ">Express Functionality</h2>
          <p className="sc-eCImvq fULbhd">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
            asperiores sit.
          </p>
        </section>
        <Row>
          <div data-aos="fade-down" data-aos-duration="1500" className="res-margin col-lg-4 col-md-6 aos-init aos-animate">
            <div className="image-box text-center icon-1 p-5">
              <div className="featured-img">
                <img
                  className="avatar-sm"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div className="icon-text">
                <h3 className="mb-2">Adaptable</h3>
                <p className="sc-jRQAMF hDxSWz">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="1500" className="res-margin col-lg-4 col-md-6 aos-init aos-animate">
            <div className="image-box text-center icon-1 p-5">
              <div className="featured-img">
                <img
                  className="avatar-sm"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAADAFBMVEUAAAD/Zk3/YUn/Ykv/Y0n/Ykj/Ykf/VVX/Yk7/Y0r/Ykn/Y0j/Ykn/Y0n/Y0j/Y0j/Y0f/Y0n/ZEj/Y0j/Y0j/Y0n/Y0f/YED/ZEn/Y0j/Y0j/Y0j/Ykf/AAD/ZEf/Y0j/Y0j/Y0f/Y0f/gID/Y0n/Y0j/ZEj/Ykn/VVX/ZjP/Ykj/Y0j/ZEn/gED/Y0n/Y0j/Y0j/ZEb/bUn/ZEf/ZEj/Y0j/ZEn/VVX/Y0r/Y0j/ZEj/Y0f/Ykj/Y0j/Y0j/Ykj/Y0j/YFD/Y0j/XkP/Zkf/Y0j/Y0j/ZEn/Y0j/Ykj/YEr/Y0j/Ykj/Y0b/YUb/Y0j/Y0j/YEj/Zk3/Y0j/Y0j/ZEP/Y0j/Ykj/ZEf/akD/Y0f/Ykj/ZUj/Y0f/Y0j/Ykj/Y0j/aUv/Y0f/ZEn/Y0j/ZEf/Y0n/ZEn/ZUr/Ykj/Y0j/ZEn/Y0j/YkX/Xkz/Y0n/Y0j/Y0j/Zkb/Ykj/Y0j/Y0f/Y0f/ZEj/Y0j/Zkn/Y0j/Y0j/Ykj/YEX/ZEj/Y0f/Y0j/Y0j/Y0f/Y0j/Y0n/Y0f/ZEj/Ykn/Y0j/Y0f/Y0n/Y0n/Y0n/YUr/Ykj/Y0j/Y0f/ZEj/Y0n/ZkT/Ykf/W0n/Y0j/Y0f/ZEn/ZEj/Y0j/Ykj/Y0j/ZEj/Y0j/ZEj/Y0j/Y0j/Y0j/ZEb/Ykn/ZEn/ZEf/Y0f/ZEj/ZEj/aEb/YEr/Y0f/Y0j/Ykf/Ykj/Y0j/ZEj/Ykn/Y0n/Y0f/Ykn/Y0j/Y0f/Ykn/Y0j/Y0j/Y0j/ZEn/ZUf/Y0f/Y0n/Y0j/Ykf/ZEb/Y0j/Y0j/Y0j/Y0j/Ykr/Y0n/Ykf/XUb/Y0j/Ykj/ZEf/Y0j/Y0j/Ykj/ZUb/Ykn/Ykj/Y0n/Y0j/ZUb/Ykj/Y0j/Y0f/Y0j/Y0f/Ykj/ZEf/ZEj/Ykj/Y0j/Y0j/YUn/ZUj/Y0n/Y0j/Ykf/Y0j/Ykn/ZEj/Y0j/ZEj/ZEj/YUf/ZEj/Y0n/Y0j/Y0j/YUn/ZEj/Ykn/Y0f/Y0j/Y0j/Ykj/ZUr/ZEv/ZEj/ZkT/Y0f/Y0gAAABy0kugAAAA/nRSTlMAChUiMTxECQ0+ZYuz2vuyZHe7+fzMiAhXtfj3VgE9m/DvmgJNy9JeAwXX3GYEUN60IQd99vV7Bh/HzSRR8ViRohDDExnQ1BzfJy3q6Swd4uUgFNjbF8mrjwzIh0dIscVnERJpxnM7lyaZ+jiOGhuQ4K0ovapLWlzdI4OYfyWAgf5qbJ90doqMla/hieg3Oeao5KUPUw5fz1R4/aa3pNFuzvTnRW2FazacqRYYtr9Byo1ASdOEgkPBnqDuvkIrXazzLzPs69VVNH56C+1yT6PyTkxGlJNxOnWGb3ydYKEuuLmnKjW6vGjZW67EklIywGKw4z9KcJbCeWMwKVke1nYDQcYAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AEMDB4mOeEmegAAFcdJREFUeNrtnXl8FtW9xgdCEtAQRcIWGoQEWQpBDGC0CmJZwyb7oriAC6u2CFdzuUJf6i6LKOISEAUXKqBo0VqglEUrFayKGCyiiGtrtfXae/V69d73U1B4SXLOeWc7c35zznm+/8+8v/M833ebd94ZxwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWUqt2Rp3MLJAis05G7WzqVlRQt94JJ+bUz00CDrn1Tzrx5Hp1qTuKjOzMBqc0pA45/uQ1apxl4ItBk6bN8qmj1YfmOT9qQt2YTApanNqSOlPdaFWYWUDdmySKWp9GnaaetGnbjro7CbRv+2PqIPWlQ8di6v7C0ul06hD1pkNr6gZDkdGZOkD9yTmDusXAlHTpSp2eCXQ7s5S6yWCcdTZ1dKbwk3OouwzCua2oczOH7j2o2/RNk/OoQzOLnpodHDz/p9SJmcbZvag79UPvPtR5mUffftSteiejA3VaJtK/jLpXrwwYSJ2VmQwaTN2sN4ZcQJ2UqQwdRt2tF4aPoM7JXEaOom7XnbqN3NfRavSYwrGNQRXGFo4Z7eEn89HjqPt1o6BZ+hXkXXjReA00pmHUxY1H56XP75K4nyTQIO34l142gXrAuDPx8ivSRngl9YDpuSpXPHr+pMnU4+nB5Clpzp6bOo16vHT0En8ByJ9+NfV0+nDNz8Rnz/58IvV0aZghHPsUbY5ixINrZwqjnEU9m5h/E83c6jrq0fTjeuGXgoupRxORXS6YuNG/U4+mI8LzKTrE9ZTx2YKB/0PTM1qoKSkUBHoD9WR85gg+u86lHkxffsFPtHkG9WBcenKHTcyjnktnfpnghnoj9Vw8MnK5s95EPZfe3MwNdWocfxWawh31FuqxdOdWbqy3UY/Fcg33E8DtcT90HXsKTuJ+CojfUbUTeXP2x6H/0Ey8g5fsfOqxalK8gPdWtZB6LBNYxPtwdWfc/jfKPQjYmHoqM+B+DIjb4cDFnBkviP3ZC3pQ9y5OuHdTT1WdJbx/Ad5DPZUpNOWE220p9VTVuJcz4n34BiCJgjaceK+nnqoavKOA91MPZQ49OPHG62gg511qRBH1UObQrj6b7x3UQ1WljGMojgFL5AFOwHH6z/jl7HgV11APZRLXcE4W7kg9VBWWseMtp57JLE5hE36QeqYqrGDHu5x6JrN4iE34YeqZjlPEOQqAk0ClMphNeGV8vmYPY6e7k3omwyhYxWY8hHqoFOPZ4cZQz2QanDPuH6GeKcWj7HCzqWcyjcfYjB+nnikF53TgeB2oNADOwfb4nG07lh1uNfVMpjGNzXg69UwpfsUOF88TlzVmDptxIfVMKZ5gh1tDPZNprGUzXkw9U4p17HCaXdcw/tRiM25GPVOKJ9nhqEcyDzbjJ6lHSgEBFAABLAcCWA4EsBwIYDkQwHIggOXYKkDRU9Nz1jfSkvU5Tz8j79RoSwX4dd+k1mwYLysJKwUoeDbhnnG8STwn6cwtKwWY7R5w/JH0s72NAozX/vl/hMRvpIRhoQBFK6i7k8PDUj4JWihAJnVzslgkIw0LBbiIujhZPCYjDQsFmOEerR5IOUfeQgGepy5OFs/LSMNCAW6nLk4WM2SkYaEA06mLk8WtMtKwUIAs6uJk8ZSMNCwUoH25e7Y6MLJYRhoWCsC9NpKGyLlalo0CCK5Arhm/lZOFlQKU9nTPN+5sbC8nCysFcJyOC9wjjjOrTpaVhKUCOOPaztowcJOWDNwwq628yyXbKgA4CgSwHAhgORDAciCA5UAAy4EAlsOeILuZeqQUEEABA5mMF1OPlAICKKARk3F87soKARTAXir0d9QjpYAACthSUSPiOyT9yiQBCKCCjTUi/j31QMeBACqYUP3OUVvjc7sACKCGOSOrBNy5FvU4VYAAaph497HPAdvOjNVN+SCAKrbf2rdrctOlD6ylHqQ6EEAlpdQDsEAAy4EAlgMBLAcCWA4EsBwIYDkQwHIggOVAAMuBAJYDASwHAlgOBLAcCGA5EQtQe/AOLRlcm7oYVUQpwLSNLyS15cUbV1N3o4ToBFiyWPNbBiSW1aVuRwGRCXD1H6gLDE/f3lKzbt9vwKgYnQ/8A1EJkD2auj0ZnN1EWtAFL3VunjzyzrKTqmo+UQnwR+ru5PCyrJznrD+2y0TPXWRtc4hIgCXdqauTQ8ulcmJetLvKTvvE6StGRAJcR92cLJpKSXnYoGo7fT4+fw2MSoBC6uJkMUVKyutq7PUV0s6rEZEAy6mLk0UzGWksqrnXF+Lz57CIBNhMXZwspFzL5Txmt3+ibb0KEQmwjLo4WbwqI402zG7Po229ChEJcDN1cbK4SUYarZjdSrkVkRQiEmAydXGSSJwjI42uzH7X0bZehagOBBly2zAptw102PvnnErZeTWiEmDya9TdyaC7lBcAZyuz43mUnVcjsh+DXs+lbi88uXvkZHF9zR1X9KNrvAbR/Rz8xibq/sKyO0tSFKUdaux5I1XdLBGeEDJqbzfqCsOw8s010lJ+vfqpES/E5wUg2lPCsvdUNtaUyj3ZMmPuUjXgfCl3o5QETgpVw7ypqXxX7aMepioQQBFlW3O/T7f7LROoR6kGBFDGhJfe+vP+R+J2nSgIYDkQwHIggOVAAMuBAJYDASwHAlgOBLAcCGA5EMByIIDlQADLgQCWAwEsBwJYDgSwHAhgORDAciCAKgp2vn1g1m0PnUE9Rw0ggCJa9z0ab+ct1KNUAwIooV3j4/nmv0M9TVUggBLerZbwvdTjVAECqGBe9YTzD1IPdBwIoIAlNS+a/R71RMeBAAqYx2RcRj1SCgigAPaieTdTj5QCAijgAibj+FwgAAIooCGT8SHqkVJEKkCt169U94/+2b/cGbuL8R+FzfhJ6pFSRChA70ns5dGi5ecdi6nz5GKnAG+0cm9MOlespQ6Uh5UCdMoj6D+ZLB9OnSgHGwW4dhtJ/8nk5hh+ELBRgEuI+k8mf0QdKYuFApSR9Z9sRB0pi4UCEF4tPDGEOlMGCwV4n06AZGvqTBksFIDyjiEdqTNlsFCAde49RcbvqTNliECAdkM++DBLBn2iEYDyrmFxuhDrD8gVoKTeDVs35EcYoIwl96Drv1t87sh1DIkCLDn5o8gvwS1jyUvp7hx6N3XdLNIEqPe+ip9XpKz5bar+p86hrptFkgCZH6uJUMqam1xIJMBb1G1zkCLAwZ+qilDOonv3DT9JAN6kLpuHBAHGPZ2rLENJq166LBF+Fp+0vIy6ay7hBahTX2GK0ta9+rcDlda/Ym4v6qr5hBagrdKb78hc+vDBO1QxR+o9XqQSUoB2k5Q+j3BSqHTCCVC6WG3/EEA6oQQoPaS4fwggnTACFD2hun8IIJ0wAtymvH8IIJ0QAnyivn8IIJ3gAgxQ/dcKCBAFgQXY9ReC/iGAdAILMJ+ifwggnaACfDDVf3sQIIYEFeBJcUkVbRbf8nIDCZRDgOgJKMBvRO0nDv11oqzZcH0ABQQUYKag/08HSJwNAiggmADT+PXf+Wups33EPkJ76rxMo5TN+CMPm73L7f9vo+QON4N9CGlvL+AHerEZz3Dfahz3/9XLZZ/zvJF9jLOoAzONYWzGHi4S1ZbX/6XSz3nfyz6IzI8Y4DDb2Yw/c98qh9P/AvkXQLmIfZQ/UQdmGueyGT/mulEx758VEfzvtQH7KPG5iKEhPMBm7H7y+kJO/ydFMNz97MMcoA7MNG5kM/7cdSPOMzPx9wiGG8A+zn3UgZnGCjZj95tGPMhu9I8ohsuuYB6nIqYnV+vKGvb/EXklrludxgrwRSTjnc4+0D3UkZlFUzbhDq4bFbCfARO9IxmPvZJ1spA6MrM4wCbczHUjzsGj+tGMdwP7SJvcX6CAZ7Jbsgl3cd3qDHaj/4xmvnrsIyXvpw7NJDjvAMmrXLfifDj3cPAoCKUr2YfqTB2aSXAul7TN/fe2fexWz0Y0IOePJwkcDZbGFvZrloePAM4z7FZzI5qQc5wqjpdZ0RXeH3tuct9MoQC8q7rmTabOzRQ+4LwAJM5x306hAA7vYi6HqIMzBc637OSlHrZTKcDjnBlxMEgOPXjZfuJhQ5UC9GrIGfLL86mzM4GJQznR5ns55UqlAM6nPE0/jeGNF3Sj4BJeslu9bKpUgH/yxkw+RB2f/rzCDbaFl02VCuBwr0DX8HfU+elOFu+91eOPumoFuJhr6mtRnH9gEQdbcmN9xNPGagXg/fh8mAU4GhCCskHcUC/0trViAV7nzpoctJM6RX35UHCNxP/ytrliAbjHK468C2RR56grbwhum5fjcXvVApzTnD9v7twi6ih1pGC/4J/9XTM87kG1AM7cpIDltanT1I81wkv7uZ8JchTlApQIr0azaT9eBHxR0FZ4ieSRTbzuRLkAzlW5oqmTVyykzlQnponvlDB1kee9qBeAe17AMf4Wv3vxxZTMnDQxejgP4BgEAhQtTzN68rRH43hb7phR+9FG6TLs7OPnFQIBnNp3pZs+ObXZfx/ED0RCCrZXrkt/Ua8L/PzhhkIAZ7XrLd9fnPnV/k5ZO8oyYsFauT6W9gs0RdmOrE77v5r5olt2r+3wMwyJAM74hm6riBe5X+/fJWnpvZ/dEO2sDf0dU6MRwLmuwv/KaLlTyqlLBS9HfU+Wih7+JiISwNlPXahvEv8TftUlYyIf0+/ZFVQCOI9r9xqQ/CbsmktPinrExCt+ZyITwDm3uf/10bIt5IVzou+/YVPfQ9EJ4GS9Rt2oX84Ltd6SZlHP1z3AuVWEAjh/70/dqE8WhPmxIvr+y/83wFiUAjjnf+p/laRsj3P/Y5YEmYtUAMfpmE/dqS/2BF5o5O//+fuDHa0iFsDZuYK6VD/cG3SZkT//+wQ9sZZaAKd4f3f/y6XinYCLjPr5v7JBcdD8yQVwnN49qXv1TEABou4/Z0jw9GMggONkvkfdrEeCCRDx6/+6fWGyj4UAjrO9Zx51uV4IJECkz/9EzupwycdEAMcZ8NVu6nrdCSJAlM//3bcNDpt7bAQ4nFTrWXH/lTiAANE9//NOaZsdPvUYCXCYXn/91en+k4izAFE9/8tPvU7OhXbjJcARzvhm0uah/hOJpwBR9D9086QvhkmLO34CfM/SnfecUNll/pQQsD827va3A859zvwKkKb/9f5XNL9L5Qn37KwrN+mYCiCBF5iFrfC3g3dCC5Dm/f/rcdT5HAUCCAktgA79QwAxYQXQon8IICakAHr0DwHEhBNAk/4hgJhQAujSPwQQE0YAbfqHAGJCCKBP/xBATHABNOofAogJLIBO/UMAMUEF0Kp/CCAmoAB69Q8BxAQTQLP+IYCYQALo1j8EEBNEAO36hwBiAgigX/8QQIx/ATTsHwKI8S2Ajv1DADF+BdCyfwggxqcAevYPAcT4E0DT/iGAGF8C6No/BBDjRwBt+4cAYnwIoG//EECMdwE07h8CiPEsgM79QwAxXgXQun8IIMajAHr3DwHEeBNA8/4hgBhPAujePwQQ40UA7fuHAGI8CKB//xBAjLsABvQPAcS4CmBC/xBAjJsARvQPAcS4CGBG/xBATHoBDOkfAohJK4Ap/UMAMekESNP/81r1DwHEpBHAnP4hgBixAAb1DwHECAUwqX8IIEYkgFH9QwAxAgHM6h8CiOELYFj/EEAMVwDT+ocAYngCGNe/04JdyXPUM8mhFbOw+/ztgCPAZeLr/8+sRb3gYNRhl/I09UxyyGUW9rW/HXAEYF9VdO/fmcOu5VXqmaTQi11YM397eCfpHW37d9ayi1lPPZMU9rELW+xvDz4E0Ld/p/1UZjX5Em5GRk8lW9NYf3vwLoDG/TvOCHY9b1DPJIN17Lo+8bcHzwJo3b/D+V5zI/VMEqjNvrIln/K3C68CaPr97xiN2RWtlHNLQlIacJrq7W8XHgXQ+/nvOK05a3qWeqjQ7BrErqqDz314E0D3/p0lnNt2d82gnios8zlVTfG5D08CaP76f4TRPK2LqKcKx2rOJ4BkD5878SKA9s//w3ThLUzvN4E1/TlLyp/ocy8eBDChf2dYgre0y6nHCsHS03grmuF3N+4CGNG/4/yDt7ZEA+qxArP2YW5bnfzux1UAQ/p37uUv7/2l1IMF4xn+vecXlPrdkZsApvTvtL+Dv8C7emj4UXDNqRX81dzse1cuAhjTv+M8Llrjhm80exU4+Fk3wVJ21/W9s/QCGNS/kz1UuMyuh848d2eGG0NKfD7iKNdd+ubbzG/2jhD39bb/WNIKYFL/jvNdMixfFi70+mBruvxkaujH80t5gF840wlgVv+O83H4iBNbPf2CUPDWNuXtH2ZPgFDSCGBa/05ZVwkhl1/r/kDFyyjq938M4AhiAYzr33EukxHzoC2uj/MZSf9fDg+SiVAAA47/s7yqxIB/kvSfe1WgSEQCGNm/U7eNjKhXfZv+Uc4mEeChYJEIBDDw9f97ru7vL1U+6V8DhpH0Pz9gIk25ezPz+X+EsoEy0k77GtCRov93CwIG0oK3N1Of/0cYfFfUBswm6P9AcdA8djW0q3/HOWuE/3x9GfCV+v4fC/r8P8wMy/p3nOESDgilM0C5AM07holjdc0zJUzv33GKbsgLFLRHA1QLMLJOuDjetK3/wzwzMkID1AqQOBD2t8zSav8uOWRD/47T5I/NIzNAqQB99oUPo/TN1LtAYmzgT5O6kXEg/K91fAMUClB+gpy+Ft7+/c8kXW8P+W6iF/+3N/RPdlwDlAmwoa28p2utFt9918KOV/8qNHkpJzdcB7xjgmoE2D0lkzo+I+j1+d7/D/OdgPMaEL0A3Q81+LAddXIGUbLl8yufm144Kw2dfRjAEeC9WXJ4cFLjlz956mrqwGykUmgA8y7AEeDbQI8J4oR3AyCAmXg2AAIYilcDIICpeDQAAhiLNwMggLl4MgACGIwXAyCAyXgwAAIYjbsBEMBsXA2AAIbjZgAEMB0XAyCA8aQ3AAKYT1oDIIAFpDMAAtjAlUIDVn0MAWxA/BqQhABW4McACGAiPgyAAEbi3QAIYCaeDYAAhuLVAAhgKh4NgADG4s0ACGAungyAAAbjxQAIYDIeDIAARuNuAAQwG1cDIIDhuBkAAUynEgJYTiUEsJxKCGA5lRDAciohgOVUQgDLqYQAllMJASxHcLb4ZOq5gCr4BgS6ox/QEt67wALqoYBCOK8BG6lnAiphDZhGPRJQSk0DnqAeCCimugH1J1DPA1TzRf7x/vv2o54GqGfn10frb35iNvUsgIRFF73X5opZHUdRzwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgnX8B+dBQ9eAKUPUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDEtMTJUMTI6MzA6MzgrMDA6MDACqXMyAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAxLTEyVDEyOjMwOjM4KzAwOjAwc/TLjgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
                  alt=""
                />
              </div>
              <div className="icon-text">
                <h3 className="mb-2">Live Chat</h3>
                <p className="sc-jRQAMF hDxSWz">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="1500" className="res-margin col-lg-4 col-md-6 aos-init aos-animate">
            <div className="image-box text-center icon-1 p-5">
              <div className="featured-img">
                <img className="avatar-sm" src={Cadena} alt="" />
              </div>
              <div className="icon-text">
                <h3 className="mb-2">Secure Data</h3>
                <p className="sc-jRQAMF hDxSWz">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="1500" className="res-margin col-lg-4 col-md-6 aos-init aos-animate">
            <div className="image-box text-center icon-1 p-5">
              <div className="featured-img">
                <img className="avatar-sm" src={Reglage} alt="" />
              </div>
              <div className="icon-text">
                <h3 className="mb-2">Facile a regler</h3>
                <p className="sc-jRQAMF hDxSWz">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="1500" className="res-margin col-lg-4 col-md-6 aos-init aos-animate">
            <div className="image-box text-center icon-1 p-5">
              <div className="featured-img">
                <img
                  className="avatar-sm"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC/VBMVEUAAAAr/6o+7Js87J0965486p486p477J087J876p076p895549654865886548654865477J87650765037aQ865086p48654965886p1A75887J48654+7J486p88654865487qI66KI96p8865497J4965486588659J25I97J886548655E7pk8654765458Zw97J486548659G6KI9654A//886548658865477Z876p4z/5k8654765077J486p4865086507654865486548655A6pUz5pk8654865476p0+6J87658865476547651A7Zs9655V/6o865487J4+6Js86p867Z0866E96p456pw87J48654A/4A865487J09654+6pw865488KU765097J47650+7Z486p9A6p887J087J496p877J8965k77J08654765866aA8650865457KE965496p486547651A558865496588654866A7654865436Zs96p48654865496p48654865877J487J48655A/4A546o865486p477aA87J0765097Z4765086p49654965877J486p896p086548654865486Z09659A358865086p477J486588654+6p867pw8654865497KA865486Z48654865487J4865087J47650865496Zs77Z8865487J486p486p8865897J48654965487J4965486548658865066p8765486548658865428qE86548651A5pk86p887J4765496p88654965886p09654865057J896aA96Z487J8965087J876p08654865086p476548654+6Z47654865087J496588654675w97Jw96p48654865496Z0865486p476p886548654965w77J8865487J4765486p496p4+6pw8654865067Z08654AAAAkXhOxAAAA/XRSTlMABilRcXyIhXdjPRUyf8D44J9bDQ5z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"
                  alt=""
                />
              </div>
              <div className="icon-text">
                <h3 className="mb-2">Utilisable sur Mobile</h3>
                <p className="sc-jRQAMF hDxSWz">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="1500" className="res-margin col-lg-4 col-md-6 aos-init aos-animate">
            <div className="image-box text-center icon-1 p-5">
              <div className="featured-img">
                <img className="avatar-sm" src={Help} alt="" />
              </div>
              <div className="icon-text">
                <h3 className="mb-2">Aide Utilisation</h3>
                <p className="sc-jRQAMF hDxSWz">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <div className="custom-shape-divider-bottom-1621292639">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>
      <div
        style={{
          height: 'auto',
          width: '100%',
          backgroundColor: '#ffcb36',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        <p style={{ color: 'black', fontFamily: 'Raleway', fontStyle: 'normal', fontWeight: 'normal', width: '50%' }}>
          Comment pense un dyslexique ?<br></br> Ainsi, le dyslexique ne comprend que le sens partiel d&#39;un mot ou d&#39;une phrase, mais pas son
          sens global.<br></br> Le message d&#39;un texte peut lui échapper totalement ou partiellement.<br></br> De ce fait, il peut avoir des
          blocages dans la lecture et des difficultés dans différentes matières
        </p>
        <img className="imgDys" src={Dyslexy2} alt="dyslexy" />
      </div>
      <div className="custom-shape-divider-top-1621549109">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>

      <Avis />
      <Footer />
    </div>
  );
}

AOS.init();
export default Home;
