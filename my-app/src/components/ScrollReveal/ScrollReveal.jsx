import React from 'react';
import './ScrollReveal.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
function ScrollReveal() {
  return (
    <div className="flex-container">
      <div className="flex-body">
        <div className="layout__wrapper">
          <div className="demo layout__padding__horizontal layout__padding__vertical">
            <div className="demo__column">
              <div className="demo__bar demo__bar-medium" data-aos="zoom-in-up" data-aos-duration="400">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-red" data-sr-id="0">
                    <p className="textScroll">A</p>
                  </div>
                </div>
              </div>
              <div className="demo__bar" data-aos="zoom-in-up" data-aos-duration="500">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-green" data-sr-id="2"></div>
                </div>
              </div>
              <div className="demo__bar" data-aos="zoom-in-up" data-aos-duration="400">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-purple" data-sr-id="3"></div>
                </div>
              </div>
              <div className="demo__bar" data-aos="zoom-in-up" data-aos-duration="600">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-red" data-sr-id="4"></div>
                </div>
              </div>
              <div className="demo__bar demo__bar-large" data-aos="zoom-in-up" data-aos-duration="300">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-orange" data-sr-id="5"></div>
                </div>
              </div>
              <div className="demo__bar" data-aos="zoom-in-up" data-aos-duration="800">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-blue" data-sr-id="6"></div>
                </div>
              </div>
            </div>
            <div className="demo__column">
              <div className="demo__bar" data-aos="zoom-in-up" data-aos-duration="500">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-orange" data-sr-id="7">
                    <p className="textScroll">L</p>
                  </div>
                </div>
              </div>
              <div className="demo__bar demo__bar-large" data-aos="zoom-in-up" data-aos-duration="400">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-blue" data-sr-id="8"></div>
                </div>
              </div>
              <div className="demo__bar demo__bar-medium" data-aos="zoom-in-up" data-aos-duration="600">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-yellow" data-sr-id="9"></div>
                </div>
              </div>
              <div className="demo__bar demo__bar-medium" data-aos="zoom-in-up" data-aos-duration="500">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-blue" data-sr-id="10"></div>
                </div>
              </div>
              <div className="demo__bar" data-aos="zoom-in-up" data-aos-duration="300">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-red" data-sr-id="11"></div>
                </div>
              </div>
              <div className="demo__bar demo__bar-medium" data-aos="zoom-in-up" data-aos-duration="400">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-green" data-sr-id="12"></div>
                </div>
              </div>
            </div>
            <div className="demo__column">
              <div className="demo__bar demo__bar-medium" data-aos="zoom-in-up" data-aos-duration="600">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-yellow" data-sr-id="13">
                    {' '}
                    <p className="textScroll">P</p>
                  </div>
                </div>
              </div>
              <div className="demo__bar" data-aos="zoom-in-up" data-aos-duration="400">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-red" data-sr-id="14"></div>
                </div>
              </div>
              <div className="demo__bar" data-aos="zoom-in-up" data-aos-duration="900">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-orange" data-sr-id="15"></div>
                </div>
              </div>
              <div className="demo__bar demo__bar-large" data-aos="zoom-in-up" data-aos-duration="500">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-green" data-sr-id="16"></div>
                </div>
              </div>
              <div className="demo__bar" data-aos="zoom-in-up" data-aos-duration="300">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-purple" data-sr-id="17"></div>
                </div>
              </div>
              <div className="demo__bar" data-aos="zoom-in-up" data-aos-duration="900">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-yellow" data-sr-id="18"></div>
                </div>
              </div>
            </div>
            <div className="demo__column">
              <div className="demo__bar demo__bar-medium" data-aos="zoom-in-up" data-aos-duration="700">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-green" data-sr-id="19">
                    <p className="textScroll">H</p>
                  </div>
                </div>
              </div>
              <div className="demo__bar demo__bar-medium" data-aos="zoom-in-up" data-aos-duration="400">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-purple" data-sr-id="20"></div>
                </div>
              </div>
              <div className="demo__bar demo__bar-large" data-aos="zoom-in-up" data-aos-duration="800">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-blue" data-sr-id="21"></div>
                </div>
              </div>
              <div className="demo__bar demo__bar-medium" data-aos="zoom-in-up" data-aos-duration="300">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-yellow" data-sr-id="22"></div>
                </div>
              </div>
              <div className="demo__bar" data-aos="zoom-in-up" data-aos-duration="700">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-blue" data-sr-id="23"></div>
                </div>
              </div>
              <div className="demo__bar demo__bar-large" data-aos="zoom-in-up" data-aos-duration="400">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-orange" data-sr-id="24"></div>
                </div>
              </div>
            </div>
            <div className="demo__column">
              <div className="demo__bar" data-aos="zoom-in-up" data-aos-duration="800">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-blue" data-sr-id="25">
                    <p className="textScroll">A</p>
                  </div>
                </div>
              </div>
              <div className="demo__bar demo__bar-large" data-aos="zoom-in-up" data-aos-duration="450">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-orange" data-sr-id="26"></div>
                </div>
              </div>
              <div className="demo__bar" data-aos="zoom-in-up" data-aos-duration="550">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-red" data-sr-id="27"></div>
                </div>
              </div>
              <div className="demo__bar demo__bar-large" data-aos="zoom-in-up" data-aos-duration="700">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-purple" data-sr-id="28"></div>
                </div>
              </div>
              <div className="demo__bar demo__bar-medium" data-aos="zoom-in-up" data-aos-duration="650">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-green" data-sr-id="29"></div>
                </div>
              </div>
              <div className="demo__bar demo__bar-medium" data-aos="zoom-in-up" data-aos-duration="300">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-red" data-sr-id="30"></div>
                </div>
              </div>
            </div>
            <div className="demo__column">
              <div className="demo__bar demo__bar-medium" data-aos="zoom-in-up" data-aos-duration="900">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-purple" data-sr-id="31">
                    <p className="textScroll">B</p>
                  </div>
                </div>
              </div>
              <div className="demo__bar" data-aos="zoom-in-up" data-aos-duration="450">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-yellow" data-sr-id="32"></div>
                </div>
              </div>
              <div className="demo__bar" data-aos="zoom-in-up" data-aos-duration="400">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-green" data-sr-id="33"></div>
                </div>
              </div>
              <div className="demo__bar" data-aos="zoom-in-up" data-aos-duration="360">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-orange" data-sr-id="34"></div>
                </div>
              </div>
              <div className="demo__bar demo__bar-medium" data-aos="zoom-in-up" data-aos-duration="800">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-yellow" data-sr-id="35"></div>
                </div>
              </div>
              <div className="demo__bar" data-aos="zoom-in-up" data-aos-duration="750">
                <div className="demo__bar__wrapper">
                  <div className="demo__bar__fill demo__bar__fill-purple" data-sr-id="36"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
AOS.init();

export default ScrollReveal;
