import React from 'react'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import Logo from '../images/logo.png'
import {
    Link
} from "react-router-dom";

const Dedicate = () => {
    // scrool from top
    window.scrollTo(0, 0);
    return (
        <>
            <Helmet>
                <title>Competitively Best-Dedicated Server Hosting</title>
                <meta name='Competitively Best-Dedicated Server Hosting' />
                <meta name="description" content='With best dedicated server hosting, you can enable the unlimited speed with no lags in loading. Our servers ensure 100% up time for all businesses.' />
                <meta name="keywords" content="Best-Dedicated Server Hosting cheap Dedicated hosting services Best Dedicated hosting Best Dedicated hosting in pakistan cheap Dedicated hosting for small business cheap Dedicated hosting services Best Dedicated hosting and domain Best Dedicated hosting in pakistan 2022" />
                <meta property="og:title" content="Competitively Best-Dedicated Server Hosting" />
                <meta property="og:description" content="With best dedicated server hosting, you can enable the unlimited speed with no lags in loading. Our servers ensure 100% up time for all businesses." />
                <meta property="og:image" content={Logo} />
                <Link rel="canonical" href="https://hoster.pk/dedicate" />
                <meta name="publisher" content="Haya Zeeshan" />
            </Helmet>

            <main>
                {/* main section  */}
                <section className="dedicateMain pt-5">
                    <div className="container text-center py-5">
                        <h1 className="fw-bolder my-3">Dedicate Pricing</h1>
                        <div className="mx-5 px-5">
                            <hr className="text-green px-5 mx-5" />
                            <h4 className="text-center fw-bolder">hoster.pk have specialization of offering best and quality servers for dedicated hosting services. Want to buy one for yourself? <a href="tel:+923111661112" className="ms-3">Call Now!</a></h4>
                        </div>

                        {/* pricing  */}
                        <section className="my-5">
                            <div className="row bg-green p-3 border-bottom">
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-4 bg-green pt-2">
                                            <h6 className="bg-green text-light w-100 fw-bolder">CPU</h6>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-4 bg-green pt-2">
                                            <h6 className="bg-green text-light w-100 fw-bolder">RAM</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-4 bg-green pt-2">
                                            <h6 className="bg-green text-light w-100 fw-bolder">STORAGE</h6>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-4 bg-green pt-2">
                                            <h6 className="bg-green text-light w-100 fw-bolder">BANDWITH</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-4 bg-green pt-2">
                                            <h6 className="bg-green text-light w-100 fw-bolder text-center">COST</h6>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-4 bg-green pt-2">
                                            <h6 className="bg-green text-light w-100 fw-bolder text-center">ORDER</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* row 1  */}
                            <div className="row fw-bolder bg-white border-bottom p-2">
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2">
                                            <p>4 vCPU Cores   </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2">
                                            <p>8 GB RAM   </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-4 bg-white pt-2">
                                            <p>50 GB NVMe <br />or 200 GB SSD   </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-4 bg-white pt-2">
                                            <p>32 TB Traffic <br /> Unlimited Incoming   </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row bg-white py-2">
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2 pb-1">
                                            <p> $ 16.38   </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2 pb-1">
                                            <button className="btn bg-green text-light px-2"><p className="m-0">ORDER NOW</p></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* row 2  */}
                            <div className="row fw-bolder bg-l-grey border-bottom p-2">
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2">
                                            <p>6 vCPU Cores   </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2">
                                            <p>16 GB RAM   </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2">
                                            <p>100 GB NVMe <br /> or 400 GB SSD   </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2">
                                            <p>32 TB Traffic <br /> Unlimited Incoming   </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row py-2">
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2 pb-1">
                                            <p>	$ 21.11   </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2 pb-1">
                                            <button className="btn bg-green text-light px-2"><p className="m-0">ORDER NOW</p></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* row 3  */}
                            <div className="row fw-bolder bg-white border-bottom p-2">
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2">
                                            <p>8 vCPU Cores   </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2">
                                            <p>30 GB RAM   </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2">
                                            <p>200 GB NVMe <br /> or 800 GB SSD   </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2">
                                            <p>32 TB Traffic <br /> Unlimited Incoming  </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row py-2">
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2 pb-1">
                                            <p> $ 32.76 </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2 pb-1">
                                            <button className="btn bg-green text-light px-2"><p className="m-0">ORDER NOW</p></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* row 4  */}
                            <div className="row fw-bolder bg-l-grey p-2">
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2">
                                            <p>10 vCPU Cores x</p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2">
                                            <p>60 GB RAM  </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2">
                                            <p>400 GB NVMe <br /> or 1.6 TB SSD   </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2">
                                            <p>32 TB Traffic <br /> Unlimited Incoming   </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row py-2">
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2 pb-1">
                                            <p>	$ 43.99  </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-4 pt-2 pb-1">
                                            <button className="btn bg-green text-light px-2"><p className="m-0">ORDER NOW</p></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                {/* key features  */}
                <section className="bg-l-grey py-5">
                    <div className="container py-5">
                        <h3 className="fw-bolder text-center mb-5"> Dedicate <span className='text-green'>Key Features</span> </h3>
                        <div className="row bg-white p-3 rounded-15">
                            <div className="col-lg-6 col-md-6 col-sm-12 px-5 my-3">
                                <div className="row">
                                    <div className="col-2">
                                        <h3 className="display-3 my-5 text-green"><i className="fas fa-file-invoice-dollar"></i> </h3>
                                    </div>
                                    <div className="col-10"> <h3 className="fw-bolder">More Compute Power for Less Money</h3>
                                        <h6>Best thing about hoster.pk Dedicate? Price efficiency! Starting from €4.99 you get your own virtual server with an operating system of your choice and full root access. A Virtual Private Server is a great way to get an independent computing instance at an unmatched price point.</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 px-5 my-3">
                                <div className="row">
                                    <div className="col-2">
                                        <h3 className="display-3 my-5 text-green"><i className="far fa-file-alt"></i> </h3>
                                    </div>
                                    <div className="col-10"> <h3 className="fw-bolder">Storage Customization</h3>
                                        <h6>You can choose the type of storage that goes with each Dedicate. Go with a super fast NVMe storage with over 1,000,000 IOPS or a large SSD drive if space is more important than speed for you. If you can't decide, you can have both thanks to NVMe Storage Expansion Add-On</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 px-5 my-3">
                                <div className="row">
                                    <div className="col-2">
                                        <h3 className="display-3 my-5 text-green"><i className="fas fa-folder-open"></i> </h3>
                                    </div>
                                    <div className="col-10"> <h3 className="fw-bolder">More Traffic then You Will Ever Need</h3>
                                        <h6>Each Dedicate comes with 32 TB of outgoing and unlimited incoming traffic included with a connection speed between 200 Mbit/s and 1 Gbit/s. In reality this is equal to unlimited traffic for 99.98% of our customers. Unlike some of our competitors, at hoster.pk we will never charge you extra for incoming or outgoing data transfer on your Virtual Private Server.</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 px-5 my-3">
                                <div className="row">
                                    <div className="col-2">
                                        <h3 className="display-3 my-5 text-green"><i className="far fa-clock"></i> </h3>
                                    </div>
                                    <div className="col-10"> <h3 className="fw-bolder">Quick Provisioning</h3>
                                        <h6>Every day we provision hundreds of Dedicate with an average time of 20 minutes. Make sure to pay for Virtual Private Server with credit card so that we can provision it right away without waiting for money to arrive.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* features  */}
                <section className="my-5">
                    <div className="container text-start">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                                <h5 className="fw-bolder my-3"><i className="fas fa-check text-green"></i> No Extra Fees For Traffic</h5>
                                <h5 className="fw-bolder my-3"><i className="fas fa-check text-green"></i> Snapshot Technology Included</h5>
                                <h5 className="fw-bolder my-3"><i className="fas fa-check text-green"></i> DNS Management Through Web Interface</h5>
                                <h5 className="fw-bolder my-3"><i className="fas fa-check text-green"></i> Domains and SSL Certificates Available</h5>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                                <h5 className="fw-bolder my-3"><i className="fas fa-check text-green"></i> DDoS Protection Included</h5>
                                <h5 className="fw-bolder my-3"><i className="fas fa-check text-green"></i> VNC Access Included</h5>
                                <h5 className="fw-bolder my-3"><i className="fas fa-check text-green"></i> One-click Upgrades Through Web Interface</h5>
                                <h5 className="fw-bolder my-3"><i className="fas fa-check text-green"></i> 1 IPv4 & /64 IPv6 Network Included</h5>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                                <h5 className="fw-bolder my-3"><i className="fas fa-check text-green"></i> OS Reinstall and Reboot Through Web Interface</h5>
                                <h5 className="fw-bolder my-3"><i className="fas fa-check text-green"></i> Uptime Monitoring Available</h5>
                                <h5 className="fw-bolder my-3"><i className="fas fa-check text-green"></i> Additional Backup Space Available</h5>
                                <h5 className="fw-bolder my-3"><i className="fas fa-check text-green"></i> Additional IPs Available</h5>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dedicate FAQs  */}
                <section className="my-3 container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12"><img alt="images" src="https://themelooks.us/demo/ecohosting/wordpress/wp-content/uploads/2016/11/domain-page-faq-1.png" /></div>
                        <div className="col-lg-6 col-md-6 col-sm-12 my-5">
                            <h3 className="fw-bolder mt-3">Dedicate FAQ</h3>
                            <hr className="text-green mb-3" />
                            <p className="bg-green text-light p-2 fw-bolder rounded" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Can I Customize A Dedicated Server? <span className="float-end"><i className="fas fa-angle-down"></i> </span>
                            </p>
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <p className="card-body border rounded">
                                    Yes, while ordering a new Dedicated Server you can customize the amount of RAM and choose from many Storage options. Furthermore, you can also add GPU, better NIC and many other hardware components. If you want to change your existing Dedicated Server configuration, please contact our support. Please note that Outlet Servers have fixed hardware configurations and cannot be changed.
                                </p>
                            </div>
                            <div className="collapse-2 my-3">
                                <p className="bg-green text-light p-2 fw-bolder rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                    Which Operating Systems Are Available For My Dedicated Server? <span className="float-end"> <i className="fas fa-angle-down"></i> </span>
                                </p>
                                <div className="collapse" id="collapseExample2">
                                    <div className="card card-body">
                                        <p>At hoster.pk, the choice is yours: Select from a wide range of popular Linux distributions (CentOS, Debian, Ubuntu, and many others) and Windows Server. You can also use your own license.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse-3">
                                <p className="bg-green text-light p-2 fw-bolder rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                                    I Need A Custom Operating System Installation With Specific Parameters, Do You Offer That? <span className="float-end"> <i className="fas fa-angle-down"></i> </span>
                                </p>
                                <div className="collapse" id="collapseExample3">
                                    <div className="card card-body">
                                        <p>That is no problem, please contact our Customer Support Department and we will be happy to offer you the price for an individual Operating System installation by our technical experts.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse-4">
                                <p className="bg-green text-light p-2 fw-bolder rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                                    Can I Change The Hardware Configuration Of My Dedicated Server Later On? <span className="float-end"> <i className="fas fa-angle-down"></i> </span>
                                </p>
                                <div className="collapse" id="collapseExample4">
                                    <div className="card card-body">
                                        <p>Sure, no problem. We can add or remove disks for you, equip it with more RAM. Please contact our Customer Support Department with your request and we will inform you about the details, the fee we charge for the tasks and coordinate the time with you when we take care of the maintenance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* footer  */}
                <Footer />

            </main>
        </>
    )
}

export default Dedicate
