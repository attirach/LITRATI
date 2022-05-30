import React from 'react'
import {Card, Container, Row, Col, Image} from "react-bootstrap"
import comfortBookImg from "../asets/Images/comfort-book.jpg";
import theAnswerImg from "../asets/Images/the-answer.jpg";
import onecmImg from "../asets/Images/1-CM-Diving.jpg";
import onlyeSeeImg from "../asets/Images/only-see-slow.jpg";
import noLongerHumanImg from "../asets/Images/noLongerHuman.jpg";
import atomicHabitsImg from "../asets/Images/atomic-habits.jpg";

const Recommendation = () => {
    return (
      <div>
          <Container>
              <br />
              <br />
              <h1 className='text-dark'>BOOK LIST</h1>
              <Row>
                  <Col md={4} className='bookWrapper' id="recom">
                      <Card className="card_book text-dark">
                      <Image src={comfortBookImg} alt="The Answer"/>
                          <div className='m-1 p-2'>
                              <div>
                                  <Card.Title className='text-left'>The Comfort Book</Card.Title>
                                  <Card.Text className='text-muted'>Matt Haig</Card.Text>
                                  <Card.Text className='card_deskripsi mb-4'>
                                      “It is a strange paradox, that many of the clearest, most comforting life lessons are learnt while we are at our lowest. But then we never think about food more... 
                                  </Card.Text>
                              </div>
                              <div className='text-center'>
                                  <a href="#" class="text-decoration-none">Selengkapnya</a>
                              </div>
                          </div>
                        
                      </Card>
                  </Col>
  
                  <Col md={4} className='bookWrapper'>
                      <Card className="card_book text-dark">
                      <Image src={onecmImg} alt="1 CM Diving"className='Images'/>
                          <div className='m-1 p-2'>
                          <div>
                                  <Card.Title className='text-left'>1 cm Diving</Card.Title>
                                  <Card.Text className='text-muted'>Taesoo, Munjeong</Card.Text>
                                  <Card.Text className='card_deskripsi mb-4'>
                                      “Greetings,Taesoo, a man in his immature 30s, and Munjeong, a woman in her 20s who feels like she has lived longer than her actual age... 
                                  </Card.Text>
                              </div>
                              <div className='text-center'>
                                  <a href="#" class="text-decoration-none">Selengkapnya</a>
                              </div>
                          </div>
                        
                      </Card>
                  </Col>
  
                  <Col md={4} className='bookWrapper'>
                      <Card className=" bg-dark text-center text-white book-img ">
                      <Image
                          src={onlyeSeeImg} 
                          alt="The Things You Can See"
                          className='Images'
                          />
                          <div className='m-1 p-2'>
                              <div className='bg-dark '>
                                  <Card.Title className='text-center'>The Answer</Card.Title>
                                  <Card.Text className='text-left'>
                                  This is a wider card asdkasndkasdkasndkasn asdmnasldmnlas asdlmasmdaslm
                                  </Card.Text>
                                  <Card.Text className='text-left'>Review</Card.Text>
                              </div>
                          </div>
                        
                      </Card>
                  </Col>
  
                  <Col md={4} className='bookWrapper'>
                      <Card className=" bg-dark text-center text-white book-img ">
                      <Image
                          src={noLongerHumanImg} 
                          alt="No Longer Human"
                          className='Images'
                          />
                          <div className='m-1 p-2'>
                              <div className='bg-dark '>
                                  <Card.Title className='text-center'>The Answer</Card.Title>
                                  <Card.Text className='text-left'>
                                  This is a wider card asdkasndkasdkasndkasn asdmnasldmnlas asdlmasmdaslm
                                  </Card.Text>
                                  <Card.Text className='text-left'>Review</Card.Text>
                              </div>
                          </div>
                        
                      </Card>
                  </Col>
  
                  <Col md={4} className='bookWrapper'>
                      <Card className=" bg-dark text-center text-white book-img ">
                      <Image
                          src={theAnswerImg} 
                          alt="The Answer"
                          className='Images'
                          />
                          <div className='m-1 p-2'>
                              <div className='bg-dark '>
                                  <Card.Title className='text-center'>The Answer</Card.Title>
                                  <Card.Text className='text-left'>
                                  This is a wider card asdkasndkasdkasndkasn asdmnasldmnlas asdlmasmdaslm
                                  </Card.Text>
                                  <Card.Text className='text-left'>Review</Card.Text>
                              </div>
                          </div>
                        
                      </Card>
                  </Col>
  
                  <Col md={4} className='bookWrapper'>
                      <Card className=" bg-dark text-center text-white book-img ">
                      <Image
                          src={atomicHabitsImg} 
                          alt="The Answer"
                          className='Images'
                          />
                          <div className='m-1 p-2'>
                              <div className='bg-dark '>
                                  <Card.Title className='text-center'>The Answer</Card.Title>
                                  <Card.Text className='text-left'>
                                  This is a wider card asdkasndkasdkasndkasn asdmnasldmnlas asdlmasmdaslm
                                  </Card.Text>
                                  <Card.Text className='text-left'>Review</Card.Text>
                              </div>
                          </div>
                        
                      </Card>
                  </Col>
              </Row>
          </Container>
      </div>
    )
  }
  
  export default Recommendation