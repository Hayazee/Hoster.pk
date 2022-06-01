import React from 'react'
import Footer from './Footer'
import $ from 'jquery'
import { Helmet } from 'react-helmet'
import Logo from '../images/logo.png'
import {
    Link
} from 'react-router-dom'

const vpsHome = () => {
    // scrool from top
    window.scrollTo(0, 0);
    // default collapse start here
    $(document).ready(function () {
        $(".collapse2").click(function () {
            $(".collapseshow2").toggle();
        });
    });
    // default  collapse end here
    return (
        <>
            <Helmet>
                <title>Cheap Vps Hosting 100% Ssd Storage with Flash Packages | Hosters Pk</title>
                <meta name="Cheap Vps Hosting 100% Ssd Storage with Flash Packages | Hosters Pk" />
                <meta name="keywords" content="cheap VPS hosting services cheap VPS hosting cheap VPS hosting in pakistan cheap VPS hosting for small business cheap VPS hosting services cheap VPS hosting and domain cheap VPS hosting in pakistan 2022" />
                <meta name="description" content="Our vps hosting is cheaper to buy with custom budget planing. You can get access to own flash packages at extremly low rates in the region." />
                <meta property="og:title" content="Cheap Vps Hosting 100% Ssd Storage with Flash Packages | Hoster.Pk" />
                <meta property="og:description" content="Our vps hosting is cheaper to buy with custom budget planing. You can get access to own flash packages at extremly low rates in the region." />
                <meta property="og:image" content={Logo} />
                <Link rel="canonical" href="https://hoster.pk/vps" />
                <meta name="publisher" content="Haya Zeeshan" />
            </Helmet>

            {/* main section  */}
            <section className="dedicateMain py-5">
                <div className="container text-center py-5">
                    <h1 className="fw-bolder my-3">VPS Pricing</h1>
                    <div className="mx-5 px-5">
                        <hr className="text-green px-5 mx-5" />
                    </div>
                    <h4 className="text-center fw-bolder my-5">Want to develop your own needs and goals with business!! Ensure 100% up time with our VPS hosting services where everything is crafted to YOU!! For Details, Call Now.</h4>

                    {/* pricing  */}
                    <section className="pt-4">
                        <div className="row bg-green p-3 border-bottom">
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-lg-6 bg-green pt-2">
                                        <h6 className="bg-green text-white fw-bolder w-100 fw-bolder">CPU</h6>
                                    </div>
                                    <div className="col-lg-6 bg-green pt-2">
                                        <h6 className="bg-green text-white fw-bolder w-100 fw-bolder">RAM</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-lg-6 bg-green pt-2">
                                        <h6 className="bg-green text-white fw-bolder w-100 fw-bolder">STORAGE</h6>
                                    </div>
                                    <div className="col-lg-6 bg-green pt-2">
                                        <h6 className="bg-green text-white fw-bolder w-100 fw-bolder">BANDWITH</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-lg-6 bg-green pt-2">
                                        <h6 className="bg-green text-white fw-bolder w-100 fw-bolder text-center">COST</h6>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 bg-green pt-2">
                                        <h6 className="bg-green text-white fw-bolder w-100 fw-bolder text-center">ORDER</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* row 1  */}
                        <div className="row fw-bolder bg-white border-bottom p-2">
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-lg-6 pt-2">
                                        <p>4 vCPU Cores   </p>
                                    </div>
                                    <div className="col-lg-6 pt-2">
                                        <p>8 GB RAM   </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 bg-white pt-2">
                                        <p>50 GB NVMe <br />or 200 GB SSD   </p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 bg-white pt-2">
                                        <p>32 TB Traffic <br /> Unlimited Incoming   </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row bg-white py-2">
                                    <div className="col-lg-6 col-md-6 col-sm-12 pt-2 pb-1">
                                        <p> $ 12.38   </p>
                                    </div>
                                    <div className="col-lg-6 pt-2 pb-1">
                                        <button className="btn bg-green text-white fw-bolder px-2"><p className="m-0">ORDER NOW</p></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* row 2  */}
                        <div className="row fw-bolder bg-l-grey border-bottom p-2">
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-lg-6 pt-2">
                                        <p>6 vCPU Cores   </p>
                                    </div>
                                    <div className="col-lg-6 pt-2">
                                        <p>16 GB RAM   </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 pt-2">
                                        <p>100 GB NVMe <br /> or 400 GB SSD   </p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 pt-2">
                                        <p>32 TB Traffic <br /> Unlimited Incoming   </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row py-2">
                                    <div className="col-lg-6 col-md-6 col-sm-12 pt-2 pb-1">
                                        <p>	$ 17.11   </p>
                                    </div>
                                    <div className="col-lg-6 pt-2 pb-1">
                                        <button className="btn bg-green text-white fw-bolder px-2">
                                            <p className="m-0">ORDER NOW</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* row 3  */}
                        <div className="row fw-bolder bg-white border-bottom p-2">
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-lg-6 pt-2">
                                        <p>8 vCPU Cores   </p>
                                    </div>
                                    <div className="col-lg-6 pt-2">
                                        <p>30 GB RAM   </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 pt-2">
                                        <p>200 GB NVMe <br /> or 800 GB SSD   </p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 pt-2">
                                        <p>32 TB Traffic <br /> Unlimited Incoming  </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row py-2">
                                    <div className="col-lg-6 col-md-6 col-sm-12 pt-2 pb-1">
                                        <p> $ 25.76 </p>
                                    </div>
                                    <div className="col-lg-6 pt-2 pb-1">
                                        <button className="btn bg-green text-white fw-bolder px-2">
                                            <p className="m-0">ORDER NOW</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* row 4  */}
                        <div className="row fw-bolder bg-l-grey p-2">
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-lg-6 pt-2">
                                        <p>10 vCPU Cores x</p>
                                    </div>
                                    <div className="col-lg-6 pt-2">
                                        <p>60 GB RAM  </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 pt-2">
                                        <p>400 GB NVMe <br /> or 1.6 TB SSD   </p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 pt-2">
                                        <p>32 TB Traffic <br /> Unlimited Incoming   </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row py-2">
                                    <div className="col-lg-6 col-md-6 col-sm-12 pt-2 pb-1">
                                        <p>	$ 39.99  </p>
                                    </div>
                                    <div className="col-lg-6 pt-2 pb-1">
                                        <button className="btn bg-green text-white fw-bolder px-2"><p className="m-0">ORDER NOW</p></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            {/* key features  */}
            <section className="bg-l-grey">
                <div className="container py-5">
                    <h3 className="fw-bolder text-center mb-5">Key VPS Features</h3>
                    <div className="row bg-white p-3 rounded-15">
                        <div className="col-lg-6 col-md-6 col-sm-12 px-5 my-3">
                            <div className="row">
                                <div className="col-2">
                                    <h3 className="display-3 my-5 text-green"><i className="fas fa-file-invoice-dollar"></i> </h3>
                                </div>
                                <div className="col-10"> <h3 className="fw-bolder">More Compute Power for Less Money</h3>
                                    <h6>Best thing about hoster.pk VPS? Price efficiency! Starting from €4.99 you get your own virtual server with an operating system of your choice and full root access. A Virtual Private Server is a great way to get an independent computing instance at an unmatched price point.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 px-5 my-3">
                            <div className="row">
                                <div className="col-2">
                                    <h3 className="display-3 my-5 text-green"><i className="far fa-file-alt"></i> </h3>
                                </div>
                                <div className="col-10"> <h3 className="fw-bolder">Storage Customization</h3>
                                    <h6>You can choose the type of storage that goes with each VPS. Go with a super fast NVMe storage with over 1,000,000 IOPS or a large SSD drive if space is more important than speed for you. If you can't decide, you can have both thanks to NVMe Storage Expansion Add-On</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 px-5 my-3">
                            <div className="row">
                                <div className="col-2">
                                    <h3 className="display-3 my-5 text-green"><i className="fas fa-folder-open"></i> </h3>
                                </div>
                                <div className="col-10"> <h3 className="fw-bolder">More Traffic then You Will Ever Need</h3>
                                    <h6>Each VPS comes with 32 TB of outgoing and unlimited incoming traffic included with a connection speed between 200 Mbit/s and 1 Gbit/s. In reality this is equal to unlimited traffic for 99.98% of our customers. Unlike some of our competitors, at hoster.pk we will never charge you extra for incoming or outgoing data transfer on your Virtual Private Server.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 px-5 my-3">
                            <div className="row">
                                <div className="col-2">
                                    <h3 className="display-3 my-5 text-green"><i className="far fa-clock"></i> </h3>
                                </div>
                                <div className="col-10"> <h3 className="fw-bolder">Quick Provisioning</h3>
                                    <h6>Every day we provision hundreds of VPS with an average time of 20 minutes. Make sure to pay for Virtual Private Server with credit card so that we can provision it right away without waiting for money to arrive.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* features  */}
            <section className="my-5">
                <div className="container text-start py-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                            <h5 className="fw-bolder my-3"><i className="far fa-check-circle text-green"></i> No Extra Fees For Traffic</h5>
                            <h5 className="fw-bolder my-3"><i className="far fa-check-circle text-green"></i> Snapshot Technology Included</h5>
                            <h5 className="fw-bolder my-3"><i className="far fa-check-circle text-green"></i> DNS Management Through Web Interface</h5>
                            <h5 className="fw-bolder my-3"><i className="far fa-check-circle text-green"></i> Domains and SSL Certificates Available</h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                            <h5 className="fw-bolder my-3"><i className="far fa-check-circle text-green"></i> DDoS Protection Included</h5>
                            <h5 className="fw-bolder my-3"><i className="far fa-check-circle text-green"></i> VNC Access Included</h5>
                            <h5 className="fw-bolder my-3"><i className="far fa-check-circle text-green"></i> One-click Upgrades Through Web Interface</h5>
                            <h5 className="fw-bolder my-3"><i className="far fa-check-circle text-green"></i> 1 IPv4 & /64 IPv6 Network Included</h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                            <h5 className="fw-bolder my-3"><i className="far fa-check-circle text-green"></i> OS Reinstall and Reboot Through Web Interface</h5>
                            <h5 className="fw-bolder my-3"><i className="far fa-check-circle text-green"></i> Uptime Monitoring Available</h5>
                            <h5 className="fw-bolder my-3"><i className="far fa-check-circle text-green"></i> Additional Backup Space Available</h5>
                            <h5 className="fw-bolder my-3"><i className="far fa-check-circle text-green"></i> Additional IPs Available</h5>
                        </div>
                    </div>
                </div>
            </section>

            {/* NWM  */}
            <section className="my-3">
                <div className="container">
                    <h3 className="my-5 fw-bolder text-center">Now with Super-Fast NVMe Drives</h3>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img alt="NWM images" src="https://images.ctfassets.net/uhwn5kvabnul/2JXylvwadBMs3oCFPxxxnl/8270cc0d0bfdcf287e773f375c482500/Samsung_NVMe_Perspective.png?w=780&fit=pad&q=80&fm=webp" className="w-100" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h3 className="fw-bolder my-3">Gen 4 PCIe NVMe <span className="bg-green p-2 text-white fw-bolder rounded-15">New</span></h3>
                            <h6>hoster.pk VPS now come with latest generation NVMe drive included at no additional price!</h6>
                            <br />
                            <h6>If you want more storage, no problem, you can still choose the standard SSD or extend the NVMe capacity for a few bucks.</h6>
                            <br />
                            <h6>Why choose NVMe? The specifications show that NVMe enhances the performance of your VPS 10 times.</h6>
                        </div>
                    </div>
                </div>
            </section>

            {/* Storage  */}
            <section className="my-5 bg-l-grey py-5">
                <div className="container py-5 text-start">
                    <h3 className="text-center fw-bolder mb-5">Storage Manufacturer Specifications</h3>
                    <div className="row bg-white p-4 rounded-top w-100">
                        <div className="col-3"> {/* empty */} </div>
                        <div className="col-3">
                            <h5 className="fw-bolder">SSD</h5>
                        </div>
                        <div className="col-3">
                            <h5 className="fw-bolder">Gen 4 NVMe</h5>
                        </div>
                        <div className="col-3">
                            <h5 className="fw-bolder">Growth</h5>
                        </div>
                    </div>
                    <div className="row bg-white p-4 border-top w-100">
                        <div className="col-3">
                            <h6 className="fw-bold">Sequential Read</h6>
                        </div>
                        <div className="col-3">
                            <h6 className="fw-bold">560</h6>
                        </div>
                        <div className="col-3">
                            <h6 className="fw-bold">7,000</h6>
                        </div>
                        <div className="col-3">
                            <h6 className="fw-bold">15.50x</h6>
                        </div>
                    </div>
                    <div className="row bg-white p-4 border-top w-100">
                        <div className="col-3">
                            <h6 className="fw-bold">Random Read IOPs</h6>
                        </div>
                        <div className="col-3">
                            <h6 className="fw-bold">98,000</h6>
                        </div>
                        <div className="col-3">
                            <h6 className="fw-bold">1,000,000</h6>
                        </div>
                        <div className="col-3">
                            <h6 className="fw-bold">10.20x</h6>
                        </div>
                    </div>
                    <div className="row bg-white p-4 border-top w-100 rounded-bottom">
                        <div className="col-3">
                            <h6 className="fw-bold">Random Write IOPs</h6>
                        </div>
                        <div className="col-3">
                            <h6 className="fw-bold">88,000</h6>
                        </div>
                        <div className="col-3">
                            <h6 className="fw-bold">850,000</h6>
                        </div>
                        <div className="col-3">
                            <h6 className="fw-bold">9.66x</h6>
                        </div>
                    </div>

                    {/* Technology  */}
                    <h3 className="fw-bolder text-center my-5">The Technology Behind VPS</h3>
                    <div className="row bg-white p-3 rounded-15">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h4 className="my-3 fw-bolder text-center">Brand New Hardware</h4>
                            <h6>In hoster.pk we have almost 20 years of experience in running VPS, so we know what type of hardware guarantees long lasting and stable performance. Looking at our prices you might be surprised to learn that we use only brand new high-quality components from companies like Intel, AMD and Samsung. No matter we pay more for that type of hardware, it offers greater stability and performance while running virtualization, so it's a better choice for host systems than cheap alternatives.</h6>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h4 className="my-3 fw-bolder text-center">Secrets of Virtualization</h4>
                            <h6>In hoster.pk we have almost 20 years of experience in running VPS, so we know what type of hardware guarantees long lasting and stable performance. Looking at our prices you might be surprised to learn that we use only brand new high-quality components from companies like Intel, AMD and Samsung. No matter we pay more for that type of hardware, it offers greater stability and performance while running virtualization, so it's a better choice for host systems than cheap alternatives.</h6>
                        </div>
                    </div>

                    {/* reasons  */}
                    <h3 className="fw-bolder my-5 text-center">6 Reasons to Buy a VPS with hoster.pk</h3>
                    <div className="row bg-white p-3 rounded-15 text-center">
                        <div className="col">
                            <h3 className="fw-bolder text-green display-3"><i class="far fa-check-square"></i></h3>
                            <h5 className="fw-bolder my-3"> Focused on providing German Quality </h5>
                            <p>Since founding in 2003 hoster.pk is committed to provide German quality in every aspect of our business.</p>
                        </div>
                        <div className="col">
                            <h3 className="fw-bolder text-green display-3"><i className="fas fa-globe-americas"></i></h3>
                            <h5 className="fw-bolder my-3"> Global Availability</h5>
                            <p>hoster.pk operates Data Centers in key Regions around the globe. All of them use the same platform and the same German quality standards.</p>
                        </div>
                        <div className="col">
                            <h3 className="fw-bolder text-green display-3"><i className="fas fa-tags"></i></h3>
                            <h5 className="fw-bolder my-3"> Incredible Prices </h5>
                            <p>Keeping prices low is deep in hoster.pk DNA. We make sure to offer unbeatable prices everyday, not only during promotions. Here are 4 things we do to keep our VPS prices low..</p>
                        </div>
                        <div className="col">
                            <h3 className="fw-bolder text-green display-3"><i className="fas fa-sms"></i></h3>
                            <h5 className="fw-bolder my-3"> First-class Support </h5>
                            <p>Learn what makes hoster.pk Support experience special and why we have received multiple awards and thousands of good review for our work at customer support.</p>
                        </div>
                        <div className="col">
                            <h3 className="fw-bolder text-green display-3"><i className="fas fa-shield-alt"></i></h3>
                            <h5 className="fw-bolder my-3"> Focus on Security </h5>
                            <p>We are very serious about security in hoster.pk. Get to know our 3 pillars of security.</p>
                        </div>
                        <div className="col">
                            <h3 className="fw-bolder text-green display-3"><i className="fas fa-award"></i></h3>
                            <h5 className="fw-bolder my-3"> Awards & Recognitions </h5>
                            <p>We don't like to brag, but we thought you'd be interested to know that hoster.pk has been repeatedly recognized for our Customer Support, Data Center efficiency and uptime.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-5 container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center"><img className="w-75" alt="images" src="https://themelooks.us/demo/ecohosting/wordpress/wp-content/uploads/2016/11/domain-page-faq-1.png" /></div>
                    <div className="col-lg-6 col-md-6 col-sm-12 my-5">
                        <h3 className="fw-bolder mt-3">VPS FAQ</h3>
                        <hr className="text-green mb-3" />
                        <p className="bg-green text-white fw-bolder p-2 fw-bolder rounded" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Can I Virtualize My VPS? <span className="float-end"> <i className="fas fa-angle-down"></i> </span>
                        </p>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <p class Name="card-body border rounded">
                                No, our Virtual Private Servers do not support nested virtualization. Should you need to run your own virtual machines, you can order one of our Dedicated Servers or our Virtual Dedicated Servers.
                            </p>
                        </div>
                        <div className="collapseshow2 my-3">
                            <p className="bg-green text-white fw-bolder p-2 fw-bolder rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                Do You Offer Control Planers For An Easy Administration Of My VPS? <span className="float-end"> <i className="fas fa-angle-down"></i> </span>
                            </p>
                            <div className="collapse" id="collapseExample2">
                                <div className="card card-body">
                                    <p>Yes, we offer cPanel and Plesk admin panels at extra cost, as well as Webmin which is available free of charge. At
                                        hoster.pk, we exclusively offer you to try Plesk one month for free with our VPS, Virtual Dedicated Servers and Dedicated Servers! Should it not suit your needs, simply cancel it before the end of the first month through your Customer Control Panel and there will be no fee charged for it!</p>
                                    <p>Our comparison of administration panels gives some more information and could possibly help you to take a decision.</p>
                                    <p>You can order your preferred panel directly with your VPS or later by contacting our customer support via e-mail.</p>
                                </div>
                            </div>
                        </div>
                        <div className="collapse-3">
                            <p className="bg-green text-white fw-bolder p-2 fw-bolder rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                                Which Operation Systems Are Available For My VPS? <span className="float-end"> <i className="fas fa-angle-down"></i> </span>
                            </p>
                            <div className="collapse" id="collapseExample3">
                                <div className="card card-body">
                                    <p>At
                                        hoster.pk, the choice is yours: Select from a wide range of popular Linux distributions (CentOS, Debian, Ubuntu, and many others) and Windows Server. Since we do not believe in offering pre-configured bundles but let you configure your server according to your needs, the Windows license fee is added to your monthly VPS fee only if you choose this Operating System. The amount charged depends on the size of your VPS.</p>
                                </div>
                            </div>
                        </div>
                        <div className="collapse-4">
                            <p className="bg-green text-white fw-bolder p-2 fw-bolder rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                                Can I Upgrade To A Different VPS Plan Later? <span className="float-end"> <i className="fas fa-angle-down"></i> </span>
                            </p>
                            <div className="collapse" id="collapseExample4">
                                <div className="card card-body">
                                    <p>Yes, you can easily upgrade to a bigger VPS plan through your
                                        hoster.pk Customer Control Panel. Simply go to the administration of your VPS, click on “Manage” and select “Upgrade VPS” from the drop-down menu. The next steps are explained there in detail. Should you wish to switch to a smaller plan, we recommend to purchase it through your Customer Control Panel, transfer all data from your existing VPS to it and then mark your VPS for cancellation. In case you need assistance with this process, kindly get in touch with our Customer Support Department.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* footer  */}
            <Footer />
        </>
    )
}

export default vpsHome
