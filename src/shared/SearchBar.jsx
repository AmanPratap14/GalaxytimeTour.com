import React, {useRef} from 'react';
import './Search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';
 
const SearchBar = () => {

    const whereToRef= useRef('')
    const whenRef= useRef(0)
    const no_of_PeopleRef= useRef(0)

    const searchHandler = () => {

        const whereTo = whereToRef.current.value
        const when = whenRef.current.value
        const no_of_People = no_of_PeopleRef.current.value


        if(whereTo === "" || when ==="" || no_of_People ==="") {
            return alert("All fields are required!")
        }
    }


  return  <Col lg='12'>
    <div className="search__bar">
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class="ri-map-pin-line"></i></span>
                <div>
                    <h6>where to</h6>
                    <input type="text" placeholder='Where are you going?' ref={whereToRef}/>
                </div>
            </FormGroup>

            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class="ri-map-pin-time-line"></i></span>
                <div>
                    <h6>when</h6>
                    <input type="date" name="dd-mm-yyyy" id="" ref={whenRef}/>
                </div>
            </FormGroup>

            <FormGroup className='d-flex gap-3 form__group form__group-last'>
                <span><i class="ri-group-line"></i></span>
                <div>
                    <h6>how many people?</h6>
                    <input type="number" placeholder='number of traveller' ref={no_of_PeopleRef}/>
                </div>
            </FormGroup>
            <span className="search__icon" type='submit' onClick={searchHandler}>
            <i class="ri-search-line"></i>
            </span>
        </Form>
    </div>
  </Col>
}

export default SearchBar