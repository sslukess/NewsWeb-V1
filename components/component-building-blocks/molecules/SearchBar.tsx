
'use client'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchBar = () => {

    return (
        <Form>
            <InputGroup>
                <Form.Control type="text" placeholder='search' />
            </InputGroup>
        </Form>
    )
}

export default SearchBar;