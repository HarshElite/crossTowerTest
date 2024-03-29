import React from "react";
import { Tab, Row, Col, Nav, Card, Accordion } from "react-bootstrap";
import inrdeposit from "../../data/faq";
import {
  cryptdepositwith,
  feesandbrokerage,
  kycbankacc,
  signupandaccmgmt,
  security,
} from "../../data/faq";

const Section2 = () => {
  return (
    <>
      <div className="py-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Card className="flex flex-column shadow-lg border-0">
                <Nav className="flex-column">
                  <Nav.Item>
                    <Nav.Link
                      className="py-1 text-capitalize text-faq-page-sidebar"
                      eventKey="first"
                    >
                      INR Deposit and Withdrawal
                    </Nav.Link>
                    <hr className="m-0" />
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="py-1 text-capitalize text-faq-page-sidebar"
                      eventKey="second"
                    >
                      Crypto Deposit and Withdrawal
                    </Nav.Link>
                    <hr className="m-0" />
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="py-1 text-capitalize text-faq-page-sidebar"
                      eventKey="third"
                    >
                      Fees & Brokerage
                    </Nav.Link>
                    <hr className="m-0" />
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="py-1 text-capitalize text-faq-page-sidebar"
                      eventKey="fourth"
                    >
                      KYC & Bank account
                    </Nav.Link>
                    <hr className="m-0" />
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="py-1 text-capitalize text-faq-page-sidebar"
                      eventKey="fifth"
                    >
                      Signing Up & Account Management
                    </Nav.Link>
                    <hr className="m-0" />
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="py-1 text-capitalize text-faq-page-sidebar"
                      eventKey="sixth"
                    >
                      Security
                    </Nav.Link>
                    <hr className="m-0" />
                  </Nav.Item>
                  {/* <Nav.Item>
                    <Nav.Link
                      className="py-1 text-capitalize text-faq-page-sidebar"
                      eventKey="seventh"
                    >
                      section 7
                    </Nav.Link>
                    <hr className="m-0" />
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="py-1 text-capitalize text-faq-page-sidebar"
                      eventKey="eigth"
                    >
                      section 8
                    </Nav.Link>
                    <hr className="m-0" />
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="py-1 text-capitalize text-faq-page-sidebar"
                      eventKey="ninth"
                    >
                      section 9
                    </Nav.Link>
                  </Nav.Item> */}
                </Nav>
              </Card>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div id="accordion">
                    {inrdeposit.map((item) => (
                      <div>
                        <div
                          class="card card-faq-acc mb-5 shadow-lg"
                          key={item._id}
                        >
                          <div
                            class="card-header  card-header-faq-acc"
                            id={"heading" + item._id}
                          >
                            <h5 class="mb-0">
                              <button
                                class="btn btn-acc-faq collapsed"
                                data-toggle="collapse"
                                data-target={"#" + item._id + "collapse"}
                                aria-expanded="true"
                                aria-controls={item._id + "collapse"}
                              >
                                {item.questions}
                              </button>
                            </h5>
                          </div>

                          <div
                            id={item._id + "collapse"}
                            class="collapse"
                            aria-labelledby={"heading" + item._id}
                            data-parent="#accordion"
                          >
                            <div class="card-body card-body-faq-acc">
                              {item.answers}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* <div class="card card-faq-acc my-5">
                      <div
                        class="card-header card-header-faq-acc"
                        id="headingTwo"
                      >
                        <h5 class="mb-0">
                          <button
                            class="btn  collapsed btn-acc-faq"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            What are the locations that Crosstower operates in?
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        class="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                      >
                        <div class="card-body card-body-faq-acc">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div> */}
                  {/* <div class="card card-faq-acc my-5">
                      <div
                        class="card-header card-header-faq-acc"
                        id="headingThree"
                      >
                        <h5 class="mb-0">
                          <button
                            class="btn btn-acc-faq collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            On what stock exchange(s) is Crosstower traded and
                            under what symbol?
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseThree"
                        class="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div class="card-body card-body-faq-acc">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div> */}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div id="accordionTwo">
                    {cryptdepositwith.map((item) => (
                      <div>
                        <div
                          class="card card-faq-acc mb-5 shadow-lg"
                          key={item._id}
                        >
                          <div
                            class="card-header  card-header-faq-acc"
                            id={"headingTwo" + item._id}
                          >
                            <h5 class="mb-0">
                              <button
                                class="btn btn-acc-faq collapsed"
                                data-toggle="collapse"
                                data-target={"#" + item._id + "collapseTwo"}
                                aria-expanded="true"
                                aria-controls={item._id + "collapseTwo"}
                              >
                                {item.questions}
                              </button>
                            </h5>
                          </div>

                          <div
                            id={item._id + "collapseTwo"}
                            class="collapse"
                            aria-labelledby={"headingTwo" + item._id}
                            data-parent="#accordionTwo"
                          >
                            <div class="card-body card-body-faq-acc">
                              {item.answers}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div id="accordionThree">
                    {feesandbrokerage.map((item) => (
                      <div>
                        <div
                          class="card card-faq-acc mb-5 shadow-lg"
                          key={item._id}
                        >
                          <div
                            class="card-header  card-header-faq-acc"
                            id={"headingThree" + item._id}
                          >
                            <h5 class="mb-0">
                              <button
                                class="btn btn-acc-faq collapsed"
                                data-toggle="collapse"
                                data-target={"#" + item._id + "collapseThree"}
                                aria-expanded="true"
                                aria-controls={item._id + "collapseThree"}
                              >
                                {item.questions}
                              </button>
                            </h5>
                          </div>

                          <div
                            id={item._id + "collapseThree"}
                            class="collapse"
                            aria-labelledby={"headingThree" + item._id}
                            data-parent="#accordionThree"
                          >
                            <div class="card-body card-body-faq-acc">
                              {item.answers}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <div id="accordionFour">
                    {kycbankacc.map((item) => (
                      <div>
                        <div
                          class="card card-faq-acc mb-5 shadow-lg"
                          key={item._id}
                        >
                          <div
                            class="card-header  card-header-faq-acc"
                            id={"headingFour" + item._id}
                          >
                            <h5 class="mb-0">
                              <button
                                class="btn btn-acc-faq collapsed"
                                data-toggle="collapse"
                                data-target={"#" + item._id + "collapseFour"}
                                aria-expanded="true"
                                aria-controls={item._id + "collapseFour"}
                              >
                                {item.questions}
                              </button>
                            </h5>
                          </div>

                          <div
                            id={item._id + "collapseFour"}
                            class="collapse"
                            aria-labelledby={"headingFour" + item._id}
                            data-parent="#accordionFour"
                          >
                            <div class="card-body card-body-faq-acc">
                              {item.answers}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  {" "}
                  <div id="accordionFive">
                    {signupandaccmgmt.map((item) => (
                      <div>
                        <div
                          class="card card-faq-acc mb-5 shadow-lg"
                          key={item._id}
                        >
                          <div
                            class="card-header  card-header-faq-acc"
                            id={"headingFive" + item._id}
                          >
                            <h5 class="mb-0">
                              <button
                                class="btn btn-acc-faq collapsed"
                                data-toggle="collapse"
                                data-target={"#" + item._id + "collapseFive"}
                                aria-expanded="true"
                                aria-controls={item._id + "collapseFive"}
                              >
                                {item.questions}
                              </button>
                            </h5>
                          </div>

                          <div
                            id={item._id + "collapseFive"}
                            class="collapse"
                            aria-labelledby={"headingFive" + item._id}
                            data-parent="#accordionFive"
                          >
                            <div class="card-body card-body-faq-acc">
                              {item.answers}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  {" "}
                  <div id="accordionSix">
                    {security.map((item) => (
                      <div>
                        <div
                          class="card card-faq-acc mb-5 shadow-lg"
                          key={item._id}
                        >
                          <div
                            class="card-header  card-header-faq-acc"
                            id={"headingSix" + item._id}
                          >
                            <h5 class="mb-0">
                              <button
                                class="btn btn-acc-faq collapsed"
                                data-toggle="collapse"
                                data-target={"#" + item._id + "collapseSix"}
                                aria-expanded="true"
                                aria-controls={item._id + "collapseSix"}
                              >
                                {item.questions}
                              </button>
                            </h5>
                          </div>

                          <div
                            id={item._id + "collapseSix"}
                            class="collapse"
                            aria-labelledby={"headingSix" + item._id}
                            data-parent="#accordionFour"
                          >
                            <div class="card-body card-body-faq-acc">
                              {item.answers}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>{" "}
                </Tab.Pane>
                {/* <Tab.Pane eventKey="seventh">7 </Tab.Pane>
                <Tab.Pane eventKey="eigth">8 </Tab.Pane>
                <Tab.Pane eventKey="ninth">9 </Tab.Pane> */}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
};

export default Section2;
