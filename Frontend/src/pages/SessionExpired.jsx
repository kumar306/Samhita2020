import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import { AutoComplete, Modal } from 'antd'
import Scroll from 'react-scroll'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faFontAwesomeFlag } from '@fortawesome/free-brands-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import SamhitaLogo from '../assets/New_logo.jpg'
import SamhitaTicket from '../assets/ticket1.png'
import ACTLogo from '../assets/Sponsors/COSGRID.png'
import WorkshopPartnerImage from '../assets/Sponsors/COSGRID.png'
import KitPartnerImage from '../assets/Sponsors/COSGRID.png'
import TechFestPartnerImage from '../assets/Sponsors/COSGRID.png'
import EventPartnerImage from '../assets/Sponsors/COSGRID.png'
import CodingPartnerImage from '../assets/Sponsors/CODECHEF.png'
import StartupPartnerImage1 from '../assets/Sponsors/HALNODE.png'
import OnlinemediaPartnerImage from '../assets/Sponsors/MICSET.png'
import OnlinemediaPartnerImage2 from '../assets/Sponsors/BLACKSHEEP.png'
import StartupPartnerImage from '../assets/Sponsors/COSGRID.png'
import EducationalPartnerImage from '../assets/Sponsors/COSGRID.png'
import EntertainmentPartnerImage from '../assets/Sponsors/COSGRID.png'
import EducationalMediaPartnerImage from '../assets/Sponsors/COSGRID.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

class SessionExpired extends Component {

    constructor() {
        super()
        this.state = {
            hash: '',
            isModalVisible: false,
            isPrivacyModalVisible: false
        } 
    }

    componentDidMount() {
        const hash = this.createHash(20)
        this.setState({ hash: hash })
        const scroll = Scroll.animateScroll
        scroll.scrollToTop({
            duration: 100
        })
        AOS.init({
            delay: 150,
            duration: 100,
            once: true
        })
    }

    setModalVisible = isModalVisible => {this.setState({ isModalVisible })}

    setPrivacyModalVisible = isPrivacyModalVisible => {this.setState({ isPrivacyModalVisible })}

    handleScroll = () => {
        const scroll = Scroll.animateScroll
        scroll.scrollToBottom({
            duration: 100
        })
    }

    createHash = length => {
        var result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const charactersLength = characters.length
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    }
    
