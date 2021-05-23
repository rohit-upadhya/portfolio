import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';

const TimeLine = () => {
    return(
        <Container>
            <Container style={{ paddingBottom: '40px'}}>
                <h1 class='fontywhite'>
                    Timeline
                </h1>
            </Container>
            <div class="container">
            <div class="main-timeline">
                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                        <span class="month">July</span>
                                        <span class="year">2019</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title fontywhite">Software Engineer </h5>
                                <h6 class=" fontywhite">
                                    <strong>
                                        Lowe's India
                                    </strong>
                                </h6>
                                <p class="description fontywhite">
                                    {'\u2022'}Managing the Project Portfolio Management, Software Asset Management Portfolio, working on Automations and Integrations using Python and XML.
                                    <br/>
                                    {'\u2022'}Working on ElasticSeach, Logstash and Kibana for Data Consumption and Analytics.<br/>
                                    {'\u2022'}Working on Django to provide various teams with an API layer above the ticketing tool that is used by the Organization.
                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                        <span class="month">May-July</span>
                                        <span class="year">2018</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title fontywhite">Summer Research Fellow</h5>
                                <h6 class=" fontywhite">
                                    <strong>
                                        Indian Academy Of Sciences
                                    </strong>
                                </h6>
                                <p class="description fontywhite">
                                    {'\u2022'}Worked on Machine Learning Algorithms. Built a Digit and Binary Classifier usiing Convolutional Neural Network.
                                    <br/>
                                    {'\u2022'}Worked as the tech person for the Guide's NGO, helping develop <a href='http://nurture1729.esy.es/'>this</a> website.
                                </p>
                            </div>
                        </div>
                        {/* <!-- start experience section--> */}
                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                            <span class="month">May-July</span>
                                    <span class="year">2017</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title fontywhite">Summer Research Intern</h5>
                                <h6 class=" fontywhite">
                                    <strong>
                                        IT Department, North Eastern Hill University
                                    </strong>
                                </h6>
                                <p class="description fontywhite">
                                    {'\u2022'}Worked on the building blocks powering modern Cryptographic Algorithms like Linear Feedback Shift Resistors.
                                    <br/>
                                    {'\u2022'}Implemented the &sigma;-LFSR in C<br/>
                                    {'\u2022'}Published a Book Chapter on the Applicability of Stream Ciphers in Crowd Computing. The complete paper can be found <a href="https://www.researchgate.net/publication/333962798_Applicability_of_Lightweight_Stream_Cipher_in_Crowd_Computing_A_Detailed_Survey_and_Analysis">here.</a><br/>
                                </p>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}

                        {/* <!-- start experience section--> */}
                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                            <span class="month"></span>
                                    <span class="year">2015-<br/>2019</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title fontywhite">B.Tech, Computer Science and Engineering</h5>
                                <h6 class=" fontywhite">
                                    <strong>
                                        National Institute of Technology, Silchar
                                    </strong>
                                </h6>
                                <p class="description fontywhite">
                                    GPA : 8.13/10
                                    <br/>
                                    Computer Science Society | Technical Head <br/>
                                    Quiz Club                | Senior Executive Member <br/>
                                    TEDxNITSilchar           | Technical Head and Core Member
                                </p>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}

                        {/* <!-- start experience section--> */}
                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                            <span class="month"></span>
                                    <span class="year">2014</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title fontywhite">AISSCE 2014, CBSE</h5>
                                <h6 class=" fontywhite">
                                    <strong>
                                        South Point School Guwahati
                                    </strong>
                                </h6>
                                <p class="description fontywhite">
                                    Percentage : 92.2% <br />
                                    Stream     : Science with Physics, Chemistry and Mathematics
                                </p>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}

                        {/* <!-- start experience section--> */}
                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                            <span class="month"></span>
                                    <span class="year">2012</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title fontywhite">ICSE, CISCE</h5>
                                <h6 class=" fontywhite">
                                    <strong>
                                        St.Edmund's School Shillong
                                    </strong>
                                </h6>
                                <p class="description fontywhite">
                                    Percentage : 91.6
                                    <br />
                                    Debate Club | Vice-President
                                    <br />
                                    Quiz Club   | Core Member
                                </p>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}

                    </div>
        </div>
        </Container>
    );
}

export default TimeLine;