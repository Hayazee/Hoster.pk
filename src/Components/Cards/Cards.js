import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'

const Cards = () => {
  const selectTab = element => {
    const active = document.querySelector('.tab-active');
    const visible = document.querySelector('.content-visible');
    const tabContent = document.getElementById(element.href.split('#')[1]);
    if (active) {
      active.classList.remove('tab-active');
    }
    element.classList.add('tab-active');
    if (visible) {
      visible.classList.remove('content-visible');
    }
    tabContent.classList.add('content-visible');
  }
  document.addEventListener('click', event => {
    if (event.target.matches('.tab-item a')) {
      selectTab(event.target);
    }
  }, false);
  return (
    <>
      <section className="my-5 text-center">
        <h1 className="fw-bolder my-3">Wide Range Of <span className="fw-bolder text-green">Hosting</span> Plans</h1>
        <h6 className="fw-bolder mb-5">Choose Your Plan</h6>
        <div className="container text-center">
          <div className="text-center bg-l-grey tab-row pt-3 pb-2 rounded-pill">
            <div className="tabs row rounded-pill fw-bolder w-100 text-center">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <h6 className="tab-item"><a href="#item1" className="text-decoration-none w-100 tab-active px-5 fw-bolder">SSD Hosting</a></h6>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <h6 className="tab-item"><a href="#item2" className="text-decoration-none w-100 px-5 fw-bolder">Flash Hosting</a></h6>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <h6 className="tab-item"><a href="#item3" className="text-decoration-none w-100 px-5 fw-bolder">WordPress Hosting</a></h6>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <h6 className="tab-item"><a href="#item4" className="text-decoration-none w-100 px-5 fw-bolder">Shared VPS</a></h6>
              </div>
            </div>
          </div>
          <div className="wrapper_tab-content">
            <article id="item1" className="tab-content content-visible">
              <Card1 />
            </article>
            <article id="item2" className="tab-content">
              <Card2 />
            </article>
            <article id="item3" className="tab-content">
              <Card3 />
            </article>
            <article id="item4" className="tab-content">
              <Card4 />
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cards
