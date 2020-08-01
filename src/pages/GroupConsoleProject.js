import React from 'react';
import { Container } from 'react-bootstrap';

export default function GroupConsoleProject() {

    return (
        <div className="bg-dark vh-100" style={{ marginTop: "69px" }}>
            <Container className="d-flex flex-column align-items-center justify-content-center">
            <h3 className="py-2 px-5 mb-0 text-light">Group Console Project</h3>
                    <div className="py-2 px-2 mb-3 mt-0 text-light">For our first major group project we were tasked with creating a console app as a group to demonstrate our knowledge of application structure and rudimentary implementation of CRUD that interacts with JSON data.  This was a large challenge but luckily working in groups with our previous weeks work to refer to we came up with this.<br/><br/>This is a prison database allowing you to create, read, update and delete prisoners and guards.</div>
                    <iframe title="groupconsoleproject" height="570px" width="100%" src="https://repl.it/@jackhtafe/GroupConsoleApp?lite=true" scrolling="no" frameBorder="no" allowtransparency="true" allowFullScreen={true} sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
            </Container>
        </div>
    )
}