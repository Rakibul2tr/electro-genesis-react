import React from 'react'
import"./Style.css"
import { Col, Row } from 'react-bootstrap'
import TechnologiesTitle from '../../common/technologiesTitle/TechnologiesTitle';

function Cytogenetics() {

  
  return (
    <>
      <section className='block-inner Cytogenetics-section'>
       <TechnologiesTitle title='Cytogenetics / FISH'/>
        <div className='content-text-part max-width'>
          {/* text and image row */}
          <Row >
             <Col md={5}>
              <div className="flowcy_image-box">
                <img src='/assets/img/technology/cytogenetic-1.png' alt="image" />
                <div className="image-caption benner-caption">
                  <span>Cytovysion-Review-Stations</span>
                </div>
              </div>
            </Col>
            
            <Col md={{span:6,offset:1}}>
              <h3 className="flowcy_description">Hematogenix® offers routine analysis of chromosomes and a wide variety of fluorescent in situ hybridization (FISH) probes.</h3>

              <p className='mt-5 pe-5'>Hematogenix uses a variety of commercially available RUO and IVD FISH probes. The Cytogenetics Department utilizes automation for processing and analysis workflow to increase service efficiency. As biomarkers are discovered and targeted therapies are developed, results from testing performed in cytogenetics has become an indispensable tool for diagnosis, treatment and management.</p>
            </Col>
           
          </Row>
          
          
        </div>
        <Row className="pagination">
            <Col md={2}>
              <div className="number">
                <span>1.1</span>
              </div>
            </Col>
            <Col md={8}>
              <div className="text">
                <span>Cytogenetics / FISH</span>
              </div>
            </Col>
        </Row>
      </section>
      <section className='block-inner Diseases-section'>
       <TechnologiesTitle title='Diseases'/>
        <div className='content-text-part max-width mb-5'>
          {/* text and image row */}
          <Row >
            <Col md={{span:4,offset:0}}>
              <ul className="underline-text mt-5">
                <li className="underline-item mb-3 pb-3">
                    <div>Leukemias (AML, ALL, CLL)</div>
                </li>
                <li className="underline-item mb-3 pb-3">
                    <div>Lymphoid</div>
                </li>
                <li className="underline-item mb-3 pb-3">
                  <div>Myeloma (MM)</div>
                  </li>
                <li className="underline-item mb-3 pb-3">
                  <div>Solid Tumors</div>
                </li>
                <li className="underline-item mb-3 pb-3">
                  <div>Non-Small Cell Lung Cancer</div>
                </li>
            </ul>
            </Col>
             <Col md={{span:7,offset:1}}>
              <div className="flowcy_image-box margin-top-lass">
                <img src='/assets/img/technology/lab-test-moluc.png' alt="image" />
              </div>
            </Col>
          </Row>
          
          
        </div>
        <Row className="pagination">
            <Col md={2}>
              <div className="number">
                <span>1.2</span>
              </div>
            </Col>
            <Col md={8}>
              <div className="text">
                <span>Diseases</span>
              </div>
            </Col>
        </Row>
      </section>

      <section className='block-inner Platforms-section'>
       <TechnologiesTitle title='Platforms'/>
        <div className='content-text-part max-width'>
          <Row className='borderd border-bottom border-1 border-dark pb-5'>
            <Col md={{span:4,offset:0}}>
              <h3 className="flowcy_description">Abbott Molecular</h3>
            </Col>
             <Col md={8}>
              <Row>
                <Col xs={4}>
                <div className="flowcy_image-box">
                  <img src='/assets/img/technology/cytogenetic-2.png' alt="image" />
                  <div className="Platforms-img-caption image-caption">
                    <span>VP2000 Processors</span>
                  </div>
                </div>
                </Col>
                <Col xs={4}>
                <div className="flowcy_image-box">
                  <img src='/assets/img/technology/cytogenetic-3.png' alt="image" />
                  <div className="image-caption Platforms-img-caption">
                    <span>ThermoBrites</span>
                  </div>
                </div>
                </Col>
              </Row>
            </Col>
          </Row>


          <Row className='py-5'>
            <Col md={{span:4,offset:0}}>
              <h3 className="flowcy_description">Others</h3>
            </Col>
             <Col md={{span:8,offset:0}}>
              <Row>
                <Col xs={4}>
                <div className="flowcy_image-box">
                  <img src='/assets/img/technology/leica.png' alt="image" />
                  <div className="Platforms-img-caption image-caption">
                    <span>Leica Biosystems GSL Imaging Systems</span>
                  </div>
                </div>
                </Col>
                <Col xs={4}>
                <div className="flowcy_image-box">
                  <img src='/assets/img/technology/metafer.png' alt="image" />
                  <div className="image-caption Platforms-img-caption">
                    <span>Metafer Scanning and Imaging Platform</span>
                  </div>
                </div>
                </Col>
                <Col xs={4}>
                <div className="flowcy_image-box">
                  <img src='/assets/img/technology/cytovysion.png' alt="image" />
                  <div className="image-caption Platforms-img-caption">
                    <span>Cytovysion-Review-Stations</span>
                  </div>
                </div>
                </Col>
                <Col xs={4}>
                <div className="flowcy_image-box mt-5">
                  <img src='/assets/img/technology/withe-logo.png' alt="image" />
                  <div className="image-caption Platforms-img-caption">
                    <span>CD138 Enrichment</span>
                  </div>
                </div>
                </Col>
              </Row>
            </Col>
          </Row>
          
        </div>
        <Row className="pagination">
            <Col md={2}>
              <div className="number">
                <span>1.3</span>
              </div>
            </Col>
            <Col md={8}>
              <div className="text">
                <span>Platforms</span>
              </div>
            </Col>
        </Row>
      </section>
      <section className='block-inner Assays-section'>
       <TechnologiesTitle title='Assays'/>
        <div className='content-text-part max-width'>
          <Row className='pb-5'>
            <Col md={{span:4,offset:0}}>
              <p>We have validated an extensive list of FISH probes, and our scientific team can assist you in selecting the most appropriate set of probes for your clinical trial. Additionally, our scientists can work with you to design and validate custom panels as needed.</p>
            </Col>
             <Col md={{span:4,offset:3}}>
                <ul className="underline-text margin-top-lass">
                    <li className="underline-item mb-3 pb-3">
                        <div>G-Banded Chromosome Analysis</div>
                    </li>
                    <li className="underline-item mb-3 pb-3">
                        <div>FISH Processing and Analysis</div>
                    </li>
                    <li className="underline-item mb-3 pb-3">
                      <div>FFPE Processing and Analysis</div>
                    </li>
                </ul>
             </Col>
          </Row>
          
        </div>
        <Row className="pagination">
            <Col md={2}>
              <div className="number">
                <span>1.4</span>
              </div>
            </Col>
            <Col md={8}>
              <div className="text">
                <span>Assays</span>
              </div>
            </Col>
        </Row>
      </section>
      <section className='block-inner Sample-type-section'>
       <TechnologiesTitle title='Sample Types'/>
        <div className='content-text-part max-width'>
          <Row className='pb-5'>
            <Col md={{span:4,offset:0}}>
              <p className='pt-5'>Our scientific experts can assist you in selecting the most appropriate sample type(s) for your clinical trial.</p>
            </Col>
             <Col md={{span:4,offset:2}}>
                <Row className="list margin-top-lass">
                    <Col xs={6} className="column item">
                        <div className="inner"><span className="label">Bone Marrow Aspirate</span></div>
                    </Col>
                    <Col xs={6} className="column item">
                        <div className="inner"><span className="label">Peripheral Blood</span></div>
                    </Col>
                    <Col xs={6} className="column item">
                        <div className="inner"><span className="label">Tissue</span></div>
                    </Col>
                    <Col xs={6} className="column item">
                        <div className="inner"><span className="label">FFPE</span></div>
                    </Col>
                </Row>
             </Col>
          </Row>
          
        </div>
        <Row className="pagination">
            <Col md={2}>
              <div className="number">
                <span>1.5</span>
              </div>
            </Col>
            <Col md={8}>
              <div className="text">
                <span>Sample Types</span>
              </div>
            </Col>
        </Row>
      </section>
    </>
  )
}

export default Cytogenetics;