    render() {
        const { hash, isModalVisible, isPrivacyModalVisible } = this.state
        const firstPart = hash.substr(0,5)
        const remainingPart = hash.substr(5)
        const encryptedId = `${firstPart}s1${remainingPart}`
        return (
            <React.Fragment>
            <Navbar /><br></br>
            <div class="container text-center" style={{padding:'50px',marginTop:'50px',fontSize:'40px'}}>
                <h2>This process is closed temporarily.</h2>
                <a href="https://www.instagram.com/samhita_mit/"><img src="https://img.icons8.com/fluency/240/000000/instagram-new.png" height="20%"/></a>
                <p>Follow us for updates!</p>
            </div>

            <div className = 'samhita-footer has-text-centered'>
                    <div className = 'subtitle is-6 is-lato'>
                        © 2022 Samhita WebTeam • All rights reserved • There is no cancellation policy
                    </div>
                    <div className = 'subtitle is-6 is-lato' style = {{marginTop: '-15px'}}>
                        <span className = 'has-text-link' style = {{cursor: 'pointer'}} onClick = {() => this.setModalVisible(true)}>Terms & Conditions</span> | <span className = 'has-text-link' style = {{cursor: 'pointer'}} onClick = {() => this.setPrivacyModalVisible(true)}>Privacy policy</span>
                    </div>
                </div>
                <Modal className = 'is-lato' width = '90%' title = 'Terms & Conditions' centered visible = {isModalVisible} onOk = {() => this.setModalVisible(false)} closable = {false} okButtonProps = {{shape: 'round', type: 'danger'}} okText = 'Accept and close' cancelButtonProps = {{hidden: true}}>
                    <p className = 'title is-4'>Welcome to Samhita 20!</p>

                    <p>These terms and conditions outline the rules and regulations for the use of Samhita 20's Website, located at <mark>https://samhita.org.in</mark>.</p>

                    <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Samhita 22 if you do not agree to take all of the terms and conditions stated on this page. </p>

                    <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of India. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

                    <h3 style = {{margin: '1rem 0rem'}}><strong>Cookies</strong></h3>

                    <p>We employ the use of cookies. By accessing Samhita 20, you agreed to use cookies in agreement with the Samhita 20's Privacy Policy.</p>

                    <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

                    <h3 style = {{margin: '1rem 0rem'}}><strong>License</strong></h3>

                    <p>Unless otherwise stated, Samhita 20 and/or its licensors own the intellectual property rights for all material on Samhita 20. All intellectual property rights are reserved. You may access this from Samhita 20 for your own personal use subjected to restrictions set in these terms and conditions.</p>

                    <p>You must not:</p>
                    <ul style = {{listStyleType: 'square', marginLeft: '15px'}}>
                        <li>Republish material from Samhita 20</li>
                        <li>Sell, rent or sub-license material from Samhita 20</li>
                        <li>Reproduce, duplicate or copy material from Samhita 20</li>
                        <li>Redistribute content from Samhita 20</li>
                    </ul>

                    <p>This Agreement shall begin on the date hereof.</p>

                    <h3 style = {{margin: '1rem 0rem'}}><strong>Hyperlinking to our Content</strong></h3>

                    <p>The following organizations may link to our Website without prior written approval:</p>

                    <ul style = {{listStyleType: 'square', marginLeft: '15px'}}>
                        <li>Government agencies;</li>
                        <li>Search engines;</li>
                        <li>News organizations;</li>
                        <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                        <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                    </ul>

                    <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>

                    <p>We may consider and approve other link requests from the following types of organizations:</p>

                    <ul style = {{listStyleType: 'square', marginLeft: '15px'}}>
                        <li>commonly-known consumer and/or business information sources;</li>
                        <li>dot.com community sites;</li>
                        <li>associations or other groups representing charities;</li>
                        <li>online directory distributors;</li>
                        <li>internet portals;</li>
                        <li>accounting, law and consulting firms; and</li>
                        <li>educational institutions and trade associations.</li>
                    </ul>

                    <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Samhita 20; and (d) the link is in the context of general resource information.</p>

                    <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</p>

                    <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Samhita 20. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>

                    <p>Approved organizations may hyperlink to our Website as follows:</p>

                    <ul style = {{listStyleType: 'square', marginLeft: '15px'}}>
                        <li>By use of our corporate name; or</li>
                        <li>By use of the uniform resource locator being linked to; or</li>
                        <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
                    </ul>

                    <p>No use of Samhita 22's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>

                    <h3 style = {{margin: '1rem 0rem'}}><strong>iFrames</strong></h3>

                    <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

                    <h3 style = {{margin: '1rem 0rem'}}><strong>Reservation of Rights</strong></h3>

                    <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

                    <h3 style = {{margin: '1rem 0rem'}}><strong>Removal of links from our website</strong></h3>

                    <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>

                    <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>

                    <h3 style = {{margin: '1rem 0rem'}}><strong>Disclaimer</strong></h3>

                    <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>

                    <ul style = {{listStyleType: 'square', marginLeft: '15px'}}>
                        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                    </ul>

                    <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>

                    <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
                </Modal>
                <Modal className = 'is-lato' width = '90%' title = 'Privacy policy' centered visible = {isPrivacyModalVisible} onOk = {() => this.setPrivacyModalVisible(false)} closable = {false} okButtonProps = {{shape: 'round', type: 'danger'}} okText = 'Okay' cancelButtonProps = {{hidden: true}}>
                    <p>At Samhita 20, accessible from <mark>https://samhita.org.in</mark>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Samhita 20 and how we use it.</p>

                    <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

                    <h2 style = {{margin: '1rem 0rem'}}><strong>Log Files</strong></h2>

                    <p>Samhita 20 follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>

                    <h2 style = {{margin: '1rem 0rem'}}><strong>Cookies and Web Beacons</strong></h2>

                    <p>Like any other website, Samhita 20 uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

                    <h2 style = {{margin: '1rem 0rem'}}><strong>Privacy Policies</strong></h2>

                    <p>You may consult this section to find the Privacy Policy for each of the advertising partners of Samhita 20.</p>

                    <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Samhita 20, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

                    <p>Note that Samhita 20 has no access to or control over these cookies that are used by third-party advertisers.</p>

                    <h2 style = {{margin: '1rem 0rem'}}><strong>Third Party Privacy Policies</strong></h2>

                    <p>Samhita 20's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>

                    <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. <a href = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies' target = '_blank' rel = 'noreferrer noopener'>What Are Cookies?</a></p>

                    <h2 style = {{margin: '1rem 0rem'}}><strong>Children's Information</strong></h2>

                    <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

                    <p>Samhita 20 does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

                    <h2 style = {{margin: '1rem 0rem'}}><strong>Online Privacy Policy Only</strong></h2>

                    <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Samhita 20. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                    <h2 style = {{margin: '1rem 0rem'}}><strong>Consent</strong></h2>

                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                </Modal>
            </React.Fragment>
        )
    }
}

export default SessionExpired